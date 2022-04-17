import React from 'react';
import './Login.css';
import google from '../../../images/google.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center w-full h-[90vh]'>
            <div className='border mx-auto w-3/5 md:w-2/5 relative shadow-lg p-10'>
                <h2 className='text-3xl font-semibold mb-5 text-center text-blue-700'>Please Login</h2>
                <form>
                    <label className='font-semibold my-3' htmlFor="email">Email Address</label>
                    <input className='border block w-full py-2 px-3' type="email" name="email" id="email" placeholder='Email address' required />

                    <label className='font-semibold my-3' htmlFor="password">Password</label>
                    <input className='border block w-full py-2 px-3' type="password" name="password" id="password" placeholder='Password' required />

                    <p className='mt-5'>New in Career Hunter? <Link className='text-blue-500' to='/register' >Register Now</Link></p>

                    <input className='bg-blue-400 hover:bg-blue-600 py-2 px-5 mt-5 block text-center w-full duration-700 cursor-pointer' type="submit" value="Login" />
                </form>
                <div className='flex justify-center items-center my-5'>
                    <div className='divider'></div>
                    <div className='px-3'>OR</div>
                    <div className='divider'></div>
                </div>
                <div className="social-login">
                    <button className='bg-white hover:bg-slate-100 duration-700 py-2 px-5 border-2 flex justify-center items-center w-full'>
                        <img className='w-[30px] mr-4' src={google} alt="" />
                        <span>Continue With Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;