import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';
import logo from "../Components/Img/Easy2Solutions.png"; // Import your logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Easy2Solutions Logo" className="logo-image" />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isOpen ? 'open' : ''}`}></span>
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Products">Products</Link></li>
          <li><Link to="/Blogs">Blogs</Link></li>
          <li><Link to="/Faq">FAQ</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>

        {/* Icons */}
        <div className="navbar-icons">
          <Link to="/Cart" className="icon-link">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to="/Account" className="icon-link">
            <i className="fas fa-user"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;