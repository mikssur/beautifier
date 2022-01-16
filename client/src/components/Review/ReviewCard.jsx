import React from 'react';

function ReviewCard({ name, text, isValid }) {
  return (
    <>
      {isValid ?
        <li>
          <p>{name}</p>
          <p>{text}</p>
        </li> :
        null}
    </>
  );
}

export default ReviewCard;
