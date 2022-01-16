import React from 'react';
import { useRef } from 'react';

function SignIn(props) {
  const clientPassInput = useRef();
  const clientTelInput = useRef();
  async function clientFormHandler(event, clientPassInput, clientTelInput) {
    event.preventDefault();
    try {
      await fetch('http://localhost:3001/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          password: clientPassInput.current.value,
          telephone: clientTelInput.current.value,
        })
      })
    }

    catch (err) {
      console.log(err.message)
    }
    clientPassInput.current.value = ''
    clientTelInput.current.value = ''
  }
  return (
    <div>
      Пароль:<input ref={clientPassInput} type="password" name="" id="clientPass" />
      Phone:<input ref={clientTelInput} type="tel" name="" id="clientTell" />
      <button onClick={(event) => clientFormHandler(event, clientPassInput, clientTelInput)}>Зарегистрироваться</button>
    </div>
  );
}

export default SignIn;
