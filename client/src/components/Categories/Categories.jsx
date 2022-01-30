import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Category from '../Category/Category';

import './Categories.css';


function Categories(props) {
    const categories = useSelector((state) => state.categoriesReducer.categories)
    const dispatch = useDispatch()

    useEffect(() => {dispatch({ type: 'GET_FETCH_CATEGORIES' })}, [dispatch])

    return (
        <div className="categories-block">
            <h2>Наши услуги</h2>
            <div className="categories-main-page">
                {categories.length ? categories.map((category) => <Category key={uuidv4()} category={category} />) : <p>No categories</p>}
            </div>
        </div>
    );
}

export default Categories;
