import React, { useRef, useState } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import ai from '../utils/GenAI';
import { API_OPTIONS } from '../utils/constants';
import { addGeminiMovieResult } from '../utils/gptSlice';
import Shimmer from './Shimmer';

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector(store => store.config.lang);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false); 

  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    setLoading(true); 

    const gptQuery = "Act as a Movie Recommendation system suggest some movies for the query : " + searchText.current.value + ". only give me name of 5 movies, comma separated like the example result given ahead. example Result: Gadar, sholay, don, golmaal, Koi Mil Gaya and if any query matches with exact name of any movie then return only that movie";

    const gptResults = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: gptQuery,
    });

    const geminiMovies = gptResults.text.split(",");
    const promiseArray = geminiMovies.map(movie => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGeminiMovieResult({ movieNames: geminiMovies, movieResults: tmdbResults }));
    setLoading(false); 
  };

  return loading ? <Shimmer /> :(
  <div>
    <div className="pt-[40%] md:p-[10%] flex justify-center">
      <form className="md:w-1/2 w-full bg-black/80 grid grid-cols-12 rounded-xl" onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} type="text" className="p-4 m-4 bg-white/95 col-span-9" placeholder={lang[langKey].gptSearchPlaceholder} />
        <button
          className={`py-2 px-4 font-bold hover:cursor-pointer text-white rounded-lg col-span-3 m-4 ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-red-600/80 hover:bg-red-600/50"
          }`}
          onClick={handleGptSearchClick}
          disabled={loading}
        >
          {loading ? "Loading..." : lang[langKey].search}
        </button>
      </form>
    </div>

    
  </div>
);
}
export default GptSearchBar;
