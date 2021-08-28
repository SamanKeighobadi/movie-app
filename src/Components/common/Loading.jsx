import React from 'react';
import {HashLoader}  from "react-spinners"
const Loading = () => {
    return (
        <div className="h-3/6 text-center flex content-center justify-center  items-center">
            <HashLoader  size={80} color="#ffffff"  />
        </div>
    );
};

export default Loading;