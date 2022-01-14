import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
//import { getFetchMastersAC } from '../../redux/actionCreators/mastersAC';


function Master({master}) {
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <li>Name: {master.name}, Number: {master.id}</li>
      </div>

      <Link to={`/categories/categoryname/service/${master}`}>
      <button size="small">Выбрать время</button>
      </Link>
    </>
  );
}

//onClick={() => dispatch(getFetchTimeAC(master.name))}

export default Master;
