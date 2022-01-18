import React from 'react';
import './Review.css'

function ReviewCard({ name, text, isValid }) {
  return (
    <>
      {isValid ?
        <li className="review-card">
          <p className="review-author">{name}</p>
          <p className="review-text">{text}</p>
        </li> :
        null}
    </>
  );
}

export default ReviewCard;
