import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Admin(props) {
  const adminLoginInput = useRef();
  const adminPassInput = useRef();
  const dispatch = useDispatch()
  const { answer } = useSelector((state) => state.sessionReducer)
  console.log(answer);
  function adminFormHandler(event, adminLoginInput, adminPassInput) {
    event.preventDefault()
    console.log(adminLoginInput.current.value);
    console.log(adminPassInput.current.value);
    dispatch({ type: 'ADMIN_AUTH_FETCH', payload: {login: adminLoginInput.current.value, pass: adminPassInput.current.value} })
    adminLoginInput.current.value = ''
    adminPassInput.current.value = ''
  }

  return (
    <div>
      Логин:<input ref={adminLoginInput} type="text" name="" id="" />
      Пароль:<input ref={adminPassInput} type="password" name="" id="" />
      <button onClick={(event) => adminFormHandler(event, adminLoginInput, adminPassInput)}>Авторизоваться</button>
      {/* {answer.checked ? answer.checkAdmin ? answer.checkPass ? 
    <div></div> :
    <div>Неверный Логин</div> :
    <div>Неверный пароль</div> :
    <div></div>
    } */}
    </div>
  );
}

export default Admin;