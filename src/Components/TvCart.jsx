import React from 'react';
import { Link } from 'react-router-dom';
import ShowImage from './ShowImage';

const TvCart = ({title,image,date,tv_id}) => {
    return (
        <Link to={`/single-tv/${tv_id}`} >
        <div className='bg-gray-800 rounded shadow-lg cursor-pointer mb-5 '>
            <div>
                <ShowImage image={image} />
            </div> 
            <div className='text-white px-2 py-3'>
                <h1>{title}</h1>
                <span> Release Date: {date ? date : <p className="inline-block">Coming Soon</p>}</span>
            </div>
        </div>
        </Link>
    );
};

export default TvCart;