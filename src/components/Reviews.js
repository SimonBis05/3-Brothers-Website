import React from 'react';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import googleReviewImg from '../assets/Google_Review.png';

function Reviews() {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;
  const reviews = translations[language]?.reviews || [];

  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <a 
          href="https://www.google.com/search?q=3+Brothers+Ottawa+Landscaping" 
          target="_blank" 
          rel="noreferrer"
          className="logo-link-wrapper"
        >
          <img src={googleReviewImg} alt="Google Review" className="section-google-logo" />
        </a>

        <h2 className="reviews-title">{t('reviewsTitle')}</h2>
      </div>  
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="stars">
              {[...Array(review.stars)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} className="star-icon" />
              ))}
            </div>
            <p className="review-text">"{review.text}"</p>
            <h4 className="review-name">- {review.name}</h4>
          </div>
        ))}
      </div>
      
      <div className="google-link">
        <a 
          href="https://www.google.com/search?q=3+Brothers+Ottawa+Landscaping" 
          target="_blank" 
          rel="noreferrer"
        >
          {t('readMoreReviews')}
        </a>
      </div>
    </section>
  );
}

export default Reviews;