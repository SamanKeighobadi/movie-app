import axios from "axios";
import { useState, useEffect } from "react";

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

export default useMovieTrailer;
