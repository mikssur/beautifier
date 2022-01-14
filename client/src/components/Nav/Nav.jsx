import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/category">Category</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/review">Review</Link>
      </li>
    </ul>
  );
}

export default Nav;
