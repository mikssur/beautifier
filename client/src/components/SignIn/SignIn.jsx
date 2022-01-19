import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SignIn.css';

function SignIn(props) {
  const dispatch = useDispatch();
  const clientPassInput = useRef();
  const clientTelInput = useRef();
  const { session } = useSelector((state) => state.sessionReducer)
  async function clientFormHandler(event, clientPassInput, clientTelInput) {
    event.preventDefault();
    try {
      await fetch('/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          password: clientPassInput.current.value,
          telephone: clientTelInput.current.value,
        })
      })
      dispatch({ type: 'SESSION_FETCH' })
      setTimeout(() => { window.location.href = '/'; }, 1000);
    }

    catch (err) {
      console.log(err.message)
    }
    clientPassInput.current.value = ''
    clientTelInput.current.value = ''
  }
  return (
    <>
      {!session.authClient ?
        <div className="login-form">
          <input ref={clientTelInput} type="tel" name="" id="clientTell" placeholder="Телефон" required />
          <input ref={clientPassInput} type="password" name="" id="clientPass" placeholder="Пароль" required />
          <button onClick={(event) => clientFormHandler(event, clientPassInput, clientTelInput)}>Авторизироваться</button>
        </div>
        : <p> Авторизация прошла успешно </p>}
    </>
  );
}

export default SignIn;
