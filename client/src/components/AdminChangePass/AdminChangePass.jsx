import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './AdminChangePass.css';

function AdminChangePass(props) {

  const dispatch = useDispatch()

  function changePass(event) {
    event.preventDefault()

    const oldPass = event.target.oldPass.value;
    const newPass = event.target.newPass.value;

    dispatch({ type: 'ADMIN_CHANGE_PASS_FETCH', payload: { oldPass, newPass } })
    event.target.oldPass.value = '';
    event.target.newPass.value = ''
  }


  return (
    <div className="admin-change-pass-block">
      <Link to="/admincabinet">Назад</Link>
      <h2>Изменить пароль</h2>
      <form onSubmit={changePass} className="change-pass-admin-form">
        <input name='oldPass' type="text" placeholder='Старый пароль' />
        <input name='newPass' type="text" placeholder='Новый пароль' />
        <button>Изменить пароль</button>
      </form>
    </div>
  );
}

export default AdminChangePass;
