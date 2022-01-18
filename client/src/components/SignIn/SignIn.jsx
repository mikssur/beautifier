import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
        <div>
          Телефон:<input ref={clientTelInput} type="tel" name="" id="clientTell" />
          Пароль:<input ref={clientPassInput} type="password" name="" id="clientPass" />
          <button onClick={(event) => clientFormHandler(event, clientPassInput, clientTelInput)}>Авторизироваться</button>
        </div>
        : <p> Авторизация прошла успешно </p>}
    </>
  );
}

export default SignIn;
