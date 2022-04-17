import logo from '../../logo.png';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='flex justify-between items-center px-20 py-5 shadow'>
                <img src={logo} alt="" />
                <menu>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                </menu>
            </nav>
        </div>
    );
};

export default Header;