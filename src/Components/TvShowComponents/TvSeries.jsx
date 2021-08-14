import axios from "axios";
import React, { useState, useEffect } from "react";
//? React Helemt
import { Helmet } from "react-helmet";
//?import Components
import Loading from "../common/Loading";
import Search from "../SearchBox/Search";
import TvCart from "./TvCart";

const TvSeries = () => {
  //?set States
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState([]);
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Fetch Tv Shows
  const fetchTvShows = async () => {
    try {
      const response = await axios
        .get(
          `
          https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&include_video=true`
        )
        .catch((err) => console.log(err));

      //*get tv shows search results
      setTvShows(response.data.results);
      //* Set Loading to false
      setLoading(false);
      console.log(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  //? Fetch Search Tv Shows
  const fetchSearchTvShows = async () => {
    try {
      if (searchQuery) {
        const response = await axios
          .get(
            `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchQuery}`
          )
          .catch((err) => console.log(err));

        setTvShows(response.data.results);
        console.log(response.data.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  //? Use Effect and fetch APIs
  useEffect(() => {
    fetchTvShows();
    fetchSearchTvShows();
  }, [searchQuery]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        
        <div>
        <Helmet>
            <meta charSet='utf-8' />
            <title>Tv Shows</title>
        </Helmet>
          <div className="grid grid-cols-2 mb-2">
            <h1 className="text-white font-bold text-4xl lg:pl-24">Tv Shows</h1>
            <Search setSearchQuery={(text) => setSearchQuery(text)} />
          </div>
          <div className="grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2  gap-4 shadow-xl">
            {tvShows.map((show) => (
              <div key={show.id}>
                <TvCart
                  title={show.original_name}
                  image={show.poster_path}
                  date={show.first_air_date}
                  tv_id={show.id}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TvSeries;
