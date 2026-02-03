import React from 'react';
import './Services.css';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';

const Fences = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
  const canonical = 'https://www.3brothersottawalandscaping.ca/fences';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fences",
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
    "description": "Fencing installation and repair — wood, vinyl, and metal options."
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
        "name": "Fences",
        "item": "https://www.3brothersottawalandscaping.ca/fences"
      }
    ]
  };

  return (
    <div className="service-page fences-page">
      <Helmet>
        <title>{t('fencesTitle')} | 3 Brothers Landscaping</title>
        <meta name="description" content={t('fencesHero')} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <header className="service-hero">
        <h1>{t('fencesTitle')}</h1>
        <p>{t('fencesHero')}</p>
      </header>

      <section className="service-content">
        <p>{t('fencesIntro')}</p>

        <h2>{t('fencesTypesTitle')}</h2>
        <p><span className="svc-label">{t('fencesPVCLabel')}: </span><span className="svc-desc">{t('fencesPVCDesc')}</span></p>
        <p><span className="svc-label">{t('fencesHybridLabel')}: </span><span className="svc-desc">{t('fencesHybridDesc')}</span></p>
        <p><span className="svc-label">{t('fencesWoodLabel')}: </span><span className="svc-desc">{t('fencesWoodDesc')}</span></p>
        <p><span className="svc-label">{t('fencesIronLabel')}: </span><span className="svc-desc">{t('fencesIronDesc')}</span></p>
        <p><span className="svc-label">{t('fencesChainLabel')}: </span><span className="svc-desc">{t('fencesChainDesc')}</span></p>
        <p><span className="svc-label">{t('fencesGlassLabel')}: </span><span className="svc-desc">{t('fencesGlassDesc')}</span></p>

        <div className="cta"><a href="/contact-us" className="btn">{t('requestEstimate')}</a></div>
      </section>
    </div>
  );
};

export default Fences;
