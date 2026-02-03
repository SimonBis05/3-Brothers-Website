import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
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
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
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
      setStatus({ type: 'error', message: t('fillRequired') });
      return;
    }

    setStatus({ type: 'loading', message: t('sendingMessage') });

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
        setStatus({ type: 'success', message: t('messageSent') });
        setForm({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || t('sendingFailed') });
      }
    } catch (err) {
      setStatus({ type: 'error', message: t('networkError') });
    }
  };

  const projectImages = [interlockImg, landscapingImg, decksImg, wallImg, stampedPadImg, pergolaImg, repairImg, drivewayImg, fenceImg, pressureImg];

  return (
    <div className="contact-page">
      <Helmet>
        <title>{t('contactTitle')}</title>
        <meta name="description" content={t('contactPageMeta')} />
        <link rel="canonical" href="https://www.3brothersottawalandscaping.ca/contact-us" />
      </Helmet>
      <div className="contact-container">
        {/* Left Section: Contact Info */}
        <section className="contact-info-section">
          <h2>{t('connectWithUs')}</h2>
          <p className="intro-text">{t('projectInMind')}</p>

          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h4>{t('location')}</h4>
              <p>{t('ottawa')}</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h4>{t('phone')}</h4>
              <p><a href="tel:+16137983968">(613) 798-3968</a></p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h4>{t('email')}</h4>
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
                  placeholder={t('yourName')}
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
                  placeholder={t('yourEmail')}
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
                placeholder={t('phoneNumber')}
              />
            </div>

            <div className="field-group">
              <input
                type="text"
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder={t('messageSubject')}
              />
            </div>

            <div className="field-group">
              <textarea
                id="message"
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                placeholder={t('yourMessage')}
                required
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="submit-button">{t('sendBtn')}</button>
            </div>

            {status && (
              <div className={`form-status ${status.type}`}>{status.message}</div>
            )}
          </form>
        </section>
      </div>

      {/* Project Gallery Below */}
      <div className="contact-projects">
        <h3>{t('projectsTitle')}</h3>
        <div className="projects-grid">
          {projectImages.map((img, idx) => {
            const projectTypes = [t('interlock'), t('landscaping'), t('decking'), t('retainingWalls'), t('stampedConcrete'), t('pergolas'), t('relevel'), t('driveways'), t('fences'), t('pressureWashing')];
            const projectType = projectTypes[idx % projectTypes.length];
            return (
              <div key={idx} className="project-thumb">
                <img src={img} alt={`${projectType} ${t('projectAltSuffix')}`} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;