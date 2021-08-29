import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";

const useMovieTrailer = (url) => {
  const [video, setVideo] = useState("");

  const fetchVideo = async () => {
    try {
      const response = await axios.get(url).catch((err) => {
        console.log(err);
      });
      const { results } = response.data;
      //* find trailer video by filtering the array who has type
      const findTrailer = results.filter((r) => r.type === "Trailer");
      setVideo(findTrailer[0].key);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return { video };
};

//?
useMovieTrailer.propTypes= {
  url:PropTypes.string
}

export default useMovieTrailer;
