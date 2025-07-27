from flask import Flask, request, session
from flask_babel import Babel, get_locale
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask import render_template

babel = Babel()
db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    babel.init_app(app, locale_selector=select_locale)
    
    from .routes import main
    app.register_blueprint(main)

    # 注册错误页面处理器
    @app.errorhandler(404)
    def not_found_error(error):
        return render_template('404.html'), 404

    @app.errorhandler(500)
    def internal_error(error):
        return render_template('500.html'), 500

    return app

def select_locale():
    if 'lang' in session:
        return session['lang']
    # 否则使用浏览器默认
    return request.accept_languages.best_match(['zh', 'nl']) or 'zh'


