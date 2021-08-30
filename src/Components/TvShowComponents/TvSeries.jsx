import React, { useState } from "react";
//? React Helemt
import { Helmet } from "react-helmet";
//?import Components
import Loading from "../common/Loading";
//? Import Custmo hooks
import useTvShows from "../CustomHooks/useTvShows";
import Search from "../SearchBox/Search";
import TvShowPagination from "./TvShowPagination";

import useSearch from "../CustomHooks/useSearch";

const TvSeries = () => {
  const [searchQuery, setSearchQuery] = useState([]);

  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Base url
  const tvShowsUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&include_video=true`;
  const tvShowsSearchUrl = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchQuery}`;

  //? Custom hooks
  const { data: tvShows, loading } = useTvShows(tvShowsUrl);
  const { data: tvShowsSearch } = useSearch(tvShowsSearchUrl, searchQuery);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          {/* React Helmet */}
          <Helmet>
            <meta charSet="utf-8" />
            <title>Tv Shows</title>
          </Helmet>

          {/* <TvShowSearch /> */}

          <div className="flex justify-center  ">
            <div>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pb-4">
                <h1 className="text-white font-bold text-4xl lg:pl-24 pb-4">
                  Tv Shows
                </h1>
                <Search setSearchQuery={(text) => setSearchQuery(text)} />
              </div>
            </div>
          </div>

          <div className="text-white">
            <TvShowPagination tvShows={tvShows} tvShowsSearch={tvShowsSearch} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TvSeries;
