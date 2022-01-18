import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { gettFetchServicesAC } from '../../redux/actionCreators/servicesAC';


function Category({ category }) {
  const dispatch = useDispatch()
  const categoryname = category.name
  const picture = category.picture
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
      <Link to={`/categories/${categoryname}`}>
        <li onClick={() => dispatch({ type: 'GET_FETCH_SERVICES', payload: { id } })} size="small">{categoryname}</li>
      </Link>
      <img style={{width: '150px', height: '170px'}} src={picture} alt="" />
    </>
  );
}

export default Category;
