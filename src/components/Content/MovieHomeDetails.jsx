import React from "react";

const MovieHomeDetails = () => {
  return (
    <div className="">
      <div className="rounded lg:h-96 bg-gray-800 grid lg:grid-cols-2 lg:ml-10">
        <div className="lg:h-full ">
          <img
            src="https://zar-film.top/wp-content/uploads/2021/07/ppiL13JJx2LkyoNb8JM0h7nxYmk-190x282.jpg"
            alt=""
            className='lg:h-full '
          />
          
        </div>
        <div className="lg:py-2">
            <h1 className="text-white">
                Black Window 
            </h1>
            <span className="inline-block">Product Country:</span>
            <p>Unitad State </p>
        </div>
      </div>
    </div>
  );
};

export default MovieHomeDetails;
