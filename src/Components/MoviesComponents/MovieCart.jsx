import React from 'react';
import {Link} from 'react-router-dom'
import ProptTypes from 'prop-types'
import { IMG_300 } from "../Config/config";
const MovieCart = ({title,image,date,movie_id}) => {

    // const {movieId} = useParams()

    return (
        <Link to={`/single-movie/${movie_id}`} >
        <div className='bg-gray-800 rounded shadow-lg cursor-pointer mb-5 '>
            <div>
                {/* <ShowImage image={image} /> */}
                <img className='rounded-t' src={`${IMG_300}${image}`} alt={title} />
            </div> 
            <div className='text-white px-2 py-3'>
                <h1>{title}</h1>
                <span> Release Date: {date ? date : <p className="inline-block">Coming Soon</p>}</span>
            </div>
        </div>
        </Link>
    );
};

MovieCart.propTypes = {
    title: ProptTypes.string,
    image: ProptTypes.string,
    movie_id:ProptTypes.number,
    date:ProptTypes.string
}

export default MovieCart;