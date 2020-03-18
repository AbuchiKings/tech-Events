import React from 'react';
import Header from '../components/Header';
import Offers from '../components/Offers';
import Footer from './../components/Footer';
import FeaturedEvents from './../components/FeaturedEvents';


const Home = () => {
    return (
        <>
            <Header></Header>
            <FeaturedEvents />
            <Offers />
            <Footer />
        </>
    );
}

export default Home;
