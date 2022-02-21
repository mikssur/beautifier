import React from 'react';
import './Review.css'


function ReviewCard({ name, text, isValid, id }) {
 
  const currentURL = window.location.href
  console.log('CURRENT URL V REVIEW CARD', currentURL)

  console.log('REVIEWID V REVIEWCARD NACHALO', id)
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
