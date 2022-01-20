import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function AdminMasters(props) {
  const mesterName = useRef();
  const priceInput = useRef();
  const masterCategory = useRef();
const [correctForm, setCorrectForm] = useState(false);
const { allMasters } = useSelector(state => state.mastersReducer)
const { session } = useSelector((state) => state.sessionReducer)
function deleteMaster(event, id) {
  console.log(id, 'idet');
  dispatch({ type: 'DELETE_MASTER', payload: {id}})
}
const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'ALL_MASTERS_FETCH' })
  }, [dispatch])
  console.log(allMasters);
  return (
    <div>
      { session.isAdmin ? 
      <>
      <Link to="/admincabinet">Назад</Link>
      <div>
      {allMasters.length > 0 && allMasters.map(master => 
      <div key={master.id}>
            <div>
            Имя Мастера: {master.name}
            {/* Категория: <input ref={priceInput} defaultValue={master.price} /> */}
            Сервисы: {master.category}
            Описание: {}
            <button onClick={(event) => deleteMaster(event, master.id)}>Удалить Мастера</button>
            </div> 
      </div>)
      }
      </div>
      </> :
     <div>Страница не найдена</div>
    }
    </div>
  );
}

export default AdminMasters;