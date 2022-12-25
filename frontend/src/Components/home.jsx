import React from 'react';
import {useState} from 'react';
import '../Styles/main.css'
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './carousel';
import RoomDetails from './Rooms';
import Footer from './footer';
import About from './about';
import Reviews from './reviews';
import PreLoader from './preloader';

function Home() {

    const [loader, setLoader] = useState(false);

    if (loader == false) {
        setTimeout(() => {
            setLoader(true);
        }, 6000);
        return (
            <PreLoader />
        )
    }

    return (
        <div className='home'>
            <NavBar />
            <Carousel />
            <About />
            <RoomDetails />
            <Reviews />
            <Footer />
        </div>
    );
}

export default Home;