import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import MajorRequirements from './MajorRequirements';
import theme from './theme';
import './App.css';
import Navbar from './Navbar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from "./CoursesPage";




function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/requirements" element={<MajorRequirements />} />
        </Routes>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
