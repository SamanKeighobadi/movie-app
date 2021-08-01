import React from 'react';
import {PulseLoader}  from "react-spinners"
const Loading = () => {
    return (
        <div className="h-full text-center flex content-center justify-center">
            <PulseLoader className='h-full'  size={30} color="#ffffff" margin={2} />
        </div>
    );
};

export default Loading;