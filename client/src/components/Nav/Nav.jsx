import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/reviews">Review</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/admincabinet">Admin Cabinet</Link>
      </li>

      <li>
        <Link to="/cabinet">Cabinet</Link>
      </li>

      <li>
        <Link to="/signin">Sign In</Link>
      </li>
    </ul>
  );
}

export default Nav;
