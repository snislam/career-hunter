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
                <a href="/"><img src={logo} alt="" /></a>
                <menu>
                    <Link className='hover:text-blue-600' to='/'>Home</Link>
                    <Link className='hover:text-blue-600' to='/about'>About Me</Link>
                    <Link className='hover:text-blue-600' to='/blogs'>Blog</Link>
                    <Link className='hover:text-blue-600' to='/contact'>Contact</Link>
                    {
                        user ?
                            <button className='hover:text-blue-600 font-semibold ml-[20px] cursor-pointer' onClick={() => signOut(auth)}>Signout</button>
                            :
                            <Link className='hover:text-blue-600' to='/login'>Login</Link>}
                </menu>
            </nav>
        </div>
    );
};

export default Header;