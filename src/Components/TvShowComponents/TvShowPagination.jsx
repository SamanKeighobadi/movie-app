import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import PropTypes from "prop-types";
import TvCart from "./TvCart";

const TvShowPagination = ({ tvShows, tvShowsSearch }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const tvShowPerPage = 8;
  const pageVisited = pageNumber * tvShowPerPage;
  const pageCount = Math.ceil(tvShows.length / tvShowPerPage);

  const tvShowsContainer = [tvShows, tvShowsSearch];

  if (tvShowsContainer[1].length !== 0) {
    tvShowsContainer.shift();
  }

  console.log(tvShowsContainer)
  console.log(tvShows)

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
                name={show.name}
                image={show.poster_path}
                date={show.first_air_date}
                tv_id={show.id}
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

//? PropTypes
TvShowPagination.propTypes = {
  tvShows: PropTypes.array,
};

export default TvShowPagination;
