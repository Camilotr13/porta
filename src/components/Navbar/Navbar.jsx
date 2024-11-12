import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href="#home">Juan Torres</a>
      </div>
      <button className="menu-btn" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;