import React, { useEffect } from 'react'

import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'


const useNowPlayingMovies=()=>{

     // Trying to fetch data from tmdb api and update store
   const dispatch=useDispatch();
   const NowPlayingMovies=useSelector((store)=>store.movies.nowPlayingMovies);
  const getNowPlayingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
    const json=await data.json();
    // console.log(json.results );
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(()=>{
  !NowPlayingMovies &&   getNowPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;