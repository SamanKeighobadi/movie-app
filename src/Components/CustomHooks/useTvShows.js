import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const useTvShows = (url) => {
  //? intial states
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //? Fetch Tv Shows
  const fetchTvShows = async () => {
    try {
      const { data } = await axios.get(url).catch((err) => console.log(err));

      //*get tv shows search results
      setData(data.results);
      //* Set Loading to false
      setLoading(false);
      console.log(data);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    fetchTvShows();
  }, []);

  return { data, loading };
};

//? PropTypes
useTvShows.propTypes = {
  url: PropTypes.string,
};

export default useTvShows;
