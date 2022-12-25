import React from 'react';
import '../Styles/main.css'
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './carousel';
import RoomDetails from './Rooms';
import Footer from './footer';
import About from './about';
import Reviews from './reviews';

function Home() {
    return (
        <>
            <NavBar />
            <Carousel />
            <About />
            <RoomDetails />
            <Reviews />
            <Footer />
        </>
    );
}

export default Home;