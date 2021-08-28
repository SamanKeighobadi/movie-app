import React from "react";

//? Import Components
import Loading from "../common/Loading";
//? React Helmt
import { Helmet } from "react-helmet";
//? Import Custom hooks
import useMovies from "../CustomHooks/useMovies";
import MoviePagination from "./MoviePagination";
import MovieSearch from "./MovieSearch";

const Movies = () => {
  //? intial States

  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Base urls
  const moviesUrl = ` https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_video=true&page=`;

  //? Custom hooks
  const { data: movies, loading } = useMovies(moviesUrl);

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

          <MovieSearch />

          <div className="text-white">
            <MoviePagination movies={movies} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
