import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux'

function AddReviewForm(props) {

  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch()

  const nameRef = useRef()
  const textRef = useRef()

  function nameChange({ target: { value } }) {
    setName(value)
  }
  function textChange({ target: { value } }) {
    setText(value)
  }

  function addReview(event) {
    event.preventDefault()

    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameRef.current.value,
        text: textRef.current.value,
        isValid: true,
      })
    })
      // .then(res => res.json())
      // .then(data => console.log(data))

    setName('')
    setText('')
  }

  return (
    <form onSubmit={addReview}>
      <input ref={nameRef} type="text" onChange={nameChange} name='clientReviewName' value={name} placeholder='Ваше имя' />
      <br />
      <textarea ref={textRef} name='newReviewValue' value={text} onChange={textChange} placeholder='Отзыв'></textarea>
      <br />
      <button type='submit'>Отправить отзыв</button>
    </form>
  );
}

export default AddReviewForm;
