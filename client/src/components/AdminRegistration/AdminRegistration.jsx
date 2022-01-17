import React from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
function AdminRegistration(props) {
  const adminLoginInput = useRef();
  const adminPassInput = useRef();
  const { reservations } = useSelector(state => state.reservationReducer)
  
  console.log(reservations);
  return (
    <div>
      Логин:<input ref={adminLoginInput} type="text" name="" id="" />
      Пароль:<input ref={adminPassInput} type="password" name="" id="" />
    </div>
  );
}

export default AdminRegistration;