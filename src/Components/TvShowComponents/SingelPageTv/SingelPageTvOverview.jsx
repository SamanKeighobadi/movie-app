import React from 'react';
import { SiImdb } from 'react-icons/si';
import PropTypes from 'prop-types'

const SingelPageTvOverview = ({average,overview}) => {
    return (
        <div>
            <span className="text-white text-xl">
                  <SiImdb className="inline-block text-2xl mr-2 text-yellow-500  " />
                  {average}
                </span>
                <p className="text-white  pt-3 ">{overview}</p>
        </div>
    );
};

//? PropTypes
SingelPageTvOverview.propTypes = {
    average:PropTypes.number,
    overview:PropTypes.string
}

export default SingelPageTvOverview;