import { useState, useEffect } from "react";
import axios from "axios";

const useMoviesSearch = (url, searchQuery) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //?fetch Search Movies
  const fetchSearchMovies = async () => {
    try {
      //* cheeck if any query is exist
      if (searchQuery) {
        const {data}= await axios.get(url).catch((err) => console.log(err));

        //* set movie search results after get query from  search input
        setData(data.results);
        setLoading(false)
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSearchMovies();
  }, [searchQuery]);

  return { data,loading };
};

export default useMoviesSearch;
