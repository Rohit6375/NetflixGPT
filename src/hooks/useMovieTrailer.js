import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
const useMovieTrailer = (movieId) => {
  // fetch trailer video && updating the store with trailer vide data
    const dispatch=useDispatch();

   
  // fetch trailer videos
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);

    const filterTrailer = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);

}

export default useMovieTrailer