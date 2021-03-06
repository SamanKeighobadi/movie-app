/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { ImPlay } from "react-icons/im";
import {
  MdAccessTime,
  MdLanguage,
  MdLocalMovies,
  MdPerson,
  MdRecentActors,
} from "react-icons/md";
import { youtube } from "../../Config/config";
import PropTypes from 'prop-types'

const SingelPageTvDetails = ({
  title,
  actors,
  genres,
  language,
  productionCountries,
  numberOfSeasons,
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
      <span className="block pt-3">
        <MdPerson className="inline-block text-xl" /> Number Of Seasons:{" "}
        {numberOfSeasons}
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

//? PropTypes
SingelPageTvDetails.propTypes = {
  title: PropTypes.string,
  actors: PropTypes.array,
  genres: PropTypes.array,
  language: PropTypes.string,
  productionCountries: PropTypes.string,
  director: PropTypes.string,
  runtime: PropTypes.number,
  video: PropTypes.string,
};

export default SingelPageTvDetails;
