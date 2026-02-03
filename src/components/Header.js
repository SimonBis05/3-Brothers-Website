import logo from '../assets/Website_Logo.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';


const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;

  return (
    <header className="header">
      <a href="/"><img src={logo} alt="Landscaping Logo" className="logo" /></a>
      <nav className="navbar">
        <NavLink end to="/" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('home')}</NavLink>
        <div className="services-dropdown">
          <button className="services-toggle nav-link">{t('services')} ▾</button>
          <div className="services-menu">
            <NavLink to="/interlock" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('interlock')}</NavLink>
            <NavLink to="/landscaping" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('landscaping')}</NavLink>
            <NavLink to="/decks" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('decking')}</NavLink>
            <NavLink to="/fences" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('fences')}</NavLink>
          </div>
        </div>
        <NavLink to="/projects" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('projects')}</NavLink>
        <NavLink to="/contact-us" className={({isActive})=> isActive ? 'nav-link active' : 'nav-link'}>{t('contact')}</NavLink>
      </nav>
      <div className="header-right">
        <div className="language-toggle">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={toggleLanguage}
            title="Toggle language"
          >
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
        <a href="https://www.facebook.com/p/3-Brothers-Ottawa-Landscaping-61578217040373/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/3_brothers_ottawa_landscaping/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
        </div>
    </header>
  );
};

export default Header;