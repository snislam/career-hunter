import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Reviews />
        </div>
    );
};

export default Home;