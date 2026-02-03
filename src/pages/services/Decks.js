import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import deck01 from '../../assets/Decks_&_Railings/deck_01.webp';
import deck03 from '../../assets/Decks_&_Railings/deck_03.webp';
import deck04 from '../../assets/Decks_&_Railings/deck_04.webp';

const Decks = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
  const canonical = 'https://www.3brothersottawalandscaping.ca/decks';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Decking & Railings",
    "provider": {
      "@type": "LocalBusiness",
      "name": "3 Brothers Landscaping",
      "telephone": "+1-613-798-3968",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ottawa",
        "addressRegion": "ON"
      }
    },
    "areaServed": "Ottawa, ON",
    "description": "Custom decking and railings installations in Ottawa."
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.3brothersottawalandscaping.ca/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.3brothersottawalandscaping.ca/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Decks & Railings",
        "item": "https://www.3brothersottawalandscaping.ca/decks"
      }
    ]
  };

  return (
    <div className="service-page decks-page">
      <Helmet>
        <title>{t('decksTitle')} | 3 Brothers Landscaping</title>
        <meta name="description" content={t('decksHero')} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <header className="service-hero">
        <h1>{t('decksTitle')}</h1>
        <p>{t('decksHero')}</p>
      </header>

      <section className="service-content">
        <p>{t('decksIntro')}</p>
        <h2>{t('decksMaterialsTitle')}</h2>
        <p><span className="svc-label">{t('decksMaterialsDeckingLabel')}: </span><span className="svc-desc">{t('decksMaterialsDeckingDesc')}</span></p>
        <p><span className="svc-label">{t('decksMaterialsRailingsLabel')}: </span><span className="svc-desc">{t('decksMaterialsRailingsDesc')}</span></p>

        <h3>{t('decksGallery')}</h3>
        <div className="gallery">
          <Link to="/projects#decks">
            <img src={deck01} alt={t('decksImgAlt1')} />
          </Link>
          <Link to="/projects#decks">
            <img src={deck03} alt={t('decksImgAlt2')} />
          </Link>
          <Link to="/projects#decks">
            <img src={deck04} alt={t('decksImgAlt3')} />
          </Link>
        </div>

        <div className="cta"><a href="/contact-us" className="btn">{t('requestEstimate')}</a></div>
      </section>
    </div>
  );
};

export default Decks;
