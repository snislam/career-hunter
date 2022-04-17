import logo from '../../logo.png';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white z-10'>
            <nav className='flex justify-between items-center px-20 py-5 shadow'>
                <img src={logo} alt="" />
                <menu>
                    <Link className='hover:text-blue-600' to='/'>Home</Link>
                    <Link className='hover:text-blue-600' to='/login'>Login</Link>
                </menu>
            </nav>
        </div>
    );
};

export default Header;