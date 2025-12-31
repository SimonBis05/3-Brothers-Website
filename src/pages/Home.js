import { Link } from 'react-router-dom';
import './Home.css';

import interlockImg from '../assets/Interlock/interlock_01.png';
import landscapingImg from '../assets/Landscaping/landscaping_01.png';
import decksImg from '../assets/Decks_&_Railings/deck_01.png';
import wallImg from '../assets/Retaining_Walls/retaining_01.png';
import stampedPadImg from '../assets/Stamped_Concrete/stamped_01.png';
import pergolaImg from '../assets/Pergolas/pergola_01.png';
import repairImg from '../assets/Relevels_&_Repairs/relevel_01.png';
import drivewayImg from '../assets/Driveways/driveway_01.png';
import fenceImg from '../assets/Fences/fence_01.png';
import pressureImg from '../assets/Pressure_Washing_&_Resand/pressure_01.png';
import firepitImg from '../assets/Fire_Pits/fire_01.png';
import designImg from '../assets/3D_Design/3d_design_01.png';

const imagesToPreload = [
  interlockImg,
  landscapingImg,
  decksImg,
  wallImg, 
  stampedPadImg,
  pergolaImg,
  repairImg,
  drivewayImg,
  wallImg,
  firepitImg,
  designImg,
  pressureImg
];

imagesToPreload.forEach(src => {
  const img = new window.Image();
  img.src = src;
});

const services = [
  {
    name: 'Interlock',
    img: interlockImg,
    desc: 'Installation of pads, pathways, and patios using pavers for durable outdoor surfaces.',
  },
  {
    name: 'Retaining Walls',
    img: wallImg,
    desc: 'Building stone walls to manage slopes, create garden tiers, or provide structural support throughout your property.',
  },
  {
    name: 'Landscaping',
    img: landscapingImg,
    desc: 'Softscaping services including sod, artificial grass, garden beds, mulch, river rock, and professional garden hedging.',
  },
  {
    name: 'Driveways',
    img: drivewayImg,
    desc: 'Building interlock driveways with reinforced base preparation and custom paver borders to ensure a level, durable, and well-defined surface.',
  },
  {
    name: 'Fences',
    img: fenceImg,
    desc: 'Professional installation of wood and PVC privacy fences designed to define property boundaries and provide secure perimeter screening.',
  },
  {
    name: 'Decks',
    img: decksImg,
    desc: 'Building custom decks using natural wood or weather-resistant PVC materials to create functional lounging and dining spaces.',
  },
  {
    name: 'Fire Pits',
    img: firepitImg,
    desc: 'Installing custom gas or propane fire pits with integrated gas lines, using either pre-made metal units or custom-built stone and interlock structures.',
  },
  {
    name: '3D Design',
    img: designImg,
    desc: 'Digital 3D models of your project to plan layouts, elevations, and material choices before construction starts.',
  },
  {
    name: 'Stamped Concrete',
    img: stampedPadImg,
    desc: 'Poured concrete surfaces featuring dyed and stamped patterns to resemble natural stone, slate, or brick.',
  },
  {
    name: 'Pressure Washing',
    img: pressureImg,
    desc: 'Deep cleaning pavers and applying fresh polymeric sand to joints to eliminate weeds and ensure proper drainage.',
  },
  {
    name: 'Pergolas',
    img: pergolaImg,
    desc: 'Design and assembly of wood or PVC pergolas to add shade and structure to your backyard or patio.',
  },
  {
    name: 'Relevel & Repairs',
    img: repairImg,
    desc: 'Fixing cracked stones and re-leveling sunken interlock pads to correct pooling water and uneven surfaces.',
  }
];

const slug = (name) => name.replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();

const Home = () => {
  return (
    <div className="home">
      <section
        className="hero"
        style={{
          backgroundImage: `url(${interlockImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content">
          <h1>Make your dream project come to life</h1>
          <Link to="/contact"><button className="hero-button">Get a Quote</button></Link>
        </div>
      </section>

      <section className="services-section">
        <div className="home-content">
          <h1>Our Services</h1>
          <div className="services-list">
            {console.log(services)}
            {services.map(service => (
              <Link key={service.name} to={`/projects#${slug(service.name)}`} className="service-link">
                <div className="service-card large" >
                  <img src={service.img} alt={service.name} />
                  <div>
                    <h3>{service.name}</h3>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;