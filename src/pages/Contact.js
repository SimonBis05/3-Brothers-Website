import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to request a quote, please reach out to us!</p>
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:3brothersottawalandscaping@gmail.com">
              3brothersottawalandscaping@gmail.com
            </a>
          </p>
          <p><strong>Phone:</strong> (613) 798-3968</p>
        </div>
        <div className="contact-social">
          <h3>Follow Us</h3>
          <p>
            <a href="https://www.facebook.com/p/3-Brothers-Ottawa-Landscaping-61578217040373/" target="_blank" rel="noopener noreferrer">
              Facebook: 3BrothersOttawaLandscaping
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/3_brothers_ottawa_landscaping/" target="_blank" rel="noopener noreferrer">
              Instagram: @3BrothersOttawaLandscaping
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;