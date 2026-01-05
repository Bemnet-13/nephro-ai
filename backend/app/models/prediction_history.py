from app.utils.database import mongo
from datetime import datetime

class PredictionHistory:
    @staticmethod
    def add_prediction(user_id, prediction, probability):
        prediction_data = {
            'user_id': user_id,
            'prediction': prediction,
            'probability': probability,
            'timestamp': datetime.utcnow()
        }
        mongo.db.predictions.insert_one(prediction_data)

    @staticmethod
    def get_user_history(user_id):
        return list(mongo.db.predictions.find({'user_id': user_id}))