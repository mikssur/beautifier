import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from './Modal';

function ReviewCardDelete({ name, text, isValid, id }) {
  const dispatch = useDispatch()
  const reviewId = id
  const [ modal, setModal ] = useState(false)
  return (
    <>
        <li>
          <h3>{name}</h3>
          <p>{text}</p>
          <button onClick={() => dispatch({ type: 'DELETE_FETCH_REVIEW', payload: { reviewId } })}>Удалить отзыв</button>
          <button onClick={() => dispatch({ type: 'APPROVE_FETCH_REVIEW', payload: { reviewId } })}>Пропустить отзыв</button>
          <button onClick={() => setModal(!modal)}>Править отзыв</button>
          { modal && <Modal name={name} text={text} id={reviewId}/> }
        </li>
    </>
  );
}

export default ReviewCardDelete;
