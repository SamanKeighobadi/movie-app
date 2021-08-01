import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCart from "./MovieCart";
import Genres from "./Genres";
import { paginate } from "./common/paginate";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  // const [genres,setGeners] = useState([])

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
      // const indexMovies = paginate(movies,1,10)
  return (
    <div>
    <Genres />
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
