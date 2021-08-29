import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IMG_300 } from '../Config/config';

const TvCart = ({title,image,date,tv_id}) => {
    return (
        <Link to={`/single-tv/${tv_id}`} >
        <div className='bg-gray-800 rounded shadow-lg cursor-pointer mb-5 '>
            <div>
                {/* <ShowImage image={image} /> */}
                <img src={`${IMG_300}${image}`} alt={title} />
            </div> 
            <div className='text-white px-2 py-3'>
                <h1>{title}</h1>
                <span> Release Date: {date ? date : <p className="inline-block">Coming Soon</p>}</span>
            </div>
        </div>
        </Link>
    );
};

TvCart.prototype = {
    title: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    tv_id: PropTypes.number
}

export default TvCart;