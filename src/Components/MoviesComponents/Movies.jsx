import React, { useState } from "react";
//? Import Components
import Loading from "../common/Loading";
//? React Helmt
import { Helmet } from "react-helmet";
//? Import Custom hooks
import useMovies from "../CustomHooks/useMovies";
import MoviePagination from "./MoviePagination";
import Search from "../SearchBox/Search";
import useMoviesSearch from "../CustomHooks/useMoviesSearch";

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState([]);

  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Base urls
  const moviesUrl = ` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_video=true&page=`;
  const moviesSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

  //? Custom hooks
  const { data: movies, loading } = useMovies(moviesUrl);
  const {data:moviesSearch} = useMoviesSearch(moviesSearchUrl,searchQuery)

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


          <div className="flex justify-center ">
            <div>
              <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pb-4">
                <h1 className="text-white font-bold text-4xl lg:pl-24 pb-4">
                  All Movies
                </h1>
                <Search setSearchQuery={(text) => setSearchQuery(text)} />
              </div>
            </div>
          </div>

          <div className="text-white">
            <MoviePagination movies={movies} moviesSearch={moviesSearch} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
