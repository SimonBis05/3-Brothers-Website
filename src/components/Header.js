import React from 'react';
import logo from '../assets/logo.jpg';
import Navbar from './Navbar';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Landscaping Logo" className="logo" />
      <Navbar />
      <div className="social-icons">
        <a href="https://www.facebook.com/p/3-Brothers-Ottawa-Landscaping-61578217040373/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/3_brothers_ottawa_landscaping/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </header>
  );
};

export default Header;