import React from 'react';

const Baner = ({key,image}) => {
    return (
        <div key={key}>
            <img className=" lg:h-96 lg:w-full object-cover object-center " src={image} alt="Baner Slider" />
        </div>
    );
};

export default Baner;