import React, { useState } from "react";
//? import components
import Search from "../SearchBox/Search";
import Loading from "../common/Loading";
import MoviePagination from "./MoviePagination";
//? React Helmet
import { Helmet } from "react-helmet";
//? Import Custom hook
import useTrending from "../CustomHooks/useTrending";
import useSearch from "../CustomHooks/useSearch";

const Trending = () => {
  const [searchQuery, setSearchQuery] = useState([]);

  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Base Urls
  const TrendingMovieUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`;
  const TrendingSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

  //? Custom hooks
  const { data: movies, loading } = useTrending(TrendingMovieUrl);
  const { data: moviesSearch } = useSearch(TrendingSearchUrl, searchQuery);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* React Helmet */}
          <Helmet>
            <meta charSet="utf-8" />
            <title>Trending Movies</title>
          </Helmet>

          {/* <TrendingSearch /> */}

          <div className="flex justify-center ">
            <div className="  ">
              <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pb-4">
                <h1 className="text-white font-bold text-4xl lg:pl-24 pb-4">
                  Trending Movies
                </h1>
                <Search setSearchQuery={(text) => setSearchQuery(text)} />
              </div>
            </div>
          </div>

          <div className="text-white">
            <MoviePagination moviesSearch={moviesSearch} movies={movies} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;
