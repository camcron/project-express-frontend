import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 5%;

  li {
    list-style-type: none;
    font-size: 1.3rem;
  }

  a {
    text-decoration: none;
    color: #15616d;

    &:hover {
      font-weight: bold;
    }
  }

  a.active {
    text-decoration: underline 4px #15616d;
    font-weight: bold;
  }
`;

export const NavBar = () => {
  return (
    <nav className="navbar">
      <StyledUl>
        <li>
          <NavLink to="/index">Startpage</NavLink>
        </li>
        <li>
          <NavLink to="/companies">All stats</NavLink>
        </li>
      </StyledUl>
    </nav>
  );
};
