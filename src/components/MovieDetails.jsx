import React from 'react';
import "../App.css";

const MovieDetails = ({ movie, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 ">
        <div className="bg-black text-white h-[80%] p-6 rounded-lg w-[80%] md:max-w-md md:h-[80%] overflow-y-scroll hide-scrollbar border-2 border-red-400 shadow-lg">


        <h2 className="text-lg md:text-2xl font-bold mb-4">{movie.title}</h2>
        <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt="Poster" className="mb-4 md:w-[300px] w-1/2" />
        <p className="mb-4">{movie.overview}</p>
        
        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
