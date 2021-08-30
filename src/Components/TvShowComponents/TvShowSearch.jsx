import React, { useState } from "react";
import Search from "../SearchBox/Search";

const TvShowSearch = () => {

  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";

  

  return (
    <div>
      <div>
        <div className="grid grid-cols-2 pb-4">
          <h1 className="text-white font-bold text-4xl lg:pl-24">Tv Shows</h1>
          {/* <Search setSearchQuery={(text) => setSearchQuery(text)} /> */}
        </div>
      </div>
    </div>
  );
};

export default TvShowSearch;
