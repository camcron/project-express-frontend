import React from 'react';

export const StartPage = () => {
  return (
    <h1 className="header">
    startpage
      <img
        src={`${process.env.PUBLIC_URL}/assets/icons8-laptop-50.png`}
        alt="clapperboard icon"
        className="icon-header" />
    </h1>
  )
}