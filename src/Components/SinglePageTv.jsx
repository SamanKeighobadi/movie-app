/* eslint-disable react/jsx-no-target-blank */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//? Import configs
import { IMG_500, unavailable_image, youtube } from "./Config/config";
//? Import react-icons
import { ImPlay } from "react-icons/im";
import {
  MdRecentActors,
  MdLocalMovies,
  MdLanguage,
  MdAccessTime,
  MdPerson,
} from "react-icons/md";
import { SiImdb } from "react-icons/si";
import { Helmet } from "react-helmet";
const SinglePageTv = () => {
  const [tvShow, setTvShow] = useState([]);
  const [productionCountries, setProductionCountries] = useState([]);
  const [actors, setActors] = useState([]);
  const [genres, setGenres] = useState([]);
  const [video, setVideo] = useState("");
  const [overview, setOverview] = useState("");
  const [title, steTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [average, setAverage] = useState("");
  const [director, setDirector] = useState("");
  const [runtime, setRuntime] = useState("");
  const [numberOfSeasons,setNumberOfSeasons] = useState(0)
  const [loading, setLoading] = useState(true);
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
  const { tvId } = useParams();
  const fetchTvShowDetails = async () => {
    try {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=en-US`
        )
        .catch((err) => console.log(err));

      //* Destructure from response.data
      const {
        name,
        overview,
        vote_average,
        genres,
        spoken_languages,
        production_countries,
        episode_run_time,
        number_of_seasons
      } = response.data;

      console.log(response.data)

      //* set states
      steTitle(name);
      setOverview(overview);
      setAverage(vote_average);
      setTvShow(response.data);
      setNumberOfSeasons(number_of_seasons)
      setGenres(genres);
      setRuntime(episode_run_time[0]);
      setLanguage(spoken_languages[0].name);
      setProductionCountries(production_countries[0].name);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchTvVideo = async () => {
    try {
      const response = await axios
        .get(
          `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`
        )
        .catch((err) => console.log(err));

        // console.log(response.data)
      //* get the last season key video
      setVideo(response.data.results[0]?.key);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchActors  = async() => {
      try {
          const response = await axios.get(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${API_KEY}&language=en-US`)
          .catch(err => console.log(err))

          const {cast,crew} = response.data;
          const actors = cast.slice(0,3);
          setActors(actors)

        //   console.log(response.data)
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(() => {
    fetchTvShowDetails();
    fetchTvVideo();
    fetchActors();
  }, []);
  return (
    <div className="h-screen  py-10 flex justify-center ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      {tvShow && (
        <div className=" grid lg:grid-cols-3 grid-cols-1 max-w-6xl  text-justify pl-4 bg-gray-800 rounded-lg">
          {/* Tv Show Details */}
          <div className="text-white text-justify">
            <h1 className="lg:text-3xl  font-bold  pt-4">{title}</h1>
            <span className="pr-2 block pt-3">
              <MdRecentActors className="inline-block ml-1 text-xl" />
              Actors:
              {""}
            </span>
            {actors.map((actor) => (
              <span key={actor.id}>{actor.name || actor.original_name},</span>
            ))}
            <span className="block pr-2 pt-3">
              <MdLocalMovies className="inline-block ml-1 text-xl" />
              Genre:
              {""}
            </span>
            {genres.map((genre) => (
              <span className="inline-block">{genre.name},</span>
            ))}

            <span className="block pt-3">
              <MdLanguage className="inline-block text-xl" /> Language:{" "}
              {language}
            </span>
            <span className="inline-block pt-3 ">
              <MdPerson className="inline-block text-xl" /> Production: {""}
              {productionCountries}
            </span>
            <span className='block pt-3'>
            <MdPerson className="inline-block text-xl" />  Number Of Seasons: {numberOfSeasons} 
            </span>
            <span className="block pt-3">
              <MdAccessTime className="inline-block text-xl" /> Runtime:{" "}
              {runtime}
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
          {/* Overview and score of Tv */}
          <div className="order-first text-justify mt-8  px-3">
            <span className="text-white text-xl">
              <SiImdb className="inline-block text-2xl mr-2 text-yellow-500  " />
              {average}
            </span>
            <p className="text-white  pt-3 ">{overview}</p>
          </div>
          {/* Movie Poster  */}
          <div className="">
            <img
              className="lg:hidden"
              src={
                tvShow.backdrop_path
                  ? `${IMG_500}/${tvShow.backdrop_path}`
                  : unavailable_image
              }
              alt={tvShow.name || tvShow.title}
            />
            <img
              className="lg:visible h-full rounded-r-lg  "
              src={
                tvShow.backdrop_path
                  ? `${IMG_500}/${tvShow.poster_path}`
                  : unavailable_image
              }
              alt={tvShow.name || tvShow.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePageTv;
