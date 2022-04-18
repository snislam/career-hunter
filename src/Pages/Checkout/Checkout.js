import React from 'react';
import { useParams } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const params = useParams();
    return (
        <div className='flex justify-center items-center w-full h-[50vh] text-center'>
            <div className='border shadow-xl p-10 w-4/5 md:w-2/5'>
                <h2 className='text-3xl text-center font-semibold text-blue-600'>Checkout</h2>
                <p className='text-slate-800 text-lg mt-5'>Thank you for choosing my service (Course Code: {params.courseCode})</p>
                <button className='bg-blue-500 hover:bg-blue-600 duration-700 py-2 px-10 text-slate-200 mt-5'>Checkout for payment.</button>
            </div>
        </div>
    );
};

export default Checkout;