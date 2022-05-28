import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Parts from '../Parts/Parts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Parts></Parts>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;