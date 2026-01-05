import Navbar from '../components/Navbar'
import React, { useState } from 'react';
import PredictionService from '../services/predictionService.js'

import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';

interface FormData {
  bp: string; // Diastolic Blood Pressure
  bgr: string; // Blood Glucose Random Test
  sod: string; // Sodium Level in Blood
  htn: string; // Hypertension (Yes/No)
  dm: string; // Diabetes Mellitus (Yes/No)
  pe: string; // Pedal Edema (Yes/No)
  ane: string; // Anemia (Yes/No)
  age: string; // Patient's Age Group
}

interface FormErrors {
  bp?: string;
  bgr?: string;
  sod?: string;
  htn?: string;
  dm?: string;
  pe?: string;
  ane?: string;
  age?: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    bp: '',
    bgr: '',
    sod: '',
    htn: '',
    dm: '',
    pe: '',
    ane: '',
    age: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Handle change for TextField and RadioGroup
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle change for Select component
  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name as string]: value,
    });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.bp) newErrors.bp = 'Diastolic Blood Pressure is required';
    if (!formData.bgr) newErrors.bgr = 'Blood Glucose Random Test is required';
    if (!formData.sod) newErrors.sod = 'Sodium Level is required';
    if (!formData.htn) newErrors.htn = 'Hypertension field is required';
    if (!formData.dm) newErrors.dm = 'Diabetes Mellitus field is required';
    if (!formData.pe) newErrors.pe = 'Pedal Edema field is required';
    if (!formData.ane) newErrors.ane = 'Anemia field is required';
    if (!formData.age) newErrors.age = 'Age Group is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      // Call the userPrediction function and pass formData
      const response = await PredictionService.userPrediction(formData);

      // Handle the response if needed
      console.log("API Response:", response);

      alert('Form submitted successfully!');

      // Reset form after submission
      setFormData({
        bp: '',
        bgr: '',
        sod: '',
        htn: '',
        dm: '',
        pe: '',
        ane: '',
        age: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  } else {
    alert('Please fill out all required fields.');
  }
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-evenly max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg">
      <Typography variant="h5" className="mb-6 text-center">Patient Health Form</Typography>

      {/* Diastolic Blood Pressure (bp) */}
      <TextField
        fullWidth
        label="Diastolic Blood Pressure (bp)"
        name="bp"
        value={formData.bp}
        onChange={handleInputChange}
        error={!!errors.bp}
        helperText={errors.bp}
        className="mb-6" // Increased spacing
        sx={{ padding: '8px 0' }} // Added padding
      />

      {/* Blood Glucose Random Test (bgr) */}
      <TextField
        fullWidth
        label="Blood Glucose Random Test (bgr)"
        name="bgr"
        value={formData.bgr}
        onChange={handleInputChange}
        error={!!errors.bgr}
        helperText={errors.bgr}
        className="mb-6" // Increased spacing
        sx={{ padding: '8px 0' }} // Added padding
      />

      {/* Sodium Level in Blood (sod) */}
      <TextField
        fullWidth
        label="Sodium Level in Blood (sod)"
        name="sod"
        value={formData.sod}
        onChange={handleInputChange}
        error={!!errors.sod}
        helperText={errors.sod}
        className="mb-6" // Increased spacing
        sx={{ padding: '8px 0' }} // Added padding
      />

      {/* Hypertension (htn) - Yes/No */}
      <FormControl component="fieldset" className="mb-6">
        <Typography variant="subtitle1">Hypertension (htn)</Typography>
        <RadioGroup
          name="htn"
          value={formData.htn}
          onChange={handleInputChange}
          className="flex flex-col space-y-2" // Column layout with spacing
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {errors.htn && <Typography color="error">{errors.htn}</Typography>}
      </FormControl>

      {/* Diabetes Mellitus (dm) - Yes/No */}
      <FormControl component="fieldset" className="mb-6">
        <Typography variant="subtitle1">Diabetes Mellitus (dm)</Typography>
        <RadioGroup
          name="dm"
          value={formData.dm}
          onChange={handleInputChange}
          className="flex flex-col space-y-2" // Column layout with spacing
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {errors.dm && <Typography color="error">{errors.dm}</Typography>}
      </FormControl>

      {/* Pedal Edema (pe) - Yes/No */}
      <FormControl component="fieldset" className="mb-6">
        <Typography variant="subtitle1">Pedal Edema (pe)</Typography>
        <RadioGroup
          name="pe"
          value={formData.pe}
          onChange={handleInputChange}
          className="flex flex-col space-y-2" // Column layout with spacing
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {errors.pe && <Typography color="error">{errors.pe}</Typography>}
      </FormControl>

      {/* Anemia (ane) - Yes/No */}
      <FormControl component="fieldset" className="mb-6">
        <Typography variant="subtitle1">Anemia (ane)</Typography>
        <RadioGroup
          name="ane"
          value={formData.ane}
          onChange={handleInputChange}
          className="flex flex-col space-y-2" // Column layout with spacing
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {errors.ane && <Typography color="error">{errors.ane}</Typography>}
      </FormControl>

      {/* Patient's Age Group (age) */}
      <FormControl fullWidth className="mb-6">
        <InputLabel>Patient's Age Group</InputLabel>
        <Select
          name="age"
          value={formData.age}
          onChange={handleSelectChange}
          label="Patient's Age Group"
          error={!!errors.age}
        >
          <MenuItem value="0-18">0-18</MenuItem>
          <MenuItem value="19-35">19-35</MenuItem>
          <MenuItem value="36-50">36-50</MenuItem>
          <MenuItem value="51+">51+</MenuItem>
        </Select>
        {errors.age && <Typography color="error">{errors.age}</Typography>}
      </FormControl>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className="mt-6"
      >
        Submit
      </Button>
    </form>
  );
};

function UserInput() {
  return (
    <div>
        <Navbar />
        <Form />
    </div>
  )
}

export default UserInput