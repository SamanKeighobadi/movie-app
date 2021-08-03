import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMG_500, unavailable_image,youtube } from "./Config/config";
import { useParams, useHistory } from "react-router-dom";
const SinglePageMovie = () => {
  const [video, setVideo] = useState("");
  const [movie, setMovie] = useState([]);
  const [overview, setOverview] = useState("");
  const [title, steTitle] = useState("");
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
  const { movieId } = useParams();
  let histroy = useHistory();
  //? get Movie Details by id
  const fetchDetails = async () => {
    try {
      const response = await axios
        .get(
          `
          https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        )
        .catch((err) => console.log(err));

      const { overview, original_title, tagline } = response.data;
      //* set States
      setMovie(response.data);
      setOverview(overview);
      steTitle(original_title);
      console.log("fetchDetails", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //? get movie video information
  const fetchVideo = async () => {
    try {
      const response = await axios
        .get(
          `
            https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
        )
        .catch((err) => {
          console.log(err);
        });

      setVideo(response.data.results[0]?.key);
      console.log(response.data.results[0]);
      console.log(video);
    } catch (err) {
      console.log(err);
    }
  };

  const redirectToYoutube = () => {
    // histroy.push(`https://www.youtube.com/watch?v=aYSy8guUUV0`)
    // <Redirect to={`https://www.youtube.com/watch?v=${video}`} />
  };

  useEffect(() => {
    fetchDetails();
    fetchVideo();
  }, []);
  return (
    <div className="h-screen  py-10 flex justify-center it">
      {movie && (
        <div className=" lg:max-w-2xl lx:max-w-3xl md:max-w-xl sm:max-w-lg  rounded-lg shadow-xl bg-gray-800">
          <div className="">
            <img
              className="object-center object-cover w-full  rounded-t-lg"
              src={
                movie.backdrop_path
                  ? `${IMG_500}/${movie.backdrop_path}`
                  : unavailable_image
              }
              alt={movie.name || movie.title}
            />
          </div>
          <div className="text-center">
            <h1 className="lg:text-2xl text-white font-bold pl-4 pt-4">
              {title}
            </h1>
            <p className="text-white mt-8 text-justify px-3">{overview}</p>
            <a href={`${youtube}${video}`}
              // onClick={redirectToYoutube}
              className="text-white font-semibold  bg-red-500 py-2 mt-6 w-full rounded-b-lg"
            >
              watch Trailer
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePageMovie;
