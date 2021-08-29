import React from "react";
import { IMG_500 } from "../../Config/config";
import PropTypes from 'prop-types'

const SingelPageTvImage = ({ image, title }) => {
  return (
    <div>
      <img
        className=" h-full rounded-r-lg  "
        src={`${IMG_500}/${image.poster_path}`}
        alt={title}
      />
    </div>
  );
};

//? PropTypes
SingelPageTvImage.propTypes = {
  image:PropTypes.string,
  title:PropTypes.string
}

export default SingelPageTvImage;
