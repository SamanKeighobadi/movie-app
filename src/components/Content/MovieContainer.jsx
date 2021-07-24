import React from 'react';
import MovieArchive from './MovieArchive';
import MovieHomeDetails from './MovieHomeDetails';

const MovieContainer = () => {
    return (
        <div className="grid lg:grid-cols-2 lg:gap-3 mx-auto">
            <MovieHomeDetails  />
            <MovieArchive  />
        </div>
    );
};

export default MovieContainer;