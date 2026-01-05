from app.models.user import User
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token

bcrypt = Bcrypt()

class AuthService:
    @staticmethod
    def signup(username, password):
        existing_user = User.get_by_username(username)
        if existing_user:
            return {'message': 'User already exists', 'status_code': 400}

        new_user = User(username, password)
        User.add(new_user)
        return {'message': 'User created successfully', 'status_code': 201}

    @staticmethod
    def login(username, password):
        user_data = User.get_by_username(username)
        if not user_data:
            return {'message': 'User not found', 'status_code': 404}

        if bcrypt.check_password_hash(user_data['password'], password):
            access_token = create_access_token(identity=username)
            return {'access_token': access_token, 'status_code': 200}
        else:
            return {'message': 'Invalid password', 'status_code': 401}