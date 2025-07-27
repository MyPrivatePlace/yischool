from app import create_app, db
from app.models import ResourceUser
from werkzeug.security import generate_password_hash

def create_user(username, password):
    app = create_app()
    with app.app_context():
        if ResourceUser.query.filter_by(username=username).first():
            print(f"用户 {username} 已存在")
            return

        user = ResourceUser(username=username)
        user.password = generate_password_hash(password)
        db.session.add(user)
        db.session.commit()
        print(f"用户 {username} 添加成功")


if __name__ == "__main__":
    import sys

    if len(sys.argv) != 3:
        print("用法: python create_resource_user.py 用户名 密码")
    else:
        username = sys.argv[1]
        password = sys.argv[2]
        create_user(username, password)
