import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Parts from '../Parts/Parts';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <BusinessSummary></BusinessSummary>
            <Parts></Parts>
            <Footer></Footer>
        </div>
    );
};

export default Home;