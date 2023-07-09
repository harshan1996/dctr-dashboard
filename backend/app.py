from flask import Flask
from flask_cors import CORS
from apis.users import users_api
from apis.media import media_api

app = Flask(__name__)
CORS(app)

app.register_blueprint(users_api)
app.register_blueprint(media_api)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
