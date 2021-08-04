/* eslint-disable react/jsx-no-target-blank */
//? import React Hooks
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//? Import Axios 
import axios from "axios";
//? Import configs
import { IMG_500, unavailable_image, youtube } from "./Config/config";
//? Import react-icons
import { ImPlay } from "react-icons/im";
import { MdRecentActors, MdLocalMovies, MdLanguage ,MdAccessTime,MdPerson} from "react-icons/md";
import {SiImdb} from 'react-icons/si'
const SinglePageMovie = () => {
  const [movie, setMovie] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [video, setVideo] = useState("");
  const [overview, setOverview] = useState("");
  const [title, steTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [language, setLanguage] = useState("");
  const [average,setAverage] = useState("");
  const [director,setDirector] = useState("")
  const [runtime,setRuntime] = useState('')

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

      const {
        overview,
        original_title,
        genres,
        production_countries,
        tagline,
        spoken_languages,
        vote_average,
        runtime
      } = response.data;
      //* set States
      setMovie(response.data);
      setOverview(overview);
      steTitle(original_title);
      setGenres(genres);
      setProductionCountries(production_countries[0].name);
      setTagline(tagline);
      setLanguage(spoken_languages[0].name);
      setAverage(vote_average)
      setRuntime(runtime)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //? get movie video information
  const fetchVideo = async () => {
    try {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US
            `
        )
        .catch((err) => {
          console.log(err);
        });
      const { results } = response.data;
      const findTrailer = results.filter((r) => r.type === "Trailer");
      setVideo(findTrailer[0].key);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchActors = async () => {
    try {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
        )
        .catch((err) => console.log(err));
      const { cast,crew } = response.data;
      const actors = cast.slice(0, 3);
      
      const director = crew.filter(c => c.job === "Director");
      setActors(actors);
      setDirector(director[0].name)
      
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDetails();
    fetchVideo();
    fetchActors();
  }, []);
  return (
    <div className="h-screen  py-10 flex justify-center ">
      {movie && (
        <div className=" grid lg:grid-cols-3 grid-cols-1 max-w-6xl  text-justify pl-4 bg-gray-800 rounded-lg">
          <div className="text-white">
            <h1 className="lg:text-3xl  font-bold  pt-4">{title}</h1>
            <span className="pr-2 block pt-3">
              Actors:
              {""}
              <MdRecentActors className="inline-block ml-1 text-xl" />
            </span>
            {actors.map((actor) => (
              <span key={actor.id} >{actor.name || actor.original_name},</span>
            ))}
            <span className="block pr-2 pt-3">
              Genre:
              {""}
              <MdLocalMovies className="inline-block ml-1 text-xl" />
            </span>
            {genres.map((genre) => (
              <span className="inline-block">{genre.name},</span>
            ))}

            <span className="inline-block pt-3">
              Language: <MdLanguage className="inline-block text-xl" /> {language}
            </span>
            <span className="inline-block pt-3 ">
              Production: <MdPerson className='inline-block text-xl' /> {""}
              {productionCountries}
            </span>
            <span className='inline-block pt-3'>
              Director:  <MdPerson className='inline-block text-xl' /> {director}
            </span>
            <span className='block pt-3'>
              Runtime: <MdAccessTime className="inline-block text-xl" />  {runtime}
            </span>
            <div className=" pt-6 ">
              <a
                href={`${youtube}${video}`}
                target="_blank"
                className="text-white font-semibold bg-red-600 rounded-lg px-4 py-1 "
              >
                Watch Trailer <ImPlay className="inline-block" />
              </a>
            </div>
          </div>
          <div className="order-first text-justify mt-8  px-3">
          <span className='text-white text-xl'><SiImdb className='inline-block text-2xl mr-2 text-yellow-500  ' />{average}</span>
            <p className="text-white  pt-3 ">{overview}</p>
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
