import React from "react";
//? PropTypes
import ProptTypes from "prop-types";
//? react router dom
import { Link } from "react-router-dom";
//? Config file 
import { IMG_300, unavailable_image } from "../Config/config";

const MovieCart = ({ title, image, date, movie_id }) => {
  return (
    <Link to={`/single-movie/${movie_id}`}>
      <div className="bg-gray-800 rounded shadow-lg cursor-pointer mb-5 ">
        <div>
          <img
            className="rounded-t"
            src={image ? `${IMG_300}${image}` : unavailable_image}
            alt={title}
          />
        </div>
        <div className="text-white px-2 py-3">
          <h1>{title}</h1>
          <span>
            {" "}
            Release Date:{" "}
            {date ? date : <p className="inline-block">Coming Soon</p>}
          </span>
        </div>
      </div>
    </Link>
  );
};

MovieCart.propTypes = {
  title: ProptTypes.string,
  image: ProptTypes.string,
  movie_id: ProptTypes.number,
  date: ProptTypes.string,
};

export default MovieCart;
