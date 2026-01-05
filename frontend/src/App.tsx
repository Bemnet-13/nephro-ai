import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import { Features } from './components/Features';
import Hero from './components/Hero';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import UserInput from './pages/UserInput';

const theme = createTheme({
  typography: {
    fontFamily: '"Arsenal", "Arial", sans-serif',  // Use Urbanist as the default font
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 to-white p-4 md:p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/input/user" element={<UserInput />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;