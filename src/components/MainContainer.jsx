import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return ; // same as(movies===null)

    // console.log(movies); 
    const mainMoive=movies[6];
    // console.log(mainMoive);
    const {original_title,overview,id}=mainMoive;
  return (
    <div className='md:pt-0 pt-[30%] bg-black'>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;