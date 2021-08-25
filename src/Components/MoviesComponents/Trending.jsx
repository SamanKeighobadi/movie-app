import axios from "axios";
import React, { useEffect, useState } from "react";
//? import components
import MovieCart from "./MovieCart";
import Search from "../SearchBox/Search";
import Loading from "../common/Loading";
//? React Helmet
import {Helmet} from 'react-helmet';
//? Import Custom hook
import useTrending from '../CustomHooks/useTrending'
import useTrendingSearch from "../CustomHooks/useTrendingSearch";
const Trending = () => {
  //? intial  states
  // const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState([]);
  // const [loading, setLoading] = useState(true);
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Base Urls
  const TrendingMovieUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=1`
  const TrendinSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  //? Custom hooks
  const {data:movies,loading} = useTrending(TrendingMovieUrl);
  const {data} = useTrendingSearch(TrendinSearchUrl,searchQuery)
  
  // //?fetch Search Movies
  // const fetchSearchMovies = async () => {
  //   try {
  //     //* cheeck if any query is exist
  //     if (searchQuery) {
  //       const response = await axios
  //         .get(
  //           `
  //     https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  //         )
  //         .catch((err) => console.log(err));
  //       //*set Movies
  //       setMovies(response.data.results);
  //       console.log(response.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchTrendingMovies();
  //   fetchSearchMovies();
  // }, [searchQuery]);

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

          <div className="grid grid-cols-2 mb-4">
            <h1 className="text-white font-bold lg:text-4xl md:text-4xl sm:text-3xl pl-3 text-xl lg:pl-24">
              Trending Movies
            </h1>
            <Search setSearchQuery={(text) => setSearchQuery(text)} />
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-4">
            {movies.map((movie) => (
              <div key={movie.id}>
                <MovieCart
                  title={movie.title}
                  image={movie.poster_path}
                  date={movie.release_date}
                  movie_id={movie.id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;
