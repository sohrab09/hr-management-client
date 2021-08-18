import React from 'react';
import Footer from '../../SharedComponents/Footer/Footer';
import Navbar from '../../SharedComponents/Navbar/Navbar';
import TopNav from '../../SharedComponents/TopNav/TopNav';
import AboutUs from '../About Us/AboutUs';
import Header from '../Header/Header';

const Home = () => {
    return (
        <>
            <TopNav />
            <Navbar />
            <Header />
            <AboutUs />
            <Footer />
        </>
    );
};

export default Home;