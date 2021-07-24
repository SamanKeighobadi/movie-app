import React from 'react';
import Header from '../common/Header';

const MainLayous = ({children}) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
};

export default MainLayous;