from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app.services.auth_service import AuthService

auth_routes = Blueprint('auth_routes', __name__)

@auth_routes.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    result = AuthService.signup(username, password)
    return jsonify(result), result.get('status_code', 201)

@auth_routes.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'message': 'Username and password are required'}), 400

    result = AuthService.login(username, password)
    return jsonify(result), result.get('status_code', 200)