import axios from "axios";
import React, { useState, useEffect } from "react";
import MovieCart from "./MovieCart";

const TvSeries = () => {
  const [tvShows, setTvShows] = useState([]);

  const fetchTvShows = async () => {
    try {
      const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
      const response = await axios
        .get(
          `
          https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&include_video=true`
        )
        .catch((err) => console.log(err));

      setTvShows(response.data.results);
      console.log(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    fetchTvShows();
  }, []);

  return (
    <div className="grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2  gap-4 shadow-xl">
      {tvShows.map((show) => (
        <div key={show.id}>
          <MovieCart
            title={show.title}
            image={show.poster_path}
            date={show.first_air_date}
          />
        </div>
      ))}
    </div>
  );
};

export default TvSeries;
