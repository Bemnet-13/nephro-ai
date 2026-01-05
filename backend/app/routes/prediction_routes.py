from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.services.prediction_service import PredictionService

prediction_routes = Blueprint('prediction_routes', __name__)

@prediction_routes.route('/predict', methods=['POST'])
@jwt_required()
def predict():
    # Get the identity of the current user
    current_user = get_jwt_identity()

    # Get input data from the request
    data = request.get_json()
    if not data or 'features' not in data:
        return jsonify({'message': 'No input data provided'}), 400

    # Call the PredictionService
    result = PredictionService.predict(current_user, data['features'])
    return jsonify(result), result.get('status_code', 200)