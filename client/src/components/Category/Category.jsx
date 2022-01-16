import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// // import { getFetchServicesAC } from '../../redux/actionCreators';


function Category({ category }) {
  const dispatch = useDispatch()
  const categoryname = category
  
  return (
    <>
      <div>
        <li>Name: {categoryname}</li>
      </div>

      {/* <Link to={`/categories/${categoryname}`}>
        <button onClick={() => dispatch('GET_FETCH_SERVICES'(category.name))} size="small">Выбрать</button>
      </Link> */}
    </>
  );
}

export default Category;
