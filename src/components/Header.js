import React from 'react';

export const Header = () => {
  return (
    <h1 className="header">
    Top 50 Tech Companies
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons8-laptop-50.png`}
        alt="clapperboard icon"
        className="icon-header" />
    </h1>
  )
}