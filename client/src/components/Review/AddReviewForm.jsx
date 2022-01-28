import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import './Review.css';

export function AddReviewForm() {
  const dispatch = useDispatch()

  const [name, setName] = useState('');
  const [text, setText] = useState('');

  function nameChange({ target: { value } }) {
    setName(value)
  }
  function textChange({ target: { value } }) {
    setText(value)
  }
  const isValid = false

  function addReviewFunc(event) {
    event.preventDefault()
    const name = event.target.clientReviewName.value
    const text = event.target.newReviewValue.value
    dispatch({ type: 'ADD_FETCH_REVIEW', payload: { name: name, text: text, isValid: isValid } })
    setName('')
    setText('')
  }

  return (
    <form onSubmit={addReviewFunc}>
      <input value={name} type="text" onChange={nameChange} name='clientReviewName' placeholder='Ваше имя' />
      <br />
      <textarea value={text} onChange={textChange} name='newReviewValue' placeholder='Отзыв'></textarea>
      <br />
      <button type='submit'>Отправить отзыв</button>
    </form>
  );
}


export default AddReviewForm;
