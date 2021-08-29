import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const useTvShowDetails = (url) => {
  const [tvShow, setTvShow] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [genres, setGenres] = useState([]);
  const [overview, setOverview] = useState("");
  const [title, steTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [average, setAverage] = useState("");
  const [numberOfSeasons, setNumberOfSeasons] = useState(0);
  const [runtime, setRuntime] = useState("");
  const [loading,setLoading] = useState(true)

  const fetchTvShowDetails = async () => {
    try {
      const { data } = await axios.get(url).catch((err) => console.log(err));

      //* Destructure from response.data
      const {
        name,
        overview,
        vote_average,
        genres,
        spoken_languages,
        production_countries,
        episode_run_time,
        number_of_seasons,
      } = data;

    
      steTitle(name);
      setOverview(overview);
      setAverage(vote_average);
      setTvShow(data);
      setNumberOfSeasons(number_of_seasons);
      setGenres(genres);
      setRuntime(episode_run_time[0]);
      setLanguage(spoken_languages[0].name);
      setProductionCountries(production_countries[0].name);
      setLoading(false)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTvShowDetails();
  }, []);

  return {
    tvShow,
    productionCountries,
    genres,
    title,
    overview,
    language,
    average,
    runtime,
    numberOfSeasons,
    loading
  };
};

//? PorpTypes
useTvShowDetails.prototype = {
  url:PropTypes.string
}

export default useTvShowDetails;
