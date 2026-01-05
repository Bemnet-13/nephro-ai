# NephroAI - Kidney Failure Prediction & Support

NephroAI is an integrated web application designed to assist in the early detection and management of Chronic Kidney Disease (CKD). It combines a high-performance React frontend with a robust Flask backend and machine learning models for clinical risk assessment.

## Project Structure

```text
nephro-ai/
├── backend/           # Flask API & ML Integration
│   ├── app/           # Application logic (Auth, Predictions, Database)
│   ├── ml_models/     # Pre-trained ML models (.pkl)
│   ├── venv/          # Python virtual environment
│   └── .env           # Environment variables (Mongo URI, etc.)
├── frontend/          # React Frontend (Vite + TS)
│   ├── src/           # Component & business logic
│   └── dist/          # Production build output
├── notebooks/         # Jupyer Notebooks for model research
└── kidney-failure-prediction/ # Core ML research and datasets
```

## Features

- **ML Prediction**: Real-time risk assessment using clinical features (Blood Pressure, Age, Sodium, etc.).
- **User Authentication**: Secure JWT-based login and registration.
- **Unified Architecture**: Flask serves both the API and the React production build.
- **Database Integration**: Scalable storage using MongoDB (Local or Atlas).

## Prerequisites

- Python 3.9+
- Node.js & npm (for frontend development)
- MongoDB (Local instance or Atlas subscription)

## Quick Start

### 1. Backend Setup
```bash
cd backend
# Create and activate venv if not already done
python -m venv venv
source venv/Scripts/activate  # Windows: .\venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Configuration
Create/edit `backend/.env`:
```env
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
```

### 3. Run the Application
```bash
python run.py
```
Visit `http://127.0.0.1:5000` in your browser.

## Development

- **Frontend**: To work on the frontend separately, navigate to `frontend/` and run `npm install && npm run dev`. The API client is configured to proxy requests to the backend.
- **Models**: Research artifacts are located in `notebooks/` and `kidney-failure-prediction/`.

## License
MIT