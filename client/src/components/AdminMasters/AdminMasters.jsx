import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function AdminMasters(props) {
  const mesterName = useRef();
  const priceInput = useRef();
  const masterCategory = useRef();
const [correctForm, setCorrectForm] = useState(false);
const { masters } = useSelector(state => state.mastersReducer)
function deleteMaster(event, id) {
  dispatch({ type: 'DELETE_USER', payload: {id}})
}
const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'GET_FETCH_MASTERS' })
  }, [dispatch])
  console.log();
  return (
    <div>
      <Link to="/admincabinet">Назад</Link>
      <div>
      {masters.map(master => 
      <div key={master.id}>
        {correctForm ?
          <div>
            Имя Мастера: <input ref={mesterName} defaultValue={master.name}/>
            {/* Категория: <input ref={priceInput} defaultValue={master.price} /> */}
            Категория: <input ref={masterCategory} defaultValue={master.category} />
            <button onClick={(event) => deleteMaster(event, master.id)}>Удалить Мастера</button>
            <button onClick={() => setCorrectForm(!correctForm)}>Внести Изменения</button>
          </div>  
          :
          <div>
            <div>
            Имя Мастера: {master.Name}
            {/* Категория: <input ref={priceInput} defaultValue={master.price} /> */}
            Сервисы: {master.category}
            <button onClick={() => setCorrectForm(!correctForm)}>Редактировать</button>
          </div> 
          </div>
        }
      </div>)
      }
      </div>
    </div>
  );
}

export default AdminMasters;