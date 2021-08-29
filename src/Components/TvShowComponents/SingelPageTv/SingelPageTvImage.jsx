import React from "react";
import { IMG_500 } from "../../Config/config";

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

export default SingelPageTvImage;
