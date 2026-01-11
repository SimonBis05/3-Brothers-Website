import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink end to="/" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>

      <div className="services-dropdown">
        <button className="services-toggle">Services ▾</button>
        <div className="services-menu">
          <NavLink to="/interlock" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Interlock</NavLink>
          <NavLink to="/landscaping" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Landscaping</NavLink>
          <NavLink to="/decks" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Decking & Railings</NavLink>
          <NavLink to="/fences" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Fences</NavLink>
        </div>
      </div>

      <NavLink to="/projects" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink>
      <NavLink to="/contact" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
    </nav>
  );
};

export default Navbar;