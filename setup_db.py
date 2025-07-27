from app import create_app, db
from app.models import Registration  # 确保 models.py 中有 Registration
from app.models import ResourceUser

app = create_app()

with app.app_context():
    db.create_all()


