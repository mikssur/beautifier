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

// import React from 'react';
// import Worm from '../Worm/Worm';
// import { useSelector } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';

// // function WormList({ worms }) {
// function WormList() {

//   const worms = useSelector(state => state.wormsReducer.worms)
//   return (
//     <ul>
//       {worms.length ? worms.map((worm) => <Worm key={uuidv4()} worm={worm} />) : <li>No worms</li>}
//     </ul>
//   );
// }
