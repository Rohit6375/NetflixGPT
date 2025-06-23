import React from 'react'
import MoiveList from './MoiveList';
import { useSelector } from 'react-redux';
import "../App.css";

const SecondaryContainer = () => {
    const movies=useSelector(store=>store.movies); // have all type of movies popular now playing and all
   if(!movies) return ; 
    // console.log(movies);
  return (
    <div className='bg-black'>
      <div className='-mt-[230px] pl-10 relative z-20'>
<MoiveList title={"Now Plyaing"} movies={movies.nowPlayingMovies}/>
        <MoiveList title={"Trending"} movies={movies.TrendingMovies}/>
        <MoiveList title={"Popular"} movies={movies.PopularMovies}/>
        <MoiveList title={"Upcoming"} movies={movies.UpcomingMovies}/>
      </div>
        
    </div>
  )
}

export default SecondaryContainer;