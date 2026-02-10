import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Projects.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

// dynamically import all images from each assets subfolder using webpack require.context
const importAll = (r) => r.keys().sort().map(r);
const interlockImages = importAll(require.context('../assets/Interlock', false, /\.(webp|jpe?g)$/));
const retainingImages = importAll(require.context('../assets/Retaining_Walls', false, /\.(webp|jpe?g)$/));
const landscapingImages = importAll(require.context('../assets/Landscaping', false, /\.(webp|jpe?g)$/));
const drivewaysImages = importAll(require.context('../assets/Driveways', false, /\.(webp|jpe?g)$/));
const stampedImages = importAll(require.context('../assets/Stamped_Concrete', false, /\.(webp|jpe?g)$/));
const firepitsImages = importAll(require.context('../assets/Fire_Pits', false, /\.(webp|jpe?g)$/));
const decksImages = importAll(require.context('../assets/Decks_&_Railings', false, /\.(webp|jpe?g)$/));
const fencesImages = importAll(require.context('../assets/Fences', false, /\.(webp|jpe?g)$/));
const designImages = importAll(require.context('../assets/3D_Design', false, /\.(webp|jpe?g)$/));
const pressureImages = importAll(require.context('../assets/Pressure_Washing_&_Resand', false, /\.(webp|jpe?g)$/));
const pergolasImages = importAll(require.context('../assets/Pergolas', false, /\.(webp|jpe?g)$/));
const relevelImages = importAll(require.context('../assets/Relevels_&_Repairs', false, /\.(webp|jpe?g)$/));

const services = [
  {
    id: 'interlock',
    titleKey: 'interlock',
    images: interlockImages,
  },
  {
    id: 'retaining-walls',
    titleKey: 'retainingWalls',
    images: retainingImages,
  },
  {
    id: 'landscaping',
    titleKey: 'landscaping',
    images: landscapingImages,
  },
  {
    id: 'driveways',
    titleKey: 'driveways',
    images: drivewaysImages,
  },
  {
    id: 'stamped-concrete',
    titleKey: 'stampedConcrete',
    images: stampedImages,
  },
  {
    id: 'fire-pits',
    titleKey: 'firePits',
    images: firepitsImages,
  },
  {
    id: 'decks',
    titleKey: 'decking',
    images: decksImages,
  },
  {
    id: 'fences',
    titleKey: 'fences',
    images: fencesImages,
  },
  {
    id: '3d-design',
    titleKey: 'design',
    images: designImages,
  },
  {
    id: 'pressure-washing',
    titleKey: 'pressureWashing',
    images: pressureImages,
  },
  {
    id: 'pergolas',
    titleKey: 'pergolas',
    images: pergolasImages,
  },
  {
    id: 'relevel-repairs',
    titleKey: 'relevel',
    images: relevelImages,
  }
];

const Projects = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
  const [lightbox, setLightbox] = useState({ open: false, serviceIdx: 0, imgIdx: 0 });
  const [carouselStart, setCarouselStart] = useState(() => services.reduce((acc, _, i) => ({ ...acc, [i]: 0 }), {}));

  const { hash } = useLocation();
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    // Run on mount and add listener
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
  if (hash) {
    // Small delay to ensure the page has rendered before scrolling
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  }
  }, [hash]);

  const openLightbox = (serviceIdx, imgIdx) => setLightbox({ open: true, serviceIdx, imgIdx });
  const closeLightbox = () => setLightbox({ open: false, serviceIdx: 0, imgIdx: 0 });

  const prev = () => {
    setLightbox((lb) => {
      const imgs = services[lb.serviceIdx].images;
      const nextIdx = (lb.imgIdx - 1 + imgs.length) % imgs.length;
      return { ...lb, imgIdx: nextIdx };
    });
  };

  const next = () => {
    setLightbox((lb) => {
      const imgs = services[lb.serviceIdx].images;
      const nextIdx = (lb.imgIdx + 1) % imgs.length;
      return { ...lb, imgIdx: nextIdx };
    });
  };

  const shiftPrev = (si) => {
    setCarouselStart((prev) => {
      const len = services[si].images.length;
      const curr = prev[si] || 0;
      return { ...prev, [si]: (curr - 1 + len) % len };
    });
  };

  const shiftNext = (si) => {
    setCarouselStart((prev) => {
      const len = services[si].images.length;
      const curr = prev[si] || 0;
      return { ...prev, [si]: (curr + 1) % len };
    });
  };

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum distance required to be considered a "swipe" (in pixels)
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // Reset end for new swipe
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = (si) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      shiftNext(si);
    } else if (isRightSwipe) {
      shiftPrev(si);
    }
  };

  const onLightboxTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next(); // Triggers your existing lightbox next()
    } else if (isRightSwipe) {
      prev(); // Triggers your existing lightbox prev()
    }
  };

  return (
    <div className="projects-page">
      <Helmet>
        <title>{t('projectsPageTitle')}</title>
        <meta name="description" content={t('projectsMetaDescription')} />
        <link rel="canonical" href="https://www.3brothersottawalandscaping.ca/projects" />
      </Helmet>
      <h1 style={{ textAlign: 'center', color: '#8ED433', marginBottom: '30px', marginTop: '20px' }}>{t('projectsGalleryTitle')}</h1>
      {services.map((s, si) => {
        const len = s.images.length;
        const start = carouselStart[si] || 0;
        const currentVisibleCount = Math.min(visibleCount, len); 
        const visibleIdx = Array.from({ length: currentVisibleCount }, (_, k) => (start + k) % len);

        return (
          <section className="service-section" id={s.id} key={s.id}>
            <h3>{t(s.titleKey)}</h3>

            <div className="carousel-wrapper"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={() => onTouchEnd(si)}
              style={{ touchAction: 'pan-y' }} // Allows vertical scrolling while swiping horizontally
            >
              <button className={`carousel-nav left ${len > visibleCount ? '' : 'hidden'}`} onClick={() => shiftPrev(si)} aria-label="Previous">‹</button>

              <div className="service-carousel">
                {visibleIdx.map((imgIdx) => (
                  <button key={imgIdx} className="thumb-btn" onClick={() => openLightbox(si, imgIdx)}>
                    <img src={s.images[imgIdx]} alt={`${t(s.titleKey)} ${imgIdx + 1}`} />
                  </button>
                ))}
              </div>

              <button className={`carousel-nav right ${len > visibleCount ? '' : 'hidden'}`} onClick={() => shiftNext(si)} aria-label="Next">›</button>
            </div>
          </section>
        );
      })}

      {lightbox.open && (
        <div 
          className="lightbox" 
          onClick={closeLightbox}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onLightboxTouchEnd}
          style={{ touchAction: 'none' }}>
          <button className="lb-close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>✕</button>
          
          <button className="lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={services[lightbox.serviceIdx].images[lightbox.imgIdx]} 
              alt={`${t(services[lightbox.serviceIdx].titleKey)}`} 
              style={{ userSelect: 'none', pointerEvents: 'none' }} 
            />
            <div className="lb-caption">{t(services[lightbox.serviceIdx].titleKey)}</div>
          </div>
          
          <button className="lb-next" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}
    </div>
  );
};

export default Projects;