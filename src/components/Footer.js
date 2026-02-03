import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

function Footer() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;

  return (
    <footer className="footer">
      <div className="footer-section services">
        <h2>{t('footerServices')}</h2>
        <ul>
          <li><Link to="/interlock">{t('interlock')}</Link></li>
          <li><Link to="/landscaping">{t('landscaping')}</Link></li>
          <li><Link to="/decks">{t('decking')}</Link></li>
          <li><Link to="/fences">{t('fences')}</Link></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h2>{t('contactUs')}</h2>
        <p><strong>3 Brothers Landscaping</strong></p>
        <p className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          {t('ottawa')}
        </p>
        <p className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <a href="mailto:3brothersottawalandscaping@gmail.com">3brothersottawalandscaping@gmail.com</a>
        </p>
        <p className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <a href="tel:+16137983968">(613) 798-3968</a>
        </p>
        <div className="footer-social">
          <a href="https://www.facebook.com/p/3-Brothers-Ottawa-Landscaping-61578217040373/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.instagram.com/3_brothers_ottawa_landscaping/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;