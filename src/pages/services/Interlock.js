import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Interlock.css';
import { Helmet } from 'react-helmet-async';
import basketweave from '../../assets/Services_Images/basketweave.webp';
import herringbone from '../../assets/Services_Images/herringbone.webp';
import running_bond from '../../assets/Services_Images/running_bond.webp';
import regular_random from '../../assets/Services_Images/blu_60.jpeg';
import interlock03 from '../../assets/Interlock/interlock_03.webp';
import interlock04 from '../../assets/Interlock/interlock_04.webp';
import relevel03 from '../../assets/Relevels_&_Repairs/relevel_03.webp';


const Interlock = () => {
  const canonical = 'https://yourdomain.com/interlock';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Interlock Paving",
    "provider": {
      "@type": "LocalBusiness",
      "name": "3 Brothers Landscaping",
      "telephone": "+1-613-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ottawa",
        "addressRegion": "ON"
      }
    },
    "areaServed": "Ottawa, ON",
    "description": "Interlock paving for driveways, patios and walkways in Ottawa."
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
        <title>Interlock Paving Ottawa | 3 Brothers Landscaping</title>
        <meta name="description" content="Interlock paving — driveways, patios, walkways. Free estimates in Ottawa. Contact 3 Brothers Landscaping." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <header className="service-hero">
        <h1>Interlock Paving in Ottawa</h1>
      </header>

      <section className="service-content">
        <h2>Types of Interlock Services</h2>
        <p>We specialize in a variety of interlock paving projects:</p>
        <p><strong>Patios:</strong> Outdoor living spaces with 60mm pavers for comfort and style.</p>
        <p><strong>Driveways and Extensions:</strong> Durable 80mm pavers for heavy traffic areas.</p>
        <p><strong>Walkways:</strong> Connecting paths with elegant designs.</p>
        <p><strong>Retaining Walls:</strong> Structural support with interlock blocks.</p>
        <p><strong>Interlock Steps:</strong> Safe and attractive staircases.</p>
        <p><strong>Firepits:</strong> Custom-built fire pits with gaslines for outdoor enjoyment.</p>
        <p><strong>Pressure Washing:</strong> Deep cleaning of pavers and application of fresh polymeric sand to joints.</p>
        <p><strong>Relevels and Repairs:</strong> Restore and maintain existing installations.</p>
        
        <div className="calculator">
        <h2>Try Our Interlocking Pricing Calculator!</h2>
          <p>Our pricing calculator provides a <strong>basic average cost</strong> for your interlocking project.</p>
          <p>For a precise quote, we’ll need to visit your site, assess the area, and take measurements. Don’t worry if the estimate exceeds your budget—our expert designers can create a customized plan to fit your financial needs.</p>
          <p><strong>Please note:</strong> all prices are approximate and may vary based on project specifics and stone choice.</p>
          <label htmlFor="sqft-input">Square Footage:</label>
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
            Estimated Price: <span className="price">${price.toLocaleString()}</span>
        </p>
        </div>

        <h2>Interlock Patterns</h2>
        <p>Choose from our popular patterns:</p>
        <div className="patterns">
          <div className="pattern">
            <img src={running_bond} alt="Running Bond pattern" />
            <p>Running Bond</p>
          </div>
          <div className="pattern">
            <img src={basketweave} alt="Basketweave pattern" />
            <p>Basketweave</p>
          </div>
          <div className="pattern">
            <img src={herringbone} alt="Herringbone pattern" />
            <p>Herringbone</p>
          </div>
          <div className="pattern">
            <img src={regular_random} alt="Regular Random Interlock pattern" className="full-fit" />
            <p>Regular Random Interlock</p>
          </div>
        </div>

        <h3>Gallery</h3>
        <div className="gallery">
          <Link to="/projects#interlock">
            <img src={interlock03} alt="Interlock project example" />
          </Link>
          <Link to="/projects#interlock">
            <img src={interlock04} alt="Interlock walkway example" />
          </Link> 
          <Link to="/projects#relevel-repairs">
            <img src={relevel03} alt="Relevel and repair example" />
          </Link>
        </div>

        <div className="cta">
          <a href="/contact" className="btn">Request a free estimate</a>
        </div>
      </section>
    </div>
  );
};

export default Interlock;
