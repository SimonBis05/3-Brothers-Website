import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} 3 Brothers Landscaping</p>
        <p>Contact us: info@3brotherslandscaping.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </footer>
  );
}

export default Footer;