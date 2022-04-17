import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { img, name, Review, Rating } = review;

    return (
        <div className='border shadow w-[300px] review-card relative p-5 my-10 '>
            <img src={img} alt="" />
            <div className='mt-24 text-center'>
                <p className='font-bold text-orange-500 mt-7 mb-3 '>Ratings: {Rating}</p>
                <h3 className='font-semibold text-2xl mb-3'>{name}</h3>
                <p>{Review}</p>
            </div>
        </div>
    );
};

export default Review;