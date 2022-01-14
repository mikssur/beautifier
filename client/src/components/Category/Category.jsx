import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFetchServicesAC } from '../../redux/actionCreators';


function Category({ category }) {
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <li>Name: {category.name}, Number: {category.id}</li>
            </div>

            <Link to={`/categories/${categoryname}`}>
                <button onClick={() => dispatch(getFetchServicesAC(category.name))} size="small">Выбрать</button>
            </Link>
        </>
    );
}

export default Category;