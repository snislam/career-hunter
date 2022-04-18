import logo from '../../logo.png';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='sticky top-0 bg-white z-10'>
            <nav className='flex justify-between items-center px-20 py-5 shadow'>
                <img src={logo} alt="" />
                <menu>
                    <Link className='hover:text-blue-600' to='/'>Home</Link>
                    <Link className='hover:text-blue-600' to='/about'>About Me</Link>
                    <Link className='hover:text-blue-600' to='/contact'>Contact</Link>
                    {
                        user ?
                            <a className='hover:text-blue-600 cursor-pointer' onClick={() => signOut(auth)}>Signout</a>
                            :
                            <Link className='hover:text-blue-600' to='/login'>Login</Link>}
                </menu>
            </nav>
        </div>
    );
};

export default Header;