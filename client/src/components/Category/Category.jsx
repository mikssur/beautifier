import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { gettFetchServicesAC } from '../../redux/actionCreators/servicesAC';


function Category({ category }) {
  const dispatch = useDispatch()
  const categoryname = category.name
  const id = category.id
  console.log(id, 'ETO IDIDIDIDIDIDIDIDIDIIDIDD')

  // function getGettFetchServices(id) {
  //   return {
  //     type: 'GET_FETCH_SERVICES',
  //     payload: {
  //       id,
  //     },
  //   };
  // }
  
  return (
    <>
      <div>
        <li>Name: {categoryname}</li>
      </div>

      <Link to={`/categories/${categoryname}`}>
        <button onClick={() => dispatch({type: 'GET_FETCH_SERVICES', payload: {id}})} size="small">Выбрать</button>
      </Link>
    </>
  );
}

export default Category;
