import os

class Config:
    SECRET_KEY = 'yischool-super-secret-key'
    BABEL_DEFAULT_LOCALE = 'zh'
    LANGUAGES = ['zh', 'nl']
    BASEDIR = os.path.abspath(os.path.dirname(__file__))

    #SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "mysql+pymysql://kang:Welkom123@localhost/yischool")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL")
	SQLALCHEMY_TRACK_MODIFICATIONS = False

    # config.py
    UPLOAD_FOLDER = os.path.join(os.path.abspath(os.path.dirname(__file__)),'app', 'static', 'resources')

    ALLOWED_EXTENSIONS = {'pdf', 'mp4', 'mov', 'avi', 'mkv'}
    MAX_CONTENT_LENGTH = 500 * 1024 * 1024  # 限制最大 500MB
