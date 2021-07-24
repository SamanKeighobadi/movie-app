import React from "react";
import {Link} from 'react-router-dom'
const MovieCart = ({ image, title, average, overview }) => {
  const IMG_API = "https://image.tmdb.org/t/p/w500";
  return (
    <Link to="/singlePage">
      <div className="max-w-sm lg:max-w-md mb-2    ">
        <div className="relative overflow-y-hidden cursor-pointer  ">
          <img
            className="rounded-bl-none rounded-br-none rounded  "
            src={`${IMG_API}${image}`}
            alt={title}
          />
          <div className=" absolute bottom-0  bg-gray-700 h-full  transition-opacity opacity-0   hover:opacity-100 ">
            <p className="px-2 py-3 font-medium text-white   buttom-0  ">
              {overview}
            </p>
          </div>
        </div>

        <div className="bg-gray-800 px-2 py-1 text-center rounded-b">
          <span className="text-white px-2">{title}: </span>
          <span className="text-white bg-gradient-to-tr bg-gray-700 rounded-lg px-3 ">
            {average}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default MovieCart;
