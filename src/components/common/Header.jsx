import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ searchMovie }) => {
  const [search, setSearch] = useState("");

  const fetchSearchMovies = async () => {
    if (search) {
      try {
        const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
        const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`;
        const response = await axios
          .get(`${SEARCH_API}`)
          .catch((err) => console.log(err));
        searchMovie(response.data);
      } catch (ex) {
        console.log(ex);
      }
    }
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };

  useEffect(() => {
    fetchSearchMovies();
  }, [search]);

  return (
    <div>
      <nav className="mb-6 h-12 shadow-md flex justify-around items-center lg:py-8 md:py-6">
        <ul className="flex text-white">
          <li>
            <Link to="/">Logo</Link>
          </li>
        </ul>
        <form onSubmit={handelOnSubmit} className="my-4">
          <input
            type="text"
            placeholder="search Movie"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="lg:py-1 lg:px-2 md:py-1 md:px-2 text-white rounded bg-transparent focus:ring-0 acitve:ring-0 "
          />
        </form>
      </nav>
    </div>
  );
};

export default Header;
