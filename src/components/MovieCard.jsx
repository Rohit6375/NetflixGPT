import React from 'react';

const MovieCard = ({ posterPath, movie, onMovieClick }) => {
  if (!posterPath) return null;

  return (
    <div className=" w-36 md:w-44 p-2 cursor-pointer hover:scale-110 rounded-lg transition-all duration-500" onClick={() => onMovieClick(movie)}>
      <img className="w-full" src={"https://image.tmdb.org/t/p/w300" + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
