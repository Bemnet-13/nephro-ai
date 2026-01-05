from app.models.prediction_history import PredictionHistory
from ml_models.clinical_model import ClinicalModel

class PredictionService:
    @staticmethod
    def predict(user_id, features):
        """
        Handle prediction logic using the ClinicalModel.
        
        Args:
            user_id (str): ID of the user making the prediction.
            features (dict): Input features for prediction.
        
        Returns:
            dict: Prediction results.
        """
        # Initialize the ClinicalModel
        model = ClinicalModel()

        # Make predictions
        prediction_result = model.predict(features)

        # Save prediction history
        PredictionHistory.add_prediction(
            user_id,
            prediction_result["ckd_stage"],
            prediction_result["ckd_status_probability"]
        )

        # Return the prediction results
        return {
            "user": user_id,
            "ckd_stage": prediction_result["ckd_stage"],
            "ckd_status": prediction_result["ckd_status"],
            "ckd_status_probability": prediction_result["ckd_status_probability"],
            "status_code": 200
        }