import React from 'react';
import {IMG_300} from './Config/config'
const MovieCart = ({title,image,date}) => {
    return (
        <div className='bg-gray-800 rounded shadow-lg cursor-pointer '>
            <div>
                <img className='rounded-t w-full max-w-md' src={`${IMG_300}${image}`} alt={title}  />
            </div> 
            <div className='text-white px-2 py-3'>
                <h1>{title}</h1>
                <span> Release Date: {date ? date : <p className="inline-block">Coming Soon</p>}</span>
            </div>
        </div>
    );
};

export default MovieCart;