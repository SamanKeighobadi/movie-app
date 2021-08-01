import axios from "axios";
import React, { useState, useEffect } from "react";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const fetchGenres = async () => {
    try {
      const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&with_genres=`
        )
        .catch((err) => console.log(err));

      setGenres(response.data.genres);

      console.log(response.data.genres);
    } catch (ex) {
      console.log(ex);
    }
  };


  const addGenres = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    console.log(selectedGenres)
  };

  const removeGenres  =(genre ) => {
    setSelectedGenres(selectedGenres.map(selected => selected.id !== genre.id));
    setGenres([...genres,genre]);
  }

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div className="mb-2">
      <div>
        {selectedGenres.map((genre) => (
          <div key={genre.id} className="inline-block  p-1 "  onClick={() => removeGenres(genre)}>
            <span
           
              className="bg-red-500 text-white font-semibold px-2 py-1 rounded-lg 
            cursor-pointer shadow-lg hover:bg-red-600 hover:text-white  "
            >
              {genre.name}
            </span>
          </div>
        ))}


        {genres.map((genre) => (
          <div key={genre.id} className="inline-block  p-1 ">
            <span
              onClick={() => addGenres(genre)}
              className="bg-blue-50 text-black font-semibold px-2 py-1 rounded-full 
            cursor-pointer shadow-lg hover:bg-blue-600 hover:text-white  "
            >
              {genre.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
