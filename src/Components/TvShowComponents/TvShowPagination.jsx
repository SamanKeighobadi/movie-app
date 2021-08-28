import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import TvCart from "./TvCart";

const TvShowPagination = ({ tvShows }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const tvShowPerPage = 10;
  const pageVisited = pageNumber * tvShowPerPage;
  const pageCount = Math.ceil(tvShows.length / tvShowPerPage);

  const displayTvShows = tvShows.slice(
    pageVisited,
    pageVisited + tvShowPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className="text-center flex justify-center">
        <div className="grid lg:grid-cols-4 mg:grid-cols-3 sm:grid-cols-2  gap-4 ">
          {displayTvShows.map((show, index) => (
            <div key={index}>
              <TvCart
                title={show.title}
                image={show.poster_path}
                date={show.release_date}
                movie_id={show.id}
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
      />
    </div>
  );
};

export default TvShowPagination;
