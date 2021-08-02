import React from "react";
import { Link } from "react-router-dom";
//? React Icons
import { BiTrendingUp } from "react-icons/bi";
import { RiMovie2Fill } from "react-icons/ri";
import { MdMovie } from "react-icons/md";
const Header = () => {
  return (
    <div>
      <nav className="h-16 text-white capitalize shadow-md mb-6">
        <ul className="flex justify-around pt-4  ">
          <li>
            <Link to="/trending">
              Trending <BiTrendingUp className="inline-block ml-1 text-lg" />{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              movies <MdMovie className="inline-block ml-1 text-lg" />{" "}
            </Link>
          </li>
          <li>
            <Link to="/tv-series">
              tv series
              <RiMovie2Fill className="inline-block ml-1 text-lg" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
