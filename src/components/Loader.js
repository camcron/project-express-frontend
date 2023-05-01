import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
  return (
    <Player
      src="https://assets5.lottiefiles.com/packages/lf20_x62chJ.json"
      loop
      autoplay
      speed={1} />
  )
}
