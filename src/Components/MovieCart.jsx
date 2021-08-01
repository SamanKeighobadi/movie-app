import React from 'react';
import {IMG_300} from './Config/config'
import {Link} from 'react-router-dom'
const MovieCart = ({title,image,date}) => {
    return (
        <Link to="/single-movie" >
        <div className='bg-gray-800 rounded shadow-lg cursor-pointer '>
            <div>
                <img className='rounded-t w-full max-w-md' src={`${IMG_300}${image}`} alt={title}  />
            </div> 
            <div className='text-white px-2 py-3'>
                <h1>{title}</h1>
                <span> Release Date: {date ? date : <p className="inline-block">Coming Soon</p>}</span>
            </div>
        </div>
        </Link>
    );
};

export default MovieCart;