import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
//import { getFetchCategoriesAC } from '../../redux/actionCreators/categoriesAC';
import Category from '../Category/Category';


function Categories(props) {
      // const categories = [{parik: 'parik', id: '1'}, {manik: 'manik', id: '2'}, {strig: 'strig', id: '3'}]
    const categories = useSelector((state) => state.categoriesReducer.categories)
    console.log(categories[0] );
    const dispatch = useDispatch()

    useEffect(() => {dispatch({ type: 'GET_FETCH_CATEGORIES' })}, [dispatch])

    return (
        <div>
            <ul>
                {categories.length ? categories.map((category) => <Category key={uuidv4()} category={category} />) : <li>No categories</li>}
            </ul>
        </div>
    );
}

export default Categories;
