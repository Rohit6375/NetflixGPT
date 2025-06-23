import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'
const MovieCard = ({posterPath}) => {
  
  return (
    <div className="pr-4 flex-shrink-0">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="Movie card"
        className="w-48 h-auto object-cover"
      />
    </div>
  );
};


export default MovieCard