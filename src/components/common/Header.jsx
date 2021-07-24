import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="mb-6 h-12 shadow-md flex justify-around items-center lg:py-8 md:py-6">
        <ul className="flex text-white">
        <li>
            <Link to="/" >Logo</Link>
        </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Popular</Link>
          </li>
        </ul>
        <div className="my-4">
          <input
            type="text"
            placeholder="search Movie"
            className="lg:py-1 lg:px-2 md:py-1 md:px-2 rounded bg-transparent focus:ring-0 acitve:ring-0 "
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
