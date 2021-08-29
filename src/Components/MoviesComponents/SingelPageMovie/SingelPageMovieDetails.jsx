/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import {
  MdAccessTime,
  MdLanguage,
  MdLocalMovies,
  MdPerson,
  MdRecentActors,
} from "react-icons/md";
import { ImPlay } from "react-icons/im";
import { youtube } from "../../Config/config";

const SingelPageMovieDetails = ({
  title,
  actors,
  genres,
  language,
  productionCountries,
  director,
  runtime,
  video,
}) => {
  return (
    <div>
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
        <MdLanguage className="inline-block text-xl" /> Language: {language}
      </span>
      <span className="inline-block pt-3 ">
        <MdPerson className="inline-block text-xl" /> Production: {""}
        {productionCountries}
      </span>
      <span className="inline-block pt-3">
        <MdPerson className="inline-block text-xl" /> Director: {director}
      </span>
      <span className="block pt-3">
        <MdAccessTime className="inline-block text-xl" /> Runtime: {runtime}
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
  );
};

export default SingelPageMovieDetails;
