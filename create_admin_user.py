from app import create_app, db
from app.models import AdminUser

def create_user(username, password):
    app = create_app()

    with app.app_context():
        username = input("请输入管理员用户名：")
        password = input("请输入密码：")

        existing = AdminUser.query.filter_by(username=username).first()
        if existing:
            print("用户已存在")
        else:
            user = AdminUser(username=username)
            user.set_password(password)
            db.session.add(user)
            db.session.commit()
            print("管理员账号创建成功！")


if __name__ == "__main__":
    import sys

    if len(sys.argv) != 3:
        print("用法: python create_admin_user.py 用户名 密码")
    else:
        username = sys.argv[1]
        password = sys.argv[2]
        create_user(username, password)
