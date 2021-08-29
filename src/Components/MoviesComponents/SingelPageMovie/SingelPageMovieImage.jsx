import React from 'react';
import { IMG_500, unavailable_image } from '../../Config/config';

const SingelPageMovieImage = ({image,title}) => {
    return (
        <div>
            <img
                  className=" h-full rounded-r-lg  "
                  src={
                    image.backdrop_path
                      ? `${IMG_500}/${image.poster_path}`
                      : unavailable_image
                  }
                  alt={title}
                />
        </div>
    );
};

export default SingelPageMovieImage;