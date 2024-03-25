import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import MajorRequirements from './MajorRequirements';
import './App.css';

const HomePage = () => {
  return (
    <div className="homepage">
       <Navbar />
      <main className="main-content">
        <section className="intro-section">
          <h1>Introduction to the Website</h1>
          <p>Welcome to Green Path, where your sustainable education journey begins. Find courses, explore majors, and build a future in sustainability through living labs.</p>
        </section>
        <section className="tutorial-links">
          <h2>Tutorial and Quick Links</h2>
          <p>Not sure where to start? Check out our tutorial or explore these quick links to get on the right path.</p>
          {/* Insert actual links here */}
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Green Path. All rights reserved.</p>
      </footer>
    </div>
  );
};

// Placeholder components for other routes
const CoursesPage = () => <div>Courses Page Content</div>;
const AboutPage = () => <div>About Page Content</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/requirements" element={<MajorRequirements />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
