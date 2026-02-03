import React from 'react';
import './Reviews.css';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Reviews = () => {
  const { language } = useLanguage();
  const t = (key) => translations[language]?.[key] || key;

  // Sample reviews structure - update with your actual Google reviews
  const reviews = [
    {
      name: 'John Smith',
      rating: 5,
      text: 'review_text_1',
      date: 'January 2025'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'review_text_2',
      date: 'December 2024'
    },
    {
      name: 'Mike Davis',
      rating: 5,
      text: 'review_text_3',
      date: 'November 2024'
    },
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2>{t('reviewsTitle')}</h2>
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <h3>{review.name}</h3>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="star" />
                  ))}
                </div>
              </div>
              <p className="review-text">{t(review.text)}</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))}
        </div>
        <div className="reviews-footer">
          <p>{t('reviewsMoreText')}</p>
          <a href="https://www.google.com/maps/place/3+Brothers+Ottawa+Landscaping" target="_blank" rel="noopener noreferrer" className="btn primary">
            {t('viewAllReviews')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
