import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        PopularMovies:null,
        TrendingMovies:null,
        UpcomingMovies:null,
        trailerVideo:null,
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.PopularMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.TrendingMovies=action.payload;
        },
        addUpcomingMovies:(state,action)=>{
            state.UpcomingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    },
});

export const {addTrailerVideo,addNowPlayingMovies,addPopularMovies,addTrendingMovies,addUpcomingMovies}=moviesSlice.actions;

export default moviesSlice.reducer;