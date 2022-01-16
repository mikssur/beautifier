import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

function Cabinet(props) {
  const clientLoginInput = useRef();
  const clientPassInput = useRef();
  const clientTelInput = useRef();
  async function clientFormHandler(event, clientLoginInput, clientPassInput, clientTelInput) {
    event.preventDefault();

    try {
      await fetch('http://localhost:3001/cabinet', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
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
    <div>
      Имя:<input ref={clientLoginInput} type="text" name="" id="clientLogin" />
      Пароль:<input ref={clientPassInput} type="password" name="" id="clientPass" />
      Phone:<input ref={clientTelInput} type="tel" name="" id="clientTell" />
      <button onClick={(event) => clientFormHandler(event, clientLoginInput, clientPassInput, clientTelInput)}>Зарегистрироваться</button>
    </div>
  );
}

export default Cabinet;
