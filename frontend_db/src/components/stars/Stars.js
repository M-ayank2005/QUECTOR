import 'remixicon/fonts/remixicon.css'
import React from 'react';
const StarRating = ({ count }) => {
    // Convert rating to a number between 0 and 5
    const normalizedRating = Math.min(Math.max(count || 0, 0), 5);
  
    // Render stars based on the rating
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        if (i <= normalizedRating) {
          stars.push(<i className="ri-star-fill"></i>);
        } else if (i - 0.5 <= normalizedRating) {
          stars.push(<i className="ri-star-half-fill"></i>);
        } else {
          stars.push(<i className="ri-star-line"></i>);
        }
      }
      return stars;
    };
  
    return <div className="star-rating">{renderStars()}</div>;
  };
  
  
export default StarRating;