import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink end to="/" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
      <NavLink to="/projects" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
      <NavLink to="/contact" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
    </nav>
  );
};

export default Navbar;