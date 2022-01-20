import React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Admin(props) {
  const adminLoginInput = useRef();
  const adminPassInput = useRef();
  const dispatch = useDispatch()
  const { answer } = useSelector((state) => state.adminFormReducer)
  const { session } = useSelector((state) => state.sessionReducer)
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
      Логин:<input onClick={() => dispatch({type: 'ADMIN_CHECK_RESET'})} ref={adminLoginInput} type="text" name="" />
      Пароль:<input ref={adminPassInput} type="password" name="" />
      <button onClick={(event) => adminFormHandler(event, adminLoginInput, adminPassInput)}>Авторизоваться</button>
      {answer.checked ? answer.checkAdmin ? answer.checkPass ? 
    <div></div> :
    <div>Неверный пароль</div> :
    <div>Неверный Логин</div> :
    <div></div>
    }
    <div>{session.isAdmin ? window.location.href = 'http://localhost:3000/admincabinet' : <></>}</div>
    </div>
  );
}

export default Admin;