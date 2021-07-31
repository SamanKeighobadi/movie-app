import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCart from "./MovieCart";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
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

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
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
    </div>
  );
};

export default Movies;
