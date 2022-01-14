import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getFetchCategoriesAC } from '../../redux/actionCreators/categoriesAC';
import Category from '../Category/Category';


function Categories(props) {

  const categories = useSelector(state.catiegoriesReducer.categories)
  const dispatch = useDispatch()

  useEffect(() => {dispatch(getFetchCategoriesAC())}, [dispatch])

  return (
    <div>
      <ul>
        {categories.length ? categories.map((category) => <Category key={category.id} category={category} />) : <li>No categories</li>}
      </ul>
    </div>
  );
}

export default Categories;
