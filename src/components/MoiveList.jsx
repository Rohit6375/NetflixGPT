import React from 'react';
import MovieCard from './MovieCard';
import "../App.css";

const MoiveList = ({ title, movies, onMovieClick }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <div className="text-white px-6">No movies present</div>;
  }

  return (
    <div className="px-2 text-white">
      <h1 className="text-lg md:text-3xl py-3">{title}</h1>
      <div className="flex overflow-x-scroll hide-scrollbar">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} movie={movie} onMovieClick={onMovieClick} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoiveList;
