import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align:center;
  font-size: 2em;
  margin: 5% 0;
  
  img {
    margin-left: 20px;
  }

  @media (max-width: 340px) {
    font-size: 1.5em;
  }

  @media (min-width: 667px) {
    font-size: 3em;
  }

  @media (min-width: 1024px) {
    font-size: 3.5em;
  }
`;

export const Header = () => {
  return (
    <StyledH1 className="header">
    Top 50 Tech Companies
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons8-laptop-50.png`}
        alt="clapperboard icon"
        className="icon-header" />
    </StyledH1>
  )
}