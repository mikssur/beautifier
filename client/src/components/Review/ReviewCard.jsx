import React from 'react';

function ReviewCard({name, text, isValid}) {
  return (
    
    <li>
      <p>{name}</p>
      <p>{text}</p>

    </li>
  );
}

export default ReviewCard;
