import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../translations';
import basketweave from '../../assets/Services_Images/basketweave.webp';
import herringbone from '../../assets/Services_Images/herringbone.webp';
import running_bond from '../../assets/Services_Images/running_bond.webp';
import regular_random from '../../assets/Services_Images/blu_60.jpeg';
import interlock03 from '../../assets/Interlock/interlock_03.webp';
import interlock04 from '../../assets/Interlock/interlock_04.webp';
import relevel03 from '../../assets/Relevels_&_Repairs/relevel_03.webp';


const Interlock = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
  const canonical = 'https://www.3brothersottawalandscaping.ca/interlock';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": t('interlockTitle'),
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
    "description": t('interlockIntro')
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": t('home'),
        "item": "https://www.3brothersottawalandscaping.ca/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": t('services'),
        "item": "https://www.3brothersottawalandscaping.ca/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": t('interlockTitle'),
        "item": "https://www.3brothersottawalandscaping.ca/interlock"
      }
    ]
  };

const [sqFt, setSqFt] = useState(100);

const calculatePrice = (s) => {
  let price;
  if (s <= 1200) {
    const unitPrice = 31 - (s / 100);
    price = s * unitPrice;
  } else {
    price = 18 * s;
  }
  return Math.round(price);
};

  const price = calculatePrice(sqFt);  

  return (
    <div className="service-page interlock-page">
      <Helmet>
        <title>{t('interlockTitle')} | 3 Brothers Landscaping</title>
        <meta name="description" content={t('interlockIntro')} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <header className="service-hero">
        <h1>{t('interlockTitle')}</h1>
      </header>

      <section className="service-content">
        <h2>{t('interlockTypesTitle')}</h2>
        <p>{t('interlockIntro')}</p>
        <p><span className="svc-label">{t('interlockPatios')}: </span>{t('interlockPatiosDesc')}</p>
        <p><span className="svc-label">{t('interlockDriveways')}: </span>{t('interlockDrivewaysDesc')}</p>
        <p><span className="svc-label">{t('interlockWalkways')}: </span>{t('interlockWalkwaysDesc')}</p>
        <p><span className="svc-label">{t('interlockRetainingWalls')}: </span>{t('interlockRetainingWallsDesc')}</p>
        <p><span className="svc-label">{t('interlockSteps')}: </span>{t('interlockStepsDesc')}</p>
        <p><span className="svc-label">{t('interlockFirepits')}: </span>{t('interlockFirepitsDesc')}</p>
        <p><span className="svc-label">{t('interlockPressure')}: </span>{t('interlockPressureDesc')}</p>
        <p><span className="svc-label">{t('interlockRelevels')}: </span>{t('interlockRelevelsDesc')}</p>
        
        <div className="calculator">
        <h2>{t('interlockCalculatorTitle')}</h2>
          <p>{t('interlockCalculatorIntro')}</p>
          <p>{t('interlockEstimateDetail')}</p>
          <p><strong>{t('interlockCalculatorNote')}</strong></p>
          <label htmlFor="sqft-input">{t('sqftLabel')}</label>
          <input
            id="sqft-input"
            type="number"
            value={sqFt === 0 ? '' : sqFt}
            onChange={(e) => {
              const val = e.target.value;
              setSqFt(val === '' ? 0 : Math.max(0, Math.min(1500, parseInt(val) || 0)));
            }}
            min="0"
            max="1500"
            step="10"
          />
          <input
            type="range"
            min="0"
            max="1500"
            step="10"
            value={sqFt}
            onChange={(e) => setSqFt(parseInt(e.target.value))}
          />
          <p>
            {t('estimatedPriceLabel')} <span className="price">${price.toLocaleString()}</span>
        </p>
        </div>

        <h2>{t('interlockPatternsTitle')}</h2>
        <p>{t('choosePatterns')}</p>
        <div className="patterns">
          <div className="pattern">
            <img src={running_bond} alt={t('patternRunningBondAlt')} />
            <p>{t('patternRunningBond')}</p>
          </div>
          <div className="pattern">
            <img src={basketweave} alt={t('patternBasketweaveAlt')} />
            <p>{t('patternBasketweave')}</p>
          </div>
          <div className="pattern">
            <img src={herringbone} alt={t('patternHerringboneAlt')} />
            <p>{t('patternHerringbone')}</p>
          </div>
          <div className="pattern">
            <img src={regular_random} alt={t('patternRegularRandomAlt')} className="full-fit" />
            <p>{t('patternRegularRandom')}</p>
          </div>
        </div>

        <h3>{t('interlockPatternsTitle')}</h3>
        <div className="gallery">
          <Link to="/projects#interlock">
            <img src={interlock03} alt={t('interlockGalleryImg1Alt')} />
          </Link>
          <Link to="/projects#interlock">
            <img src={interlock04} alt={t('interlockGalleryImg2Alt')} />
          </Link> 
          <Link to="/projects#relevel-repairs">
            <img src={relevel03} alt={t('interlockGalleryImg3Alt')} />
          </Link>
        </div>

        <div className="cta">
          <a href="/contact-us" className="btn">{t('requestEstimate')}</a>
        </div>
      </section>
    </div>
  );
};

export default Interlock;
