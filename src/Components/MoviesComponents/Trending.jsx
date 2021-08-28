
import React, {  useState } from "react";
//? import components
import MovieCart from "./MovieCart";
import Search from "../SearchBox/Search";
import Loading from "../common/Loading";
import MoviePagination from "./MoviePagination";
//? React Helmet
import {Helmet} from 'react-helmet';
//? Import Custom hook
import useTrending from '../CustomHooks/useTrending'
import TrendingSearch from "./TrendingSearch";
const Trending = () => {
  //? intial  states

  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Base Urls
  const TrendingMovieUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`
  //? Custom hooks
  const {data:movies,loading} = useTrending(TrendingMovieUrl);
  
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
        {/* React Helmet */}
        <Helmet>
            <meta charSet='utf-8' />
            <title>Trending Movies</title>
        </Helmet>

          <TrendingSearch />

          <div className="text-white">
            <MoviePagination movies={movies} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;
