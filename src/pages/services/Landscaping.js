import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import landscaping01 from '../../assets/Landscaping/landscaping_01.webp';
import landscaping02 from '../../assets/Landscaping/landscaping_02.webp';
import landscaping04 from '../../assets/Landscaping/landscaping_04.webp';

const Landscaping = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
  const canonical = 'https://www.3brothersottawalandscaping.ca/landscaping';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Landscaping",
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
    "description": "Professional landscaping services including garden beds, mulch, sodding, and lawn care in Ottawa."
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
        "name": "Landscaping",
        "item": "https://www.3brothersottawalandscaping.ca/landscaping"
      }
    ]
  };

  return (
    <div className="service-page landscaping-page">
      <Helmet>
        <title>{t('landscapingTitle')} | 3 Brothers Landscaping</title>
        <meta name="description" content={t('landscapingHero')} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <header className="service-hero">
        <h1>{t('landscapingTitle')}</h1>
        <p>{t('landscapingHero')}</p>
      </header>

      <section className="service-content">
        <h2>{t('landscapingServicesTitle')}</h2>
        <p>{t('landscapingListIntro')}</p>
        <p><span className="svc-label">{t('landscapingGardenBedsLabel')}: </span><span className="svc-desc">{t('landscapingGardenBedsDesc')}</span></p>
        <p><span className="svc-label">{t('landscapingMulchingLabel')}: </span><span className="svc-desc">{t('landscapingMulchingDesc')}</span></p>
        <p><span className="svc-label">{t('landscapingSoddingLabel')}: </span><span className="svc-desc">{t('landscapingSoddingDesc')}</span></p>
        <p><span className="svc-label">{t('landscapingTreePlantingLabel')}: </span><span className="svc-desc">{t('landscapingTreePlantingDesc')}</span></p>
        <p><span className="svc-label">{t('landscapingIrrigationLabel')}: </span><span className="svc-desc">{t('landscapingIrrigationDesc')}</span></p>

        <h3>{t('landscapingGallery')}</h3>
        <div className="gallery">
          <Link to="/projects#landscaping">
            <img src={landscaping01} alt={t('landscapingImgAlt1')} />
          </Link>
          <Link to="/projects#landscaping">
            <img src={landscaping02} alt={t('landscapingImgAlt2')} />
          </Link> 
          <Link to="/projects#landscaping">
            <img src={landscaping04} alt={t('landscapingImgAlt3')} />
          </Link>
        </div>

        <div className="cta"><a href="/contact-us" className="btn">{t('requestEstimate')}</a></div>
      </section>
    </div>
  );
};

export default Landscaping;
