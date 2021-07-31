import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCart from "./MovieCart";

const Trending = () => {
  const [movies, setMovies] = useState([]);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
const[releaseDate,setReleaseDate] = useState("undefined");
  //? Fetch Trending API
  const fetchTrendingMovies = async () => {
    try {
      const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
      const response = await axios
        .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
        .catch((err) => console.log(err));
      console.log(response.data);

      const {title,poster_path,release_date} = response.data.results;

      //* Set States
      setMovies(response.data.results);
      setTitle( title);
      setImage(poster_path);
        // setAverage(vote_average)
        setReleaseDate(release_date)

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);
  return (
    <div className='grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2  gap-4'>
      {movies.map((movie) => (
        <div key={movie.id}>
          <MovieCart title={movie.title} image={movie.poster_path} date={movie.release_date} />
        </div>
      ))}
    </div>
  );
};

export default Trending;
