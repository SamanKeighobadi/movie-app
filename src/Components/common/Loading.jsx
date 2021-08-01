import React from 'react';
import {GridLoader}  from "react-spinners"
const Loading = () => {
    return (
        <div>
            <GridLoader size={120} margin={2} />
        </div>
    );
};

export default Loading;