import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCart from "./MovieCart";
import Search from "./Search";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [genres,setGeners] = useState([])
  const [searchQuery, setSearchQuery] = useState([]);
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  const fetchMovies = async () => {
    try {
      const response = await axios
        .get(
          `
            https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_video=true`
        )
        .catch((err) => console.log(err));

      setMovies(response.data.results);

      console.log(response.data);
    } catch (error) {
      console.log(error);
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

        setMovies(response.data.results);
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
    fetchSearchMovies();
  }, [searchQuery]);
  // const indexMovies = paginate(movies,1,10)
  return (
    <div>
      <div className="grid grid-cols-2 mb-2">
        <h1 className="text-white font-bold text-4xl lg:pl-24">All Movies</h1>
        <Search setSearchQuery={(text) => setSearchQuery(text)} />
      </div>
      <div className="grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2  gap-4 shadow-xl">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCart
              title={movie.title}
              image={movie.poster_path}
              date={movie.release_date}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
