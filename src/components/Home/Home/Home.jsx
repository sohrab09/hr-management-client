import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import AboutUs from '../About Us/AboutUs';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <AboutUs />
            <Footer />
        </>
    );
};

export default Home;