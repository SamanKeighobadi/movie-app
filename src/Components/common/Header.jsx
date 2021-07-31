import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="h-16 text-white capitalize shadow-md mb-6">
        <ul className="flex justify-around pt-4  ">
          <li>
            <Link to="/trending">Trending</Link>
          </li>
          <li>
            <Link to="/movies">movies</Link>
          </li>
          <li>
            <Link to="/tv-series">tv series</Link>
          </li>
          <li>
            <Link to="/serach">Search</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
