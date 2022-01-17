import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function SignUp(props) {
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
        <div>
          Имя:<input ref={clientLoginInput} type="text" name="" id="clientLogin" />
          Пароль:<input ref={clientPassInput} type="password" name="" id="clientPass" />
          Phone:<input ref={clientTelInput} type="tel" name="" id="clientTell" />
          <button onClick={(event) => clientFormHandler(event, clientLoginInput, clientPassInput, clientTelInput)}>Зарегистрироваться</button>
        </div>
        : <p> Регистрация прошла успешно </p>}
    </>
  );
}

export default SignUp;
