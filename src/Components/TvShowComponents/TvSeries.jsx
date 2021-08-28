
import React, { useState } from "react";
//? React Helemt
import { Helmet } from "react-helmet";
//?import Components
import Loading from "../common/Loading";
import Search from "../SearchBox/Search";
import TvCart from "./TvCart";
//? Import Custmo hooks
import useTvShows from "../CustomHooks/useTvShows";
import TvShowPagination from "./TvShowPagination";

const TvSeries = () => {
  // //? intial States
  const [searchQuery, setSearchQuery] = useState([]);
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Base urls
  const tvShowsUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&include_video=true`
  const tvShowsSearchUrl = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchQuery}`

  //? Custom hooks
  const {data:tvShows,loading} = useTvShows(tvShowsUrl)

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        
        <div>
        {/* React Helmet */}
        <Helmet>
            <meta charSet='utf-8' />
            <title>Tv Shows</title>
        </Helmet>
          <div className="grid grid-cols-2 mb-2">
            <h1 className="text-white font-bold text-4xl lg:pl-24">Tv Shows</h1>
            <Search setSearchQuery={(text) => setSearchQuery(text)} />
          </div>
          <div className="text-white">
            <TvShowPagination tvShows={tvShows} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TvSeries;
