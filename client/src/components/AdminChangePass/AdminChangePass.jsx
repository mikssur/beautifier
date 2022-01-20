import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


function AdminChangePass(props) {

  const dispatch = useDispatch()
  const { session } = useSelector((state) => state.sessionReducer)

  function changePass(event) {
    event.preventDefault()

    const oldPass = event.target.oldPass.value;
    const newPass = event.target.newPass.value;

    dispatch({ type: 'ADMIN_CHANGE_PASS_FETCH', payload: { oldPass, newPass } })
    event.target.oldPass.value = '';
    event.target.newPass.value = ''
  }


  return (
    <div>
      { session.isAdmin ?
      <>
      <form onSubmit={changePass}>
        <input name='oldPass' type="text" placeholder='Старый пароль' />
        <input name='newPass' type="text" placeholder='Новый пароль' />
        <button>Изменить пароль</button>
      </form>
      </> :
      <div>Страница не найдена</div>
      }
    </div>
  );
}

export default AdminChangePass;
