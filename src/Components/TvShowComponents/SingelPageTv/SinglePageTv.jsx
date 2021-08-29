/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../common/Loading";
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
//? Import Custom hooks
import useTvShowDetails from "../../CustomHooks/SingelPageHooks/tvShows/useTvShowDetails";
import useFetchActors from "../../CustomHooks/SingelPageHooks/Movies/useFetchActors";
import useTvShowTrailer from "../../CustomHooks/SingelPageHooks/tvShows/useTvShowTrailer";
import SingelPageTvImage from "./SingelPageTvImage";
import SingelPageTvOverview from "./SingelPageTvOverview";
import SingelPageTvDetails from "./SingelPageTvDetails";

const SinglePageTv = () => {
  const API_KEY = "3c9ca04534e9dd437620d18a830e8e1c";
  const { tvId } = useParams();
  const tvShowDetailsUrl = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}&language=en-US`;
  const tvShowVideoUrl = `https://api.themoviedb.org/3/tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`;
  const tvShowActorsUrl = `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${API_KEY}&language=en-US`;

  //? Custom hooks
  const {
    title,
    tvShow,
    genres,
    productionCountries,
    overview,
    language,
    average,
    runtime,
    numberOfSeasons,
    loading,
  } = useTvShowDetails(tvShowDetailsUrl);
  const { actors } = useFetchActors(tvShowActorsUrl);
  const { video } = useTvShowTrailer(tvShowVideoUrl);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-screen  py-10 flex justify-center ">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
          </Helmet>
          {tvShow && (
            <div className=" grid lg:grid-cols-3 grid-cols-1 max-w-6xl  text-justify pl-4 bg-gray-800 rounded-lg">
              {/* Tv Show Details */}
              <div className="text-white text-justify">
                <SingelPageTvDetails
                  title={title}
                  actors={actors}
                  video={video}
                  runtime={runtime}
                  productionCountries={productionCountries}
                  numberOfSeasons={numberOfSeasons}
                  language={language}
                  genres={genres}
                />
              </div>
              {/* Overview and score of Tv */}
              <div className="order-first text-justify mt-8  px-3">
                <SingelPageTvOverview average={average} overview={overview} />
              </div>
              {/* Movie Poster  */}
              <div>
                <SingelPageTvImage image={tvShow} title={title} />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SinglePageTv;
