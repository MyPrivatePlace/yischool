# app/utils.py

from flask import current_app

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in current_app.config['ALLOWED_EXTENSIONS']

from functools import wraps
from flask import session, redirect, url_for, abort

def admin_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('admin_logged_in'):
            # redirect 可选，或直接 abort
            return redirect(url_for('main.admin_login'))
            # 或使用： abort(403)
        return f(*args, **kwargs)
    return decorated_function


