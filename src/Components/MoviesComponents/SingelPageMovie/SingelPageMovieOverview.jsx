import React from "react";
import { SiImdb } from "react-icons/si";

const SingelPageMovieOverview = ({ average, overview }) => {
  return (
    <div>
      <span className="text-white text-xl">
        <SiImdb className="inline-block text-2xl mr-2 text-yellow-500  " />
        {average}
      </span>
      <p className="text-white  pt-3 ">{overview}</p>
    </div>
  );
};

export default SingelPageMovieOverview;
