import React from 'react';
import './Portfolio.css';

// Import all images from assets
import backPad from '../assets/back_pad.jpg';
import backgroundFurnished from '../assets/backgound_pic_furnished.jpg';
import backyardPad from '../assets/backyard_pad.PNG';
import frontPadSteps from '../assets/front_pad_and_steps.jpg';
import fullBackyard from '../assets/full_backyard.jpg';
import hardscaping from '../assets/hardscaping.jpg';
import interlock from '../assets/interlock.jpg';
import landscaping from '../assets/lanscaping.jpg';
import stampedPad from '../assets/stamped_pad.jpg';
import steps from '../assets/steps.jpg';

const images = [
  { src: backPad, alt: 'Back Pad' },
  { src: backgroundFurnished, alt: 'Furnished Backyard' },
  { src: backyardPad, alt: 'Backyard Pad' },
  { src: frontPadSteps, alt: 'Front Pad and Steps' },
  { src: fullBackyard, alt: 'Full Backyard' },
  { src: hardscaping, alt: 'Hardscaping' },
  { src: interlock, alt: 'Interlock' },
  { src: landscaping, alt: 'Landscaping' },
  { src: stampedPad, alt: 'Stamped Pad' },
  { src: steps, alt: 'Steps' },
];

const Portfolio = () => (
  <div className="portfolio-page">
    <h2>Our Portfolio</h2>
    <div className="portfolio-gallery">
      {images.map((img, idx) => (
        <div className="portfolio-item" key={idx}>
          <img src={img.src} alt={img.alt} />
          <p>{img.alt}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Portfolio;