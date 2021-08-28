/* eslint-disable react/jsx-no-target-blank */
//? import React Hooks
import React from "react";
import { useParams } from "react-router-dom";
//? Import configs
import { IMG_500, unavailable_image, youtube } from "../../Config/config";
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
import Loading from '../../common/Loading'
//? Import  Custom Hooks
import useMovieDetails from "../../CustomHooks/SingelPageHooks/Movies/useMovieDetails";
import useMovieTrailer from "../../CustomHooks/SingelPageHooks/Movies/useMovieTrailer";
import useFetchActors from "../../CustomHooks/SingelPageHooks/Movies/useFetchActors";

const SinglePageMovie = () => {


  //? api key and params
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
  const { movieId } = useParams();
  //? bse url
  const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const movieVideosUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  const movieActorsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

  //? Custom Hooks
  const {
    movie,
    language,
    productionCountries,
    overview,
    title,
    average,
    runtime,
    genres,
    loading
  } = useMovieDetails(movieDetailsUrl);
  const {video} = useMovieTrailer(movieVideosUrl)
  const {actors,director} = useFetchActors(movieActorsUrl)

  return (
    <div>
      {loading ? (<Loading />):(<div className="h-screen  py-10 flex justify-center ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      {movie && (
        <div className=" grid lg:grid-cols-3 grid-cols-1 max-w-6xl  text-justify pl-4 bg-gray-800 rounded-lg">
          {/* Movie Details */}
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
            <span className="inline-block pt-3">
              <MdPerson className="inline-block text-xl" /> Director: {director}
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
          {/* Overview and score of movie */}
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
    </div>)}
    </div>
  );
};

export default SinglePageMovie;
