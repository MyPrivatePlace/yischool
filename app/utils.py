# app/utils.py
import os
import json
from werkzeug.security import generate_password_hash
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

RESOURCE_USERS_FILE = os.path.join(os.path.dirname(__file__), 'data', 'resource_users.json')

def load_resource_users():
    if not os.path.exists(RESOURCE_USERS_FILE):
        return []
    with open(RESOURCE_USERS_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_resource_users(users):
    with open(RESOURCE_USERS_FILE, 'w', encoding='utf-8') as f:
        json.dump(users, f, indent=2, ensure_ascii=False)

ADMIN_USERS_FILE = os.path.join(os.path.dirname(__file__), 'data', 'admin_users.json')

def get_admin_user(username):
    if not os.path.exists(ADMIN_USERS_FILE):
        return []
    with open(ADMIN_USERS_FILE, 'r') as f:
        users = json.load(f)
    for user in users:
        if user['username'] == username:
            return user
    return None

# utils.py 中添加
import os
import csv

def load_registrations():
    csv_path = os.path.join(os.path.dirname(__file__), 'data', 'registrations.csv')
    records = []

    if not os.path.exists(csv_path):
        return []

    with open(csv_path, newline='', encoding='utf-8') as f:
        reader = csv.reader(f)
        headers = next(reader, None)  # 跳过表头
        for idx, row in enumerate(reader, start=1):
            if row:
                records.append([idx] + row)  # 加上编号
    return records

def save_registration(record):
    REGISTRATIONS_FILE = os.path.join(os.path.dirname(__file__), 'data', 'registrations.csv')
    file_exists = os.path.exists(REGISTRATIONS_FILE)
    write_header = not file_exists or os.stat(REGISTRATIONS_FILE).st_size == 0

    with open(REGISTRATIONS_FILE, 'a', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=['id', 'name', 'age', 'contact', 'course', 'note'])
        if write_header:
            writer.writeheader()
        writer.writerow(record)
