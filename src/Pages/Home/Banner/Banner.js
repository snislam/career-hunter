import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className='hero-banner bg-[url("https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80")] bg-no-repeat bg-cover bg-left-bottom'>
            <div className='flex justify-center items-center overlay'>
                <div className="text-info text-center">
                    <h1 className='text-white text-2xl md:text-6xl font-semibold mb-5 font-sans'>Start Designing Your <br /> Dream Career</h1>
                    <p className='text-white text-sm md:text-xl mb-5 font-sans px-10'>During our 30-min. call, we’ll uncover your boldest dreams and biggest barriers and determine whether we’re a good fit to work together.</p>
                    <Link to='/contact' className='hover:bg-blue-700 bg-blue-600 text-white text-lg py-2 px-10'>Book a Session with me</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;