import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Home.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

import interlockImg from '../assets/Interlock/interlock_01.webp';
import landscapingImg from '../assets/Landscaping/landscaping_01.webp';
import decksImg from '../assets/Decks_&_Railings/deck_01.webp';
import wallImg from '../assets/Retaining_Walls/retaining_01.webp';
import stampedPadImg from '../assets/Stamped_Concrete/stamped_01.webp';
import pergolaImg from '../assets/Pergolas/pergola_01.webp';
import repairImg from '../assets/Relevels_&_Repairs/relevel_01.webp';
import drivewayImg from '../assets/Driveways/driveway_01.webp';
import fenceImg from '../assets/Fences/fence_01.webp';
import pressureImg from '../assets/Pressure_Washing_&_Resand/pressure_01.webp';
import firepitImg from '../assets/Fire_Pits/fire_01.webp';
import designImg from '../assets/3D_Design/3d_design_01.webp';

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
    name: 'interlock',
    translationKey: 'interlock',
    img: interlockImg,
    descKey: 'interlockDesc',
  },
  {
    name: 'retainingWalls',
    translationKey: 'retainingWalls',
    img: wallImg,
    descKey: 'retainingWallsDesc',
  },
  {
    name: 'landscaping',
    translationKey: 'landscaping',
    img: landscapingImg,
    descKey: 'landscapingDesc',
  },
  {
    name: 'driveways',
    translationKey: 'driveways',
    img: drivewayImg,
    descKey: 'drivewaysDesc',
  },
  {
    name: 'fences',
    translationKey: 'fences',
    img: fenceImg,
    descKey: 'fencesDesc',
  },
  {
    name: 'decks',
    translationKey: 'decking',
    img: decksImg,
    descKey: 'decksDesc',
  },
  {
    name: 'firePits',
    translationKey: 'firePits',
    img: firepitImg,
    descKey: 'firePixtsDesc',
  },
  {
    name: 'design',
    translationKey: 'design',
    img: designImg,
    descKey: 'designDesc',
  },
  {
    name: 'stampedConcrete',
    translationKey: 'stampedConcrete',
    img: stampedPadImg,
    descKey: 'stampedDesc',
  },
  {
    name: 'pressureWashing',
    translationKey: 'pressureWashing',
    img: pressureImg,
    descKey: 'pressureDesc',
  },
  {
    name: 'pergolas',
    translationKey: 'pergolas',
    img: pergolaImg,
    descKey: 'pergolaDesc',
  },
  {
    name: 'relevel',
    translationKey: 'relevel',
    img: repairImg,
    descKey: 'relevelDesc',
  }
];

const slug = (name) => name.replace(/[^\w]+/g, '-').replace(/^-+|-+$/g, '').toLowerCase();

const getServiceRoute = (name) => {
  const interlockServices = ['interlock', 'retainingWalls', 'driveways', 'firePits', 'design', 'pressureWashing', 'relevel'];
  if (interlockServices.includes(name)) return '/interlock';
  if (name === 'landscaping' || name === 'pergolas') return '/landscaping';
  if (name === 'decks') return '/decks';
  if (name === 'fences') return '/fences';
  return `/projects#${slug(name)}`; // fallback for others like stampedConcrete
};

const Home = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;

  return (
    <div className="home">
      <Helmet>
        <title>{t('homeTitle')}</title>
        <meta name="description" content={t('metaDescription')} />
        <link rel="canonical" href="https://www.3brothersottawalandscaping.ca/" />
      </Helmet>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${interlockImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content">
          <h1>{t('heroTitle')}</h1>
          <Link to="/contact-us"><button className="hero-button">{t('getQuote')}</button></Link>
        </div>
      </section>

      <section className="services-section">
        <div className="home-content">
          <h1>{t('ourServices')}</h1>
          <div className="services-list">
            {services.map(service => (
              <Link key={service.name} to={getServiceRoute(service.name)} className="service-link">
                <div className="service-card large" >
                  <img src={service.img} alt={`${t(service.translationKey)} - 3 Brothers Ottawa Landscaping`} />
                  <div>
                    <h3>{t(service.translationKey)}</h3>
                    <p>{t(service.descKey)}</p>
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