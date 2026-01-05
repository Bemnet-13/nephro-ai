import os
from flask import Flask, send_from_directory
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from .utils.database import mongo
from .utils.config import Config

# Initialize extensions
jwt = JWTManager()
bcrypt = Bcrypt()

def create_app():
    # Set the static folder to the React build output
    base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    static_folder = os.path.join(base_dir, 'frontend', 'dist')
    app = Flask(__name__, static_folder=static_folder, static_url_path='')
    app.config.from_object(Config)

    # Initialize extensions with the app
    mongo.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)

    # Register routes
    from .routes.auth_routes import auth_routes
    from .routes.prediction_routes import prediction_routes
    app.register_blueprint(auth_routes, url_prefix='/api')
    app.register_blueprint(prediction_routes, url_prefix='/api')

    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
            return send_from_directory(app.static_folder, path)
        else:
            return send_from_directory(app.static_folder, 'index.html')

    return app