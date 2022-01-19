import React from 'react';
import './Review.css'

function ReviewCard({ name, text, isValid }) {
  return (
    <>
      {isValid ?
        <li className="review-card">
          <h3 className="review-author">{name}</h3>
          <p className="review-text">{text}</p>
        </li> :
        null}
    </>
  );
}

export default ReviewCard;
