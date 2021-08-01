import axios from "axios";
import React, { useEffect, useState } from "react";
//? import components
import Pagination from "./common/Pagination";
import MovieCart from "./MovieCart";
import Search from "./Search";
import Loading from "./common/Loading";

const Trending = () => {
  //?states
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Fetch Trending API
  const fetchTrendingMovies = async () => {
    try {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`
        )
        .catch((err) => console.log(err));
      console.log(response.data);

      //* Set States
      setMovies(response.data.results);
      //*set Loading to false
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  //?fetch Search Movies
  const fetchSearchMovies = async () => {
    try {
      if (searchQuery) {
        const response = await axios
          .get(
            `
      https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
          )
          .catch((err) => console.log(err));
        //*set Movies
        setMovies(response.data.results);
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
    fetchSearchMovies();
  }, [searchQuery]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="grid grid-cols-2 mb-4">
            <h1 className="text-white font-bold text-4xl lg:pl-24">
              Trending Movies
            </h1>
            <Search setSearchQuery={(text) => setSearchQuery(text)} />
          </div>
          <div className="grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2  gap-4">
            {movies.map((movie) => (
              <div key={movie.id}>
                <MovieCart
                  title={movie.title}
                  image={movie.poster_path}
                  date={movie.release_date}
                />
              </div>
            ))}
            <Pagination page={setPage} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;
