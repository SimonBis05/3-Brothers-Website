import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';
import interlockImg from '../assets/Interlock/interlock_01.webp';
import landscapingImg from '../assets/Landscaping/landscaping_01.webp';
import decksImg from '../assets/Decks_&_Railings/deck_01.webp';
import wallImg from '../assets/Retaining_Walls/retaining_01.webp';
import stampedPadImg from '../assets/Stamped_Concrete/stamped_01.webp';
import pergolaImg from '../assets/Pergolas/pergola_01.webp';
import repairImg from '../assets/Relevels_&_Repairs/relevel_01.webp';
import drivewayImg from '../assets/Driveways/driveway_01.webp';
import fenceImg from '../assets/Fences/fence_01.webp';
import pressureImg from '../assets/Pressure_Washing_&_Resand/pressure_01.webp';

const Contact = () => {
  const FORM_ENDPOINT = 'https://formspree.io/f/mykyqjbe';
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in Name, Email and Message.' });
      return;
    }

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent — we will get back to you shortly.' });
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Sending failed. Please try again later.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again later.' });
    }
  };

  const projectImages = [interlockImg, landscapingImg, decksImg, wallImg, stampedPadImg, pergolaImg, repairImg, drivewayImg, fenceImg, pressureImg];

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - Get Free Quote | 3 Brothers Ottawa Landscaping</title>
        <meta name="description" content="Contact 3 Brothers Ottawa Landscaping for a free landscaping quote. Call (613) 798-3968 or fill out our form. We serve Ottawa, Ontario." />
        <link rel="canonical" href="https://www.3brothersottawalandscaping.ca/contact-us" />
      </Helmet>
      <div className="contact-container">
        {/* Left Section: Contact Info */}
        <section className="contact-info-section">
          <h2>Connect with Us</h2>
          <p className="intro-text">Have a project in mind? Get in touch with our team to discuss your landscaping needs and get a free quote.</p>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Ottawa, Ontario</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h4>Phone</h4>
              <p><a href="tel:+16137983968">(613) 798-3968</a></p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h4>Email</h4>
              <p><a href="mailto:3brothersottawalandscaping@gmail.com">3brothersottawalandscaping@gmail.com</a></p>
            </div>
          </div>
        </section>

        {/* Right Section: Contact Form */}
        <section className="contact-form-section">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="field-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>
            </div>

            <div className="field-group">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
            </div>

            <div className="field-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>

            <div className="field-group">
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">Send Message</button>
            </div>

            {status && (
              <div className={`form-status ${status.type}`}>{status.message}</div>
            )}
          </form>
        </section>
      </div>

      {/* Project Gallery Below */}
      <div className="contact-projects">
        <h3>Our Projects</h3>
        <div className="projects-grid">
          {projectImages.map((img, idx) => {
            const projectTypes = ['Interlock Paving', 'Landscaping', 'Decks & Railings', 'Retaining Walls', 'Stamped Concrete', 'Pergolas', 'Relevel & Repairs', 'Driveways', 'Fences', 'Pressure Washing'];
            const projectType = projectTypes[idx % projectTypes.length];
            return (
              <div key={idx} className="project-thumb">
                <img src={img} alt={`${projectType} project example - 3 Brothers Ottawa Landscaping`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;