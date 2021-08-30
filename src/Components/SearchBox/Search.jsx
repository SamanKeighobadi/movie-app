import React, { useState } from "react";
import PropTypes from 'prop-types'

const Search = ({ setSearchQuery }) => {

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(text);
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="lg:flex sm:flex md:flex justify-center "
      >
        <input
          type="text"
          placeholder="search and press Enter ..."
          className="border-none outline-none w-56 bg-gray-800 rounded-md text-white font-semibold lg:px-4 py-1 lg:w-72 px-1  bg-transparent border-b-2 mb-4"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

Search.propTypes = {
  setSearchQuery: PropTypes.func
}

export default Search;
