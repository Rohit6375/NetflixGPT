import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MoiveList from './MoiveList';
import MovieDetails from './MovieDetails';  // You need this component ready

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector(store => store.gpt);
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (!movieNames) return null;

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);  // Show details on click
  };

  return (
    <div className="p-4 m-4 bg-black/90 text-white">
      {movieNames.map((movieName, index) => (
        <MoiveList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
          onMovieClick={handleMovieClick}  // Pass click handler
        />
      ))}

      {selectedMovie && (
        <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default GptMovieSuggestions;
