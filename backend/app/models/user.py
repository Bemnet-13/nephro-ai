from app.utils.database import mongo
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt()

class User:
    def __init__(self, username, password):
        self.username = username
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')

    @staticmethod
    def get_by_username(username):
        return mongo.db.users.find_one({'username': username})

    @staticmethod
    def add(user):
        mongo.db.users.insert_one(user.__dict__)