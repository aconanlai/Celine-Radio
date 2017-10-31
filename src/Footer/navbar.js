
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = ({ props }) => {

  // Test Renders - please disregard these



  return (
    <ul classname='navBar'>
      <NavLink activeClassName="active" to={'/about'} >
        About us
      </NavLink>

    </ul>

  )
}
export default Nav;
