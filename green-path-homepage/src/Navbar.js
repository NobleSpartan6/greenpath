// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="header">
    <nav className="navbar">
      <div className="logo">Green Path</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/courses">Browse Courses</Link>
        <Link to="/requirements">Major Requirements</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
