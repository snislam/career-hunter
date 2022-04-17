import React from 'react';

const Service = ({ service }) => {
    const { name, img, price, description } = service;
    return (
        <div className='border w-[350px] shadow-lg'>
            <img src={img} alt="" />
            <div className='p-5'>
                <h3 className='text-2xl font-semibold'>{name}</h3>
                <p className='font-semibold py-5'>Price: ${price}</p>
                <p className='text-gray-600 pb-3'>{description}</p>
                <button className='hover:bg-blue-600 bg-blue-500 text-white py-2 px-7'>Book Now</button>
            </div>
        </div>
    );
};

export default Service;