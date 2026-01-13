import React from 'react';
import './Services.css';
import { Helmet } from 'react-helmet-async';

const Fences = () => {
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
        <title>Fences Ottawa | 3 Brothers Landscaping</title>
        <meta name="description" content="Fence installation and repair in Ottawa — privacy, decorative and security fences." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <header className="service-hero">
        <h1>Fences</h1>
        <p>We install and repair wood, vinyl and metal fences across Ottawa.</p>
      </header>

      <section className="service-content">
        <p>We install and repair vinyl, wood, and metal fences across Ottawa, providing durable, stylish, and low-maintenance solutions for any property.</p>

        <h2>Fence Types</h2>
        <p><strong>PVC Fences:</strong> Clean, modern, and low-maintenance. With proper installation, it may be the last fence you'll ever need.</p>
        <p><strong>Hybrid Fences:</strong> Combine the beauty of wood or PVC with steel for privacy, sound reduction, and weather resistance.</p>
        <p><strong>Wood Fences:</strong> Timeless and versatile, using cedar or pressure-treated lumber for durability and natural beauty.</p>
        <p><strong>Ornamental Iron Fences:</strong> Elegant and secure, protecting your space while keeping the view open.</p>
        <p><strong>Chain Link Fences:</strong> Affordable, durable, and versatile—ideal for backyards, pools, and commercial areas.</p>
        <p><strong>Glass Fences:</strong> Sleek and modern, offering openness and sophistication for decks, patios, and pool areas.</p>

        <div className="cta"><a href="/contact-us" className="btn">Request a free estimate</a></div>
      </section>
    </div>
  );
};

export default Fences;
