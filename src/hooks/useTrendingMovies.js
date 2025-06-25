import React, { useEffect } from 'react'

import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrendingMovies} from '../utils/moviesSlice'


const useTrendingMovies=()=>{

     // Trying to fetch data from tmdb api and update store
   const dispatch=useDispatch();
   const trendingMovies=useSelector((store)=>store.movies.TrendingMovies);
  const getTrendingMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS);
    const json=await data.json();
    // console.log(json.results );
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(()=>{
  !trendingMovies &&  getTrendingMovies();
  },[]);
};

export default useTrendingMovies;