import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='bg-slate-800 pt-14 text-slate-400'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto px-10'>
                <div>
                    <h3 className='text-2xl font-medium text-slate-200 pb-4'>My Vission</h3>
                    <p>This Career Hunter Program will give you the perfect matching for bringing your dream position. My goal is to provide the right path for the destination.</p>
                </div>
                <div>
                    <h3 className='text-2xl font-medium text-slate-200 pb-4'>Important Links</h3>
                    <div>
                        <li>Services</li>
                        <li>About Me</li>
                        <li>Contact</li>
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl font-medium text-slate-200 pb-4'>Contact Info</h3>
                    <p>Email: najmulbge17@gmail.com</p>
                    <p>Mobile: 01303-164150</p>
                </div>
            </div>
            <p className='text-center mt-10 bg-slate-900 py-2'>Copyright &copy; Najmul {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;