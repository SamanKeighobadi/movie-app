import axios from 'axios';
import React from 'react'
import MainLayous from './layouts/MainLayous';


const SingleMoviePage = ({image,title}) => {

    return (
        <MainLayous>
           <div className="h-screen">
                <div>
                    <img src={image} alt={title} />
                </div>
           </div>
        </MainLayous>
    )
}

export default SingleMoviePage;