from flask import Blueprint, render_template, request
from flask import redirect, flash, url_for, session
from flask import render_template, current_app
from .models import Registration
from . import db
from flask import abort
from .utils import admin_required

main = Blueprint('main', __name__)

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/about')
def about():
    return render_template('about.html')

@main.route('/courses')
def courses():
    return render_template('courses.html')

from flask_babel import _

@main.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        registration = Registration(
            name=request.form['name'],
            age=int(request.form['age']),
            contact=request.form['contact'],
            course=request.form['course'],
            note=request.form.get('note', '')
        )
        db.session.add(registration)
        db.session.commit()

        # 把名字存进 session（用于展示）
        session['registered_name'] = registration.name

        # 重定向，避免重复提交
        return redirect(url_for('main.register_success'))

    return render_template('register.html')

@main.route('/register_success')
def register_success():
    name = session.pop('registered_name', None)  # 获取后自动清除
    return render_template('register_success.html', name=name)

@main.route('/set_language/<lang_code>')
def set_language(lang_code):
    session['lang'] = lang_code
    referrer = request.referrer or url_for('main.index')
    return redirect(referrer)

@main.route('/clear_lang')
def clear_lang():
    session.pop('lang', None)
    return redirect(url_for('main.index'))

@main.route('/teachers')
def teachers():
    print("teacher session:", session.get('admin_logged_in'))
    return render_template('teachers.html')

from .models import Registration

@main.route('/admin/registrations')
@admin_required
def view_registrations():
    if not session.get('admin_logged_in'):
        return redirect(url_for('main.admin_login'))
    
    records = Registration.query.order_by(Registration.id.desc()).all()
    return render_template('admin_registrations.html', records=records)

from flask import render_template, request, redirect, session, current_app
 
@main.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        from app.models import AdminUser
        user = AdminUser.query.filter_by(username=username).first()

        if user and user.check_password(password):
            session['admin_logged_in'] = True
            print("Session set:", session.get('admin_logged_in'))
            return redirect(url_for('main.admin_dashboard'))  # 你自己的管理页
        else:
            error = '用户名或密码错误'
            return render_template('admin_login.html', error=error)
    
    return render_template('admin_login.html')

@main.route('/admin/logout')
def admin_logout():
    session.pop('admin_logged_in', None)
    return redirect(url_for('main.admin_login'))

import csv
from flask import Response

@main.route('/admin/export')
@admin_required
def export_registrations():
    if not session.get('admin_logged_in'):
        return redirect(url_for('main.admin_login'))

    records = Registration.query.order_by(Registration.id).all()

    def generate():
        data = [
            ['编号', '姓名', '年龄', '联系方式', '课程', '备注']
        ]
        for r in records:
            data.append([r.id, r.name, r.age, r.contact, r.course, r.note])

        csv_file = []
        writer = csv.writer(csv_file := [])
        for row in data:
            writer.writerow(row)
        return '\n'.join(csv_file)

    return Response(
        generate(),
        mimetype='text/csv',
        headers={"Content-Disposition": "attachment;filename=registrations.csv"}
    )

import os
from flask import current_app

def list_files_by_folder(up_folder,folder_name):
    base_path = os.path.join(current_app.root_path, 'static', up_folder, folder_name)
    files = []
    if os.path.exists(base_path):
        for filename in os.listdir(base_path):
            if not filename.startswith('.'):
                files.append(filename)
    return files

@main.route('/resources/textbooks')
def resource_textbooks():
    files = list_files_by_folder('resources','textbooks')
    logged_in = session.get('resource_user_logged_in', False)
    return render_template('resources_list.html', category='教材', files=files,
                           folder='textbooks', logged_in=logged_in)

@main.route('/resources/study_videos')
def resource_study_videos():
    files = list_files_by_folder('resources','study_videos')
    logged_in = session.get('resource_user_logged_in', False)
    return render_template('resources_list.html', category='学习视频', files=files,
                           folder='study_videos', logged_in=logged_in)

@main.route('/resources/teaching_videos')
def resource_teaching_videos():
    files = list_files_by_folder('resources','teaching_videos')
    logged_in = session.get('resource_user_logged_in', False)
    return render_template('resources_list.html', category='教学视频', files=files,
                           folder='teaching_videos', logged_in=logged_in)

@main.route('/resources/ourvideos')
def resource_ourvideos():
    #files = list_files_by_folder('resources','ourvideos')
    #return render_template('resources_list.html', category='教学素材', files=files,
     #                      folder='ourvideos')
    folder_path = os.path.join(current_app.root_path, 'static/resources/ourvideos')
    all_videos = [f for f in os.listdir(folder_path) if f.lower().endswith(('.mp4', '.webm'))]
    all_videos.sort()

    # 分页
    per_page = 6
    page = request.args.get('page', 1, type=int)
    total_pages = ceil(len(all_videos) / per_page)
    start = (page - 1) * per_page
    end = start + per_page
    videos = all_videos[start:end]

    return render_template('resources_list.html', category='教学素材', videos=videos, page=page, total_pages=total_pages, folder='ourvideos')

from .models import ResourceUser
from werkzeug.security import check_password_hash  # 若加密密码

@main.route('/resources/login', methods=['GET', 'POST'])
def resource_login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        user = ResourceUser.query.filter_by(username=username).first()

        #if user and user.password == password:  # 若明文密码
        if user and check_password_hash(user.password, password):  # 若加密
            session['resource_user_logged_in'] = True
            return redirect(url_for('main.resource_textbooks'))
        else:
            return render_template('resource_login.html', error=_("用户名或密码错误"))

    return render_template('resource_login.html')


@main.route('/resources/logout')
def resource_logout():
    session.pop('resource_user_logged_in', None)
    return redirect(url_for('main.resource_login'))

from flask import render_template, redirect, url_for, request, flash
from werkzeug.security import generate_password_hash
from app.models import ResourceUser
from app import db

# 管理员查看资源用户列表
@main.route('/admin/resource-users')
@admin_required
def admin_resource_users():
    if not session.get('admin_logged_in'):
        abort(403)
    users = ResourceUser.query.all()
    return render_template('admin_resource_users.html', users=users)


# 添加新用户
@main.route('/admin/resource_users/add', methods=['POST'])
@admin_required
def add_resource_user():
    username = request.form['username']
    password = request.form['password']

    if ResourceUser.query.filter_by(username=username).first():
        flash("用户名已存在")
    else:
        hashed = generate_password_hash(password)
        new_user = ResourceUser(username=username, password=hashed)
        db.session.add(new_user)
        db.session.commit()
        flash("用户添加成功")

    return redirect(url_for('main.admin_resource_users'))

# 删除用户
@main.route('/admin/resource_users/delete/<int:user_id>', methods=['POST'])
@admin_required
def delete_resource_user(user_id):
    user = ResourceUser.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    flash("用户已删除")
    return redirect(url_for('main.admin_resource_users'))

@main.route('/admin/resource-user/<int:id>/reset', methods=['POST'])
@admin_required
def reset_resource_password(id):
    if not session.get('admin_logged_in'):
        abort(403)
    user = ResourceUser.query.get_or_404(id)
    new_pw = request.form['new_password']
    user.password = generate_password_hash(new_pw)
    db.session.commit()
    flash(_('密码已重置'))
    return redirect(url_for('main.admin_resource_users'))

import os
from flask import current_app

from math import ceil
from flask import request

@main.route('/student_corner/album')
def album():
    folder_path = os.path.join(current_app.root_path, 'static/school/album')
    all_images = [f for f in os.listdir(folder_path) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    all_images.sort()  # 可选：按文件名排序

    # 分页逻辑
    per_page = 12
    page = request.args.get('page', 1, type=int)
    total_pages = ceil(len(all_images) / per_page)
    start = (page - 1) * per_page
    end = start + per_page
    images = all_images[start:end]

    return render_template('album.html', images=images, page=page, total_pages=total_pages)


@main.route('/student_corner/works')
def works():
    folder_path = os.path.join(current_app.root_path, 'static/school/works')
    all_videos = [f for f in os.listdir(folder_path) if f.lower().endswith(('.mp4', '.webm'))]
    all_videos.sort()

    # 分页
    per_page = 6
    page = request.args.get('page', 1, type=int)
    total_pages = ceil(len(all_videos) / per_page)
    start = (page - 1) * per_page
    end = start + per_page
    videos = all_videos[start:end]

    return render_template('works.html', videos=videos, page=page, total_pages=total_pages)

@main.route('/admin/dashboard')
@admin_required
def admin_dashboard():
    print("admin_dashboard session:", session.get('admin_logged_in'))
    if not session.get('admin_logged_in'):
        abort(403)
    return render_template('admin_dashboard.html')

import os
from werkzeug.utils import secure_filename
from flask import current_app, abort, flash
from app.utils import allowed_file

@main.route('/admin/upload', methods=['GET', 'POST'])
@admin_required  # 限管理员访问
def upload_resource():
    print(">> 已进入 upload_resource 视图")
    if 'admin_logged_in' not in session:
        abort(403)
    
    if request.method == 'POST':

        file = request.files.get('file')
        category = request.form.get('category')

        if not file or not allowed_file(file.filename):
            flash("请选择允许类型的文件（PDF, MP4 等）", 'danger')
            return redirect(request.url)

        filename = secure_filename(file.filename)
        save_path = os.path.join(current_app.config['UPLOAD_FOLDER'], category)

        os.makedirs(save_path, exist_ok=True)
        file.save(os.path.join(save_path, filename))
        filename = secure_filename(file.filename)
        save_path = os.path.join(current_app.config['UPLOAD_FOLDER'], category)
        flash("文件上传成功！", "success")
        return redirect(url_for('main.upload_resource'))

    return render_template('admin_upload.html')

