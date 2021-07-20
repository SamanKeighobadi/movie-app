import React,{useState} from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [search ,setSearch] = useState("");

  return (
    <div className="container mx-auto shadow-md">
      <nav className="py-4 grid grid-cols-2 mb-2 ">
        <div className="w-1/2">
          <ul className="text-white flex items-center justify-center capitalize font-semibold">
            <li className="">
              <Link to="/">logo</Link>
            </li>
            <li className="px-8">
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/">popualrity</Link>
            </li>
          </ul>
        </div>
        <div className="w-1/2 flex  lg:justify-end">
          <input
            className="rounded-lg bg-gray-800 py-1 px-2  acive:ring-0 "
            type="text"
            placeholder="Search movie"
            onChange={(e) =>setSearch(e.target.value) }
          />
        </div>
      </nav>
    </div>
  );
};

export default Header;
