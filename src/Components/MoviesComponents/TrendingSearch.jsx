import React, { useState } from "react";
import Search from "../SearchBox/Search";
import useTrendingSearch from "../CustomHooks/useTrendingSearch";

const TrendingSearch = () => {
  const [searchQuery, setSearchQuery] = useState([]);

  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  const TrendinSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;

  const { data } = useTrendingSearch(TrendinSearchUrl, searchQuery);

  return (
    <>
      <div className="flex justify-center ">
        <div className="  ">
          <div className=" grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 pb-4">
            <h1 className="text-white font-bold text-4xl lg:pl-24 pb-4">
              Trending Movies
            </h1>
            <Search setSearchQuery={(text) => setSearchQuery(text)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingSearch;
