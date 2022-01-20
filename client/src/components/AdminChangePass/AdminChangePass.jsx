import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './AdminChangePass.css';

function AdminChangePass(props) {

  const dispatch = useDispatch();

  const { message } = useSelector(state => state.adminRegistrationReducer);


  function changePass(event) {
    event.preventDefault()

    const oldPass = event.target.oldPass.value;
    const newPass = event.target.newPass.value;
    const newPass2 = event.target.newPass2.value;

    dispatch({ type: 'ADMIN_CHANGE_PASS_FETCH', payload: { oldPass, newPass, newPass2 } })
    event.target.oldPass.value = '';
    event.target.newPass.value = '';
    event.target.newPass2.value = '';

  }


  return (
    <div className="admin-change-pass-block">
      <h2>Изменить пароль</h2>
      <div className="admin-menu">
        <Link to="/admincabinet">Личный кабинет</Link>
        <Link to="/adminreview">Отзывы</Link>
        <Link to="/adminmasters">Мастера</Link>
        <Link to="/adminchangepass">Изменить пароль</Link>
      </div>
      <form onSubmit={changePass} className="change-pass-admin-form">
        <input onClick={() => dispatch({ type: 'RESET_MESSAGE' })} name='oldPass' type="password" placeholder='Старый пароль' />
        <input name='newPass' type="password" placeholder='Новый пароль' />
        <input name='newPass2' type="password" placeholder='Повторите новый пароль' />
        {message === 'Неверный пароль' ? <p>{message}</p> : message === 'Введённые пароли не совпадают' ? <p>{message}</p> : <p>{message}</p>}

        <button>Изменить пароль</button>
      </form>
    </div>
  );
}

export default AdminChangePass;
