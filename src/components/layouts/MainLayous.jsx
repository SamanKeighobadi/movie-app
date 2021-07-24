import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

const MainLayous = ({children,searchMovie}) => {
    return (
        <div>
            <Header movies={searchMovie} />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayous;