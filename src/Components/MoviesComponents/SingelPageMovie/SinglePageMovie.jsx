//? import React Hooks
import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Loading from "../../common/Loading";
//? Import  Custom Hooks
import useMovieDetails from "../../CustomHooks/SingelPageHooks/Movies/useMovieDetails";
import useMovieTrailer from "../../CustomHooks/SingelPageHooks/Movies/useMovieTrailer";
import useFetchActors from "../../CustomHooks/SingelPageHooks/Movies/useFetchActors";
//? Import Components
import SingelPageMovieImage from "./SingelPageMovieImage";
import SingelPageMovieOverview from "./SingelPageMovieOverview";
import SingelPageMovieDetails from "./SingelPageMovieDetails";

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
    loading,
  } = useMovieDetails(movieDetailsUrl);
  const { video } = useMovieTrailer(movieVideosUrl);
  const { actors, director } = useFetchActors(movieActorsUrl);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-3/6  py-10 flex justify-center ">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
          </Helmet>
          {movie && (
            <div className=" grid lg:grid-cols-3 grid-cols-1 max-w-6xl  text-justify pl-4 bg-gray-800 rounded-lg">
              {/* Movie Details */}
              <div className="text-white text-justify lg:pb-0  pb-4">
                <SingelPageMovieDetails
                  title={title}
                  actors={actors}
                  video={video}
                  runtime={runtime}
                  director={director}
                  genres={genres}
                  language={language}
                  productionCountries={productionCountries}
                />
              </div>
              {/* Overview and score of movie */}
              <div className="order-first text-justify mt-8  px-3">
                <SingelPageMovieOverview
                  overview={overview}
                  average={average}
                />
              </div>
              {/* Movie Poster  */}
              <div>
                <SingelPageMovieImage image={movie} title={movie.title} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SinglePageMovie;
