import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const MailLayouts = ({children}) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MailLayouts;