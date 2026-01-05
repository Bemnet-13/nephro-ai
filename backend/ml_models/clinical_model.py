import pickle
import os
import numpy as np

class ClinicalModel:
    def __init__(self):
        # Define paths to the trained models
        BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Get the directory of this file
        self.MODEL_PATH_REGRESSION = os.path.join(BASE_DIR, "ckd_stage_model_user.pkl")
        self.MODEL_PATH_CLASSIFICATION = os.path.join(BASE_DIR, "ckd_classification_model_user.pkl")

        # Load the trained models
        with open(self.MODEL_PATH_REGRESSION, "rb") as f:
            self.reg_model = pickle.load(f)

        with open(self.MODEL_PATH_CLASSIFICATION, "rb") as f:
            self.clf_model = pickle.load(f)

    def predict(self, features):
        """
        Predict CKD stage (regression) and CKD status (classification).
        
        Args:
            features (dict): Input features for prediction.
        
        Returns:
            dict: Prediction results for both regression and classification.
        """
        # Convert features to a format suitable for the model
        input_data = self._prepare_input(features)

        # Make predictions
        ckd_stage = self.reg_model.predict(input_data)[0]  # Regression prediction
        ckd_status = self.clf_model.predict(input_data)[0]  # Classification prediction
        ckd_status_prob = self.clf_model.predict_proba(input_data)[0][1]  # Probability of CKD

        return {
            "ckd_stage": float(ckd_stage),
            "ckd_status": int(ckd_status),
            "ckd_status_probability": float(ckd_status_prob)
        }

    def _prepare_input(self, features):
        """
        Prepare input data for the model.
        
        Args:
            features (dict): Input features from the request.
        
        Returns:
            numpy.ndarray: Processed input data for the model.
        """
        # Define the expected feature order
        feature_order = ["bp (Diastolic)", "bgr", "sod", "htn", "dm", "pe", "ane", "age"]

        # Convert the features into a list in the correct order
        input_data = [features[feature] for feature in feature_order]

        # Convert to a 2D numpy array (required by scikit-learn models)
        return np.array(input_data).reshape(1, -1)