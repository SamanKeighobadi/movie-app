import  { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const useTrending = (url) => {

    //? intial States
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //? Fetch Trending API
  const fetchTrendingMovies = async () => {
    try {
      const { data } = await axios.get(url).catch((err) => console.log(err));
      console.log(data);

      //* Set States
      setData(data.results);
      //*set Loading to false
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTrendingMovies();
  }, []);

  return { data, loading };
};

//? PropTypes
useTrending.propTypes = {
  url: PropTypes.string
}

export default useTrending;
