import axios from "axios";
import { useState, useEffect } from "react";

const useTvShows = (url) => {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  //? Fetch Tv Shows
  const fetchTvShows = async () => {
    try {
      const {data} = await axios.get(url).catch((err) => console.log(err));

      //*get tv shows search results
      setData(data.results);
      //* Set Loading to false
      setLoading(false);
      console.log(data);
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
