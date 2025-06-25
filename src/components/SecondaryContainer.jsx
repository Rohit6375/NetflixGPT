import React, { useState } from 'react';
import MoiveList from './MoiveList';
import { useSelector } from 'react-redux';
import MovieDetails from './MovieDetails';
import "../App.css";

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (!movies) return;

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="bg-black">
      <div className=" mt-0  md:-mt-54    md:pl-10 relative z-20">
        <MoiveList title={"Now Playing"} movies={movies.nowPlayingMovies} onMovieClick={handleMovieClick} />
        <MoiveList title={"Trending"} movies={movies.TrendingMovies} onMovieClick={handleMovieClick} />
        <MoiveList title={"Popular"} movies={movies.PopularMovies} onMovieClick={handleMovieClick} />
        <MoiveList title={"Upcoming"} movies={movies.UpcomingMovies} onMovieClick={handleMovieClick} />
      </div>

      {selectedMovie && <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
};

export default SecondaryContainer;
