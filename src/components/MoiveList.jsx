import React from 'react'
import MovieCard from './MovieCard';

const MoiveList = ({title,movies}) => {
  // console.log(movies);
 if(!Array.isArray(movies) || movies.length===0){
  return <div>no movies present</div>;
 }
  return (
    <div className='px-6  text-white'>
      <h1 className='text-3xl py-3'>{title}</h1>
     <div className='flex overflow-x-scroll'>
        <div className='flex'>
        {movies.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path} /> )}
      </div>
      </div>
     
    </div>
  )
}

export default MoiveList