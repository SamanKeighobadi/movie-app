import  { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const useMovieDetails = (url) => {

  const [movie, setMovie] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [overview, setOverview] = useState("");
  const [title, steTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [average, setAverage] = useState("");
  const [runtime, setRuntime] = useState("");
  const [genres, setGenres] = useState([]);
  const [loading,setLoading] = useState(true)
  
  const fetchDetails = async () => {
    try {
      const {data} = await axios.get(url).catch((err) => console.log(err));
      //* Destructure params from data
      const {
        overview,
        original_title,
        genres,
        production_countries,
        spoken_languages,
        vote_average,
        runtime,
      } = data;
      //* set States
      setMovie(data);
      setOverview(overview);
      steTitle(original_title);
      setGenres(genres);
      setProductionCountries(production_countries[0].name);
      setLanguage(spoken_languages[0].name);
      setAverage(vote_average);
      setRuntime(runtime);
      setLoading(false)

      console.log(data)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() =>{
      fetchDetails();
  },[])

  return {
    movie,
    title,
    genres,
    runtime,
    average,
    language,
    overview,
    productionCountries,
    loading
  };
};

//? 
useMovieDetails.prototype = {
  url:PropTypes.string
}

export default useMovieDetails;
