import React, { useState } from 'react'; // Added useState
import logo from '../assets/Website_Logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Added bars/times icons
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const t = (key) => translations[language]?.[key] || key;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <NavLink to="/" onClick={closeMenu}>
        <img src={logo} alt="Landscaping Logo" className="logo" />
      </NavLink>

      {/* Desktop Navbar */}
      <nav className="navbar">
        <NavLink end to="/" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('home')}</NavLink>
        <div className="services-dropdown">
          <button className="services-toggle nav-link">{t('services')} ▾</button>
          <div className="services-menu">
            <NavLink to="/interlock" className="nav-link">{t('interlock')}</NavLink>
            <NavLink to="/landscaping" className="nav-link">{t('landscaping')}</NavLink>
            <NavLink to="/decks" className="nav-link">{t('decking')}</NavLink>
            <NavLink to="/fences" className="nav-link">{t('fences')}</NavLink>
          </div>
        </div>
        <NavLink to="/projects" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('projects')}</NavLink>
        <NavLink to="/about-us" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('about')}</NavLink>
        <NavLink to="/contact-us" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('contact')}</NavLink>
      </nav>

      <div className="header-right">
        <div className="language-toggle">
          <button className="lang-btn" onClick={toggleLanguage}>
            {language === 'en' ? 'Eng' : 'Fr'}
          </button>
        </div>

        <div className="phone-number">
          <a href="tel:+16137983968" className="phone-text">(613) 798-3968</a>
          <a href="tel:+16137983968" className="phone-icon">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </div>

        <div className="social-icons">
          <a href="https://facebook.com..." target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://instagram.com..." target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

        {/* Hamburger Toggle - Only visible on small screens via CSS */}
        <button className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMenu} className="nav-link">{t('home')}</NavLink>
        <div className="mobile-services">
          <span className="services-title">{t('services')}</span>
          <NavLink to="/interlock" onClick={closeMenu} className="nav-link">{t('interlock')}</NavLink>
          <NavLink to="/landscaping" onClick={closeMenu} className="nav-link">{t('landscaping')}</NavLink>
          <NavLink to="/decks" onClick={closeMenu} className="nav-link">{t('decking')}</NavLink>
          <NavLink to="/fences" onClick={closeMenu} className="nav-link">{t('fences')}</NavLink>
        </div>
        <NavLink to="/projects" onClick={closeMenu} className="nav-link">{t('projects')}</NavLink>
        <NavLink to="/about-us" onClick={closeMenu} className="nav-link">{t('about')}</NavLink>
        <NavLink to="/contact-us" onClick={closeMenu} className="nav-link">{t('contact')}</NavLink>
      </div>
    </header>
  );
};

export default Header;