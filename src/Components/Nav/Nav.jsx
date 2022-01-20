import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav () {
  return (
    <nav className='navbar'>
      <h3>Table-Top Adventure</h3>
      <div className="links center">
        <NavLink exact to="/">
          Home
        </NavLink>
        <div className="dropdown">
          <button className="dropbtn">
            Game
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <NavLink exact to="/dnd">
              DnD
            </NavLink>
            <NavLink exact to="/L5R">
              L5R
            </NavLink>
          </div>
        </div>
        <NavLink exact to="/$">
          Log In
        </NavLink>
      </div>
    </nav>
  )
};

export default Nav;