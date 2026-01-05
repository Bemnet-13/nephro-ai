import React, { useState } from 'react';
import { TextField, Button, Typography, Paper, Tabs, Tab, Box } from '@mui/material';
import { Lock as LockIcon, Person as PersonIcon } from '@mui/icons-material';
import NephroAiLogo from '../assets/nephroai_logo.svg';


const AuthPage: React.FC = () => {
  const [tabValue, setTabValue] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (tabValue === 0) {
      console.log('Logging in with:', email, password);
    } else {
      console.log('Signing up with:', email, password);
    }
  };

  return (
    // <div className="min-h-screen p-10 bg-gradient-to-b from-blue-50 to-white"></div>
    <div className="flex items-center animate-slide-in-right justify-center min-h-screen bg-gradient-to-b">
      <Paper className="p-8 w-full max-w-md">
          <div className="flex items- animate-fade-in justify-center mb-8">   
              <img src={NephroAiLogo} alt="NephroAI Logo" className="w-16 h-16 md:w-24 h-24" />
          </div>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Login" />
          <Tab label="Signup" />
        </Tabs>

        <Box mt={4}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
              InputProps={{
                startAdornment: <PersonIcon className="mr-2" />,
              }}
            />
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
              InputProps={{
                startAdornment: <LockIcon className="mr-2" />,
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              className="mt-8 h-12"
            >
              {tabValue === 0 ? 'Login' : 'Signup'}
            </Button>
          </form>

          <Typography variant="body2" className="mt-4 text-center">
            {tabValue === 0 ? "Don't have an account? " : 'Already have an account? '}
            <Button
              color="primary"
              className='h-8'
              onClick={() => setTabValue(tabValue === 0 ? 1 : 0)}
            >
              {tabValue === 0 ? 'Signup' : 'Login'}
            </Button>
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default AuthPage;