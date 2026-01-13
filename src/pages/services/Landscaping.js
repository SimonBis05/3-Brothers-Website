import React from 'react';
import { Link } from 'react-router-dom';
import './Interlock.css';
import { Helmet } from 'react-helmet-async';
import landscaping01 from '../../assets/Landscaping/landscaping_01.webp';
import landscaping02 from '../../assets/Landscaping/landscaping_02.webp';
import landscaping04 from '../../assets/Landscaping/landscaping_04.webp';

const Landscaping = () => {
  const canonical = 'https://yourdomain.com/landscaping';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Landscaping",
    "provider": { "@type": "LocalBusiness", "name": "3 Brothers Landscaping" },
    "areaServed": "Ottawa, ON",
    "description": "Professional landscaping services including garden beds, mulch, sodding, and lawn care in Ottawa."
  };

  return (
    <div className="service-page landscaping-page">
      <Helmet>
        <title>Landscaping Ottawa | 3 Brothers Landscaping</title>
        <meta name="description" content="Landscaping services: garden beds, mulch, sodding, lawn care. Transform your outdoor space in Ottawa." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="service-hero">
        <h1>Landscaping Services</h1>
        <p>Beautiful gardens, lush lawns, and outdoor transformations.</p>
      </header>

      <section className="service-content">
        <h2>Our Landscaping Services</h2>
        <p>We offer a wide range of landscaping services to enhance your property:</p>
        <p><strong>Garden Beds:</strong> Custom flower and vegetable garden design and installation.</p>
        <p><strong>Mulching:</strong> Organic and decorative mulch for weed control and moisture retention.</p>
        <p><strong>Sodding:</strong> Instant lawn installation with premium grass varieties.</p>
        <p><strong>Tree and Shrub Planting:</strong> Selection and planting of trees, shrubs, and plants.</p>
        <p><strong>Irrigation Systems:</strong> Efficient watering solutions for healthy plants.</p>

        <h3>Gallery</h3>
        <div className="gallery">
          <Link to="/projects#landscaping">
            <img src={landscaping01} alt="Landscaping project example" />
          </Link>
          <Link to="/projects#landscaping">
            <img src={landscaping02} alt="Garden bed example" />
          </Link> 
          <Link to="/projects#landscaping">
            <img src={landscaping04} alt="Lawn installation example" />
          </Link>
        </div>

        <div className="cta"><a href="/contact-us" className="btn">Request a free estimate</a></div>
      </section>
    </div>
  );
};

export default Landscaping;
