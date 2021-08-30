import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const useMovies = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const { data } = await axios.get(url).catch((err) => console.log(err));

      //* set movies results
      setData(data.results);
      //*Set Loading to false
      setLoading(false);
  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return { data, loading };
};

//? Prop Types
useMovies.propTypes = {
  url:PropTypes.string
}

export default useMovies;
