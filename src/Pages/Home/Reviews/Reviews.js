import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import Slider from "react-slick";
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 4,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };


    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])


    return (
        <div className='mt-10'>
            <h2 className='text-center text-5xl font-bold'>Reviews by Clients</h2>
            <Slider {...settings} className='mb-16 mt-10 container p-5 mx-auto'>
                {
                    reviews.map(review => <Review key={review.id} review={review} />)
                }
            </Slider>
        </div>
    );
};

export default Reviews;