import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/index">Startpage</NavLink>
        </li>
        <li>
          <NavLink to="/companies">Company Names</NavLink>
        </li>
      </ul>
    </nav>
  );
};
