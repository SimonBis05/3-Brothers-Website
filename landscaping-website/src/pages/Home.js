import React from 'react';
import './Home.css';
import backgroundImg from '../assets/backgound_pic_furnished.jpg';
import interlockImg from '../assets/interlock.jpg';
import landscapingImg from '../assets/lanscaping.jpg';
import decksImg from '../assets/full_backyard.jpg';
import hardscapingImg from '../assets/hardscaping.jpg';

const services = [
  {
    name: 'Interlock',
    img: interlockImg,
    desc: 'Beautiful and durable interlock solutions for patios, walkways, and driveways.',
  },
  {
    name: 'Landscaping',
    img: landscapingImg,
    desc: 'Transform your outdoor space with our expert landscaping services.',
  },
  {
    name: 'Decks',
    img: decksImg,
    desc: 'Custom decks designed and built to enhance your backyard.',
  },
  {
    name: 'Hardscaping',
    img: hardscapingImg,
    desc: 'Professional hardscaping for lasting beauty and functionality.',
  },
];

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        paddingTop: '40px',
      }}
    >
      <div className="home-content">
        <h2>Our Services</h2>
        <div className="services-list">
          {services.map(service => (
            <div className="service-card large" key={service.name}>
              <img src={service.img} alt={service.name} />
              <div>
                <h3>{service.name}</h3>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;