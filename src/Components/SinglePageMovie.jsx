/* eslint-disable react/jsx-no-target-blank */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IMG_500, unavailable_image, youtube } from "./Config/config";
import { useParams } from "react-router-dom";
import {ImPlay} from 'react-icons/im'
const SinglePageMovie = () => {
  const [video, setVideo] = useState("");
  const [movie, setMovie] = useState([]);
  const [overview, setOverview] = useState("");
  const [title, steTitle] = useState("");
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
  const { movieId } = useParams();
  //? get Movie Details by id
  const fetchDetails = async () => {
    try {
      const response = await axios
        .get(
          `
          https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        )
        .catch((err) => console.log(err));

      const { overview, original_title } = response.data;
      //* set States
      setMovie(response.data);
      setOverview(overview);
      steTitle(original_title);
      // console.log("fetchDetails", response.data);
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
        const {results} = response.data;
      const findTrailer =results.filter(r => r.type === "Trailer"); 
      setVideo(findTrailer[0].key);
      // console.log(response.data.results);
      console.log( "Videos state:", video);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetails();
    fetchVideo();
  }, []);
  return (
    <div className="h-screen  py-10 flex justify-center ">
      {movie && (
        <div className=" grid lg:grid-cols-2 grid-cols-1 max-w-3xl bg-gray-800 rounded-lg">
          <div className="">
            <h1 className="lg:text-3xl text-white font-bold pl-4 pt-4">
              {title}
            </h1>
            <p className="text-white   mt-8 text-justify px-3">{overview}</p>
            <div className='pl-4 pt-6 '>
              <a
                href={`${youtube}${video}`}
                className="text-white font-semibold bg-red-600 rounded-lg px-4 py-1 "
              >
                Trailer <ImPlay className='inline-block' />
              </a>

            </div>
          </div>
          <div className="">
            <img
              className="lg:hidden"
              src={
                movie.backdrop_path
                  ? `${IMG_500}/${movie.backdrop_path}`
                  : unavailable_image
              }
              alt={movie.name || movie.title}
            />
            <img
              className="lg:visible h-full rounded-r-lg  "
              src={
                movie.backdrop_path
                  ? `${IMG_500}/${movie.poster_path}`
                  : unavailable_image
              }
              alt={movie.name || movie.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePageMovie;
