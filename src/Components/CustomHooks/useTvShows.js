import axios from "axios";
import { useState, useEffect } from "react";

const useTvShows = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //? Fetch Tv Shows
  const fetchTvShows = async () => {
    try {
      const response = await axios.get(url).catch((err) => console.log(err));

      //*get tv shows search results
      setData(response.data.results);
      //* Set Loading to false
      setLoading(false);
      console.log(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() =>{
      fetchTvShows()
  },[])

  return {data,loading}

};

export default useTvShows;
