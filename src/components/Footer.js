import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section services">
        <h2>Services</h2>
        <ul>
          <li><Link to="/interlock">Interlock</Link></li>
          <li><Link to="/landscaping">Landscaping</Link></li>
          <li><Link to="/decks">Decking & Railings</Link></li>
          <li><Link to="/fences">Fences</Link></li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h2>Contact Us</h2>
        <p><strong>3 Brothers Landscaping</strong></p>
        <p className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          Ottawa, ON
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