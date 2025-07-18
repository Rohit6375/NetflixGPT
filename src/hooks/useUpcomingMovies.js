import React, { useEffect } from 'react'

import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addUpcomingMovies} from '../utils/moviesSlice'


const useUpcomingMovies=()=>{

     // Trying to fetch data from tmdb api and update store
   const dispatch=useDispatch();
   const upComing=useSelector((store)=>store.movies.UpcomingMovies);
  const getUpcomingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS);
    const json=await data.json();
    // console.log(json.results );
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(()=>{
   !upComing && getUpcomingMovies();
  },[]);
};

export default useUpcomingMovies;