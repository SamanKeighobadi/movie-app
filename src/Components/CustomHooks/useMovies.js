import axios from "axios";
import { useEffect, useState } from "react";

const useMovies = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(url).catch((err) => console.log(err));

      //* set movies results
      setData(response.data.results);
      //*Set Loading to false
      setLoading(false);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
      fetchMovies()
  },[])

  return {data,loading}

};

export default useMovies;
