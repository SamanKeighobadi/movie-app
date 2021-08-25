import axios from 'axios';
import {useState,useEffect} from 'react';

const useTrendingSearch = (url,searchQuery) => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)

    //?fetch Search Movies
  const fetchSearchMovies = async () => {
    try {
      //* cheeck if any query is exist
      if (searchQuery) {
        const response = await axios
          .get(
            url
          )
          .catch((err) => console.log(err));
        //*set Movies
        setData(response.data.results);
        console.log(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() =>{
      fetchSearchMovies()
  },[searchQuery])

  return {data}

};

export default useTrendingSearch;