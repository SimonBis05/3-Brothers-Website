import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';
import { Helmet } from 'react-helmet-async';
import deck01 from '../../assets/Decks_&_Railings/deck_01.webp';
import deck03 from '../../assets/Decks_&_Railings/deck_03.webp';
import deck04 from '../../assets/Decks_&_Railings/deck_04.webp';

const Decks = () => {
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
        <title>Decks & Railings Ottawa | 3 Brothers Landscaping</title>
        <meta name="description" content="Custom decks and railings built in Ottawa. Durable materials and expert installation." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <header className="service-hero">
        <h1>Decking & Railings</h1>
        <p>Expert deck building and railing installation for homes in Ottawa.</p>
      </header>

      <section className="service-content">
        <p>Transform your outdoor space with expert deck building and railing installation in Ottawa. Whether you want a relaxing backyard retreat or a stylish entertainment area, we create decks and railings that combine durability, beauty, and low maintenance.</p>

        <h2>Materials & Design Options</h2>
        <p><strong>Decking:</strong> Choose from PVC, composite, or wood decks — including cedar and pressure-treated lumber — for lasting performance and timeless appeal.</p>
        <p><strong>Railings:</strong> Our railings come in metal with pickets, glass, or custom designs, adding safety and style to your deck while keeping your space open and elegant.</p>

        <h3>Gallery</h3>
        <div className="gallery">
          <Link to="/projects#decks">
            <img src={deck01} alt="Custom deck construction in Ottawa" />
          </Link>
          <Link to="/projects#decks">
            <img src={deck03} alt="Decking and metal railings installation example" />
          </Link> 
          <Link to="/projects#decks">
            <img src={deck04} alt="Professional composite deck with railings" />
          </Link>
        </div>

        <div className="cta"><a href="/contact-us" className="btn">Request a free estimate</a></div>
      </section>
    </div>
  );
};

export default Decks;
