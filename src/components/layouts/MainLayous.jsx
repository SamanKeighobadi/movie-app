import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';

const MainLayous = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer text={'saman keighobadi'} />
        </div>
    );
};

export default MainLayous;