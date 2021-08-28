import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import MovieCart from "./MovieCart";

const MoviePagination = ({ movies }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const moviesPerPage = 8;
  const pageVisited = pageNumber * moviesPerPage;
  const pageCount = Math.ceil(movies.length / moviesPerPage);

  const displayMovies = movies.slice(pageVisited, pageVisited + moviesPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="text-center flex justify-center">
        <div className="grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2  gap-4">
          {displayMovies.map((movie, index) => (
            <div key={index}>
              <MovieCart
                title={movie.title}
                image={movie.poster_path}
                date={movie.release_date}
                movie_id={movie.id}
              />
            </div>
          ))}
        </div>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginate"
        pageLinkClassName="px-4"
        disabledClassName="opacity-40 cursor-move"
        className=''
      />
    </div>
  );
};

export default MoviePagination;
