import React from 'react';
import { Link } from 'react-router-dom';
import './Interlock.css';
import { Helmet } from 'react-helmet-async';
import deck01 from '../../assets/Decks_&_Railings/deck_01.webp';
import deck03 from '../../assets/Decks_&_Railings/deck_03.webp';
import deck04 from '../../assets/Decks_&_Railings/deck_04.webp';

const Decks = () => {
  const canonical = 'https://yourdomain.com/decks';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Decking & Railings",
    "provider": { "@type": "LocalBusiness", "name": "3 Brothers Landscaping" },
    "areaServed": "Ottawa, ON",
    "description": "Custom decking and railings installations in Ottawa."
  };

  return (
    <div className="service-page decks-page">
      <Helmet>
        <title>Decks & Railings Ottawa | 3 Brothers Landscaping</title>
        <meta name="description" content="Custom decks and railings built in Ottawa. Durable materials and expert installation." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
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
            <img src={deck01} alt="Deck project example" />
          </Link>
          <Link to="/projects#decks">
            <img src={deck03} alt="Decking and railings example" />
          </Link> 
          <Link to="/projects#decks">
            <img src={deck04} alt="Custom deck installation" />
          </Link>
        </div>

        <div className="cta"><a href="/contact" className="btn">Request a free estimate</a></div>
      </section>
    </div>
  );
};

export default Decks;
