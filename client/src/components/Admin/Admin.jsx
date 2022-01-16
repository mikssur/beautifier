import React from 'react';
import { useRef } from 'react';

function Admin(props) {
  const adminLoginInput = useRef();
  const adminPassInput = useRef();
  function adminFormHandler(event, adminLoginInput, adminPassInput) {
    event.preventDefault()
    console.log(adminLoginInput.current.value);
    console.log(adminPassInput.current.value);
    //dispatch(addTodoAC({ word: todoInput.current.value }))
    adminLoginInput.current.value = ''
    adminPassInput.current.value = ''
  }

  return (
    <div>
      Логин:<input ref={adminLoginInput} type="text" name="" id="" />
      Пароль:<input ref={adminPassInput} type="password" name="" id="" />
      <button onClick={(event) => adminFormHandler(event, adminLoginInput, adminPassInput)}>Авторизоваться</button>
    </div>
  );
}

export default Admin;