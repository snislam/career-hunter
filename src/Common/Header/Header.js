import logo from '../../logo.png';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <h1>Header</h1>
        </div>
    );
};

export default Header;