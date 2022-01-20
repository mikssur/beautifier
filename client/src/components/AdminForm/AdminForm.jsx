import React from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import './AdminForm.css';

function Admin(props) {
  const adminLoginInput = useRef();
  const adminPassInput = useRef();
  const dispatch = useDispatch()
  
  function adminFormHandler(event, adminLoginInput, adminPassInput) {
    event.preventDefault()
    console.log(adminLoginInput.current.value);
    console.log(adminPassInput.current.value);
    dispatch({ type: 'ADMIN_AUTH_FETCH', payload: {login: adminLoginInput.current.value, pass: adminPassInput.current.value} })
    adminLoginInput.current.value = ''
    adminPassInput.current.value = ''
  }

  return (
    <>
      <h2>Войти</h2>
      <div className="admin-form">
        <input ref={adminLoginInput} type="text" name="" id="" placeholder="Введите логин" />
        <input ref={adminPassInput} type="password" name="" id="" placeholder="Введите пароль" />
        <button onClick={(event) => adminFormHandler(event, adminLoginInput, adminPassInput)}>Авторизоваться</button>
      </div>
    </>
  );
}

export default Admin;