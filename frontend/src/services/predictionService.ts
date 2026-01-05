// predictionService.ts
import api from './api.ts';

interface FeatureDetails {
  bp: string;
  bgr: string;
  sod: string;
  htn: string;
  dm: string;
  pe: string;
  ane: string;
  age: string;
}

const PredictionService = {
  userPrediction: async (featureDetails: FeatureDetails) => {
    try {
      const response = await api.post('/predict', featureDetails);
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
  clinicalPrediction: async () => {
    try {
      const response = await api.post('/', {
        // Add required fields here
      });
      console.log('Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  },
};

export default PredictionService;