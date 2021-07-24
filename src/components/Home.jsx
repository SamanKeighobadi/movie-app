import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieCart from "./MovieCart";
import MainLayous from "./layouts/MainLayous";
import Loading from "./common/Loading";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading,setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
      );
      console.log(response.data);
      setMovies(response.data.results);
      setLoading(false)
      console.log(movies);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MainLayous searchMovie={movie => setMovies(movie)}>
      <div className="container mx-auto   grid gap-2 lg:grid-cols-4 md:grid-cols-3 sm:gap-5 sm:grid-cols-2 grid-cols-1">
        {loading ? (<Loading />) : (
          <>
          {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCart
              image={movie.poster_path}
              title={movie.title}
              average={movie.vote_average}
              overview={movie.overview}
            />
          </div>
        ))}
          </>
        )}
      </div>
    </MainLayous>
  );
};

export default Home;
