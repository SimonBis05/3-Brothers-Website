import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Projects.css';

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
    title: 'Interlock',
    images: interlockImages,
  },
  {
    id: 'retaining-walls',
    title: 'Retaining Walls',
    images: retainingImages,
  },
  {
    id: 'landscaping',
    title: 'Landscaping',
    images: landscapingImages,
  },
  {
    id: 'driveways',
    title: 'Driveways',
    images: drivewaysImages,
  },
  {
    id: 'stamped-concrete',
    title: 'Stamped Concrete',
    images: stampedImages,
  },
  {
    id: 'fire-pits',
    title: 'Fire Pits',
    images: firepitsImages,
  },
  {
    id: 'decks',
    title: 'Decks',
    images: decksImages,
  },
  {
    id: 'fences',
    title: 'Fences',
    images: fencesImages,
  },
  {
    id: '3d-design',
    title: '3D Design',
    images: designImages,
  },
  {
    id: 'pressure-washing-resanding',
    title: 'Pressure Washing',
    images: pressureImages,
  },
  {
    id: 'pergolas',
    title: 'Pergolas',
    images: pergolasImages,
  },
  {
    id: 'relevel-repairs',
    title: 'Relevel & Repairs',
    images: relevelImages,
  }
];

const Projects = () => {
  const [lightbox, setLightbox] = useState({ open: false, serviceIdx: 0, imgIdx: 0 });
  const [carouselStart, setCarouselStart] = useState(() => services.reduce((acc, _, i) => ({ ...acc, [i]: 0 }), {}));

  const { hash } = useLocation();

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

  const VISIBLE = 3;

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

  return (
    <div className="Projects-page">
      <h2>Our Projects</h2>
      {services.map((s, si) => {
        const len = s.images.length;
        const start = carouselStart[si] || 0;
        const visibleCount = Math.min(VISIBLE, len);
        const visibleIdx = Array.from({ length: visibleCount }, (_, k) => (start + k) % len);

        return (
          <section className="service-section" id={s.id} key={s.id}>
            <h3>{s.title}</h3>

            <div className="carousel-wrapper">
              <button className={`carousel-nav left ${len > VISIBLE ? '' : 'hidden'}`} onClick={() => shiftPrev(si)} aria-label="Previous">‹</button>

              <div className="service-carousel">
                {visibleIdx.map((imgIdx) => (
                  <button key={imgIdx} className="thumb-btn" onClick={() => openLightbox(si, imgIdx)}>
                    <img src={s.images[imgIdx]} alt={`${s.title} ${imgIdx + 1}`} />
                  </button>
                ))}
              </div>

              <button className={`carousel-nav right ${len > VISIBLE ? '' : 'hidden'}`} onClick={() => shiftNext(si)} aria-label="Next">›</button>
            </div>
          </section>
        );
      })}

      {lightbox.open && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lb-close" onClick={(e) => { e.stopPropagation(); closeLightbox(); }}>✕</button>
          <button className="lb-prev" onClick={(e) => { e.stopPropagation(); prev(); }}>‹</button>
          <div className="lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={services[lightbox.serviceIdx].images[lightbox.imgIdx]} alt="Enlarged" />
            <div className="lb-caption">{services[lightbox.serviceIdx].title}</div>
          </div>
          <button className="lb-next" onClick={(e) => { e.stopPropagation(); next(); }}>›</button>
        </div>
      )}
    </div>
  );
};

export default Projects;