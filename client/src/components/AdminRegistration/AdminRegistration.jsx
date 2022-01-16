import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function AdminRegistration(props) {
  const adminLoginInput = useRef();
  const adminPassInput = useRef();
  const dispatch = useDispatch()
  const { reservations } = useSelector(state => state.reservationReducer)
  function adminFormHandler(event, adminLoginInput, adminPassInput) {
    event.preventDefault()
    console.log(adminLoginInput.current.value);
    console.log(adminPassInput.current.value);
    dispatch({ type: 'ADMIN_REGISTRATION_FETCH', payload: {login: adminLoginInput.current.value, pass: adminPassInput.current.value} })
  }
  // useEffect(() => {
    
  // }, [dispatch])
  // adminLoginInput.current.value = ''
  // adminPassInput.current.value = ''
  console.log(reservations);
  return (
    <div>
      Логин:<input ref={adminLoginInput} type="text" name="" id="" />
      Пароль:<input ref={adminPassInput} type="password" name="" id="" />
      <button onClick={(event) => adminFormHandler(event, adminLoginInput, adminPassInput)}>Авторизоваться</button>
    </div>
  );
}

export default AdminRegistration;