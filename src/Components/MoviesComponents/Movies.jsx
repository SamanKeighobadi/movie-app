import React, {  useState } from "react";

//? Import Components
import Search from "../SearchBox/Search";
import Loading from "../common/Loading";
//? React Helmt
import { Helmet } from "react-helmet";
//? Import Custom hooks
import useMovies from "../CustomHooks/useMovies";
import useMoviesSearch from "../CustomHooks/useMoviesSearch";
import Pagination from "../common/Pagination";
const Movies = () => {
  //? intial States
  const [searchQuery, setSearchQuery] = useState([]);

  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Base urls
  const moviesUrl = ` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_video=true&page=`;
  const moviesSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`

  //? Custom hooks
  const {data:movies,loading} = useMovies(moviesUrl)
  const {date} = useMoviesSearch(moviesSearchUrl,searchQuery)
  
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
        {/* React Helmet */}
          <Helmet>
            <meta charSet="utf-8" />
            <title>All Movies</title>
          </Helmet>
          <div className="grid grid-cols-2 mb-2">
            <h1 className="text-white font-bold text-4xl lg:pl-24">
              All Movies
            </h1>
            <Search setSearchQuery={(text) => setSearchQuery(text)} />
          </div>
          <div className="">
            
            <Pagination movies={movies} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
