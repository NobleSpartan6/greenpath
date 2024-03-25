import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">Green Path</div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/courses" className="nav-link">Browse Courses</Link>
          <Link to="/requirements" className="nav-link">Major Requirements</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </header>
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
const MajorRequirementsPage = () => <div>Major Requirements Page Content</div>;
const AboutPage = () => <div>About Page Content</div>;

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/requirements" element={<MajorRequirementsPage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
