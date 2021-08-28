import React from "react";
//? React Helemt
import { Helmet } from "react-helmet";
//?import Components
import Loading from "../common/Loading";
//? Import Custmo hooks
import useTvShows from "../CustomHooks/useTvShows";
import TvShowPagination from "./TvShowPagination";
import TvShowSearch from "./TvShowSearch";

const TvSeries = () => {
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  //? Base url
  const tvShowsUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&include_video=true`;

  //? Custom hooks
  const { data: tvShows, loading } = useTvShows(tvShowsUrl);

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

          <TvShowSearch />

          <div className="text-white">
            <TvShowPagination tvShows={tvShows} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TvSeries;
