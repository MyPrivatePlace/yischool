from app import create_app

app = create_app()
app.debug = False   # ✅ 开启调试模式

if __name__ == '__main__':
    app.run()

