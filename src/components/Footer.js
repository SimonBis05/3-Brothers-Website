import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section services">
        <h2>Services</h2>
        <ul>
          <li>Interlock</li>
          <li>Landscaping</li>
          <li>Decks</li>
          <li>Fences</li>
          <li>Relevel & Repairs</li>
        </ul>
      </div>
      <div className="footer-section contact">
        <h2>Contact Us</h2>
        <p><strong>3 Brothers Landscaping</strong></p>
        <p>Ottawa, ON</p>
        <p><strong>Email:</strong> 3brothersottawalandscaping@gmail.com</p>
        <p><strong>Phone:</strong> (613) 798-3968</p>
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