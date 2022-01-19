import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SignUp.css';

function SignUp(props) {
  const dispatch = useDispatch();
  const clientLoginInput = useRef();
  const clientPassInput = useRef();
  const clientTelInput = useRef();
  const { session } = useSelector((state) => state.sessionReducer)
  async function clientFormHandler(event, clientLoginInput, clientPassInput, clientTelInput) {
    event.preventDefault();

    try {
      await fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          login: clientLoginInput.current.value,
          password: clientPassInput.current.value,
          telephone: clientTelInput.current.value,
        })
      })
      setTimeout(() => { window.location.href = '/signin'; }, 1000);
    }

    catch (err) {
      console.log(err.message)
    }
    clientLoginInput.current.value = ''
    clientPassInput.current.value = ''
    clientTelInput.current.value = ''

  }
  return (
    <>
      {!session.authClient ?
        <div className="sign-up-form">
          <input ref={clientLoginInput} type="text" name="" id="clientLogin" placeholder="Имя" required/>
          <input ref={clientPassInput} type="password" name="" id="clientPass" placeholder="Пароль" required />
          <input ref={clientTelInput} type="tel" name="" id="clientTell" placeholder="Телефон" required />
          <button onClick={(event) => clientFormHandler(event, clientLoginInput, clientPassInput, clientTelInput)}>Зарегистрироваться</button>
        </div>
        : <p> Регистрация прошла успешно </p>}
    </>
  );
}

export default SignUp;
