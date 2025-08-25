import React from 'react';
import logo from '../assets/logo.jpg';
import Navbar from './Navbar';
import './Header.css'; // Assuming you will create a CSS file for header styles

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Landscaping Logo" className="logo" />
      <Navbar />
    </header>
  );
};

export default Header;