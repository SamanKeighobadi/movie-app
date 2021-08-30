import React from "react";
import { IMG_500, unavailable_image } from "../../Config/config";
import PropTypes from "prop-types";

const SingelPageMovieImage = ({ image, title }) => {
  return (
    <div>
      <div >
        <img
          className=" h-full lg:rounded-r-lg lg:rounded-bl-none rounded-b-lg  w-full"
          src={image ? `${IMG_500}/${image.poster_path}` : unavailable_image}
          alt={title}
        />
      </div>
      
    </div>
  );
};

//? Prop Types
SingelPageMovieImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
};

export default SingelPageMovieImage;
