import React from 'react';
import {IMG_300} from './Config/config'
const MovieCart = ({title,image,date}) => {
    return (
        <div className='bg-gray-800 rounded '>
            <div>
                <img className='rounded-t w-full' src={`${IMG_300}${image}`} alt={title}  />
            </div> 
            <div className='text-white p-2'>
                <h1>{title}</h1>
                <span> Release Date: {date}</span>
            </div>
        </div>
    );
};

export default MovieCart;