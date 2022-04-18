import React, { useEffect, useState } from 'react';
import './Register.css';
import google from '../../../images/google.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [signInWithGoogle, googleUser, googleLoading, googleErr] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (error || googleErr) {
            setErr(error || googleErr);
        }
    }, [error, googleErr])

    if (loading || googleLoading) {
        return (
            <div className='flex justify-center items-center w-full h-screen'>
                <p className='text-5xl font-semibold'>Loading.......</p>
            </div>
        )
    }

    if (user || googleUser) {
        navigate('/');
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSubmitRegister = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }

    const handleGoogleLogin = e => {
        signInWithGoogle();
    }

    return (
        <div className='flex justify-center items-center my-5 w-full h-screen'>
            <div className='border mx-auto w-3/5 md:w-2/5 relative shadow-lg p-10'>
                <h2 className='text-3xl font-semibold mb-5 text-center text-blue-700'>Please Register</h2>
                <form onSubmit={handleSubmitRegister}>
                    <label className='font-semibold my-3' htmlFor="name">Enter your name</label>
                    <input className='border block w-full py-2 px-3' type="text" name="name" id="name" placeholder='Enter your name' required />

                    <label className='font-semibold my-3' htmlFor="email">Email Address</label>
                    <input onBlur={handleEmail} className='border block w-full py-2 px-3' type="email" name="email" id="email" placeholder='Email address' required />

                    <label className='font-semibold my-3' htmlFor="password">Password</label>
                    <input onBlur={handlePassword} className='border block w-full py-2 px-3' type="password" name="password" id="password" placeholder='Password' required />

                    <p className='text-red-500 mt-5'>{err?.message}</p>

                    <p className='mt-5'>New in Career Hunter? <Link className='text-blue-500' to='/login' >Login Now</Link></p>

                    <input className='bg-blue-400 hover:bg-blue-600 py-2 px-5 mt-5 block text-center w-full duration-700' type="submit" value="Register" />
                </form>
                <div className='flex justify-center items-center my-5'>
                    <div className='divider'></div>
                    <div className='px-3'>OR</div>
                    <div className='divider'></div>
                </div>
                <div className="social-login">
                    <button onClick={handleGoogleLogin} className='bg-white hover:bg-slate-100 duration-700 py-2 px-5 border-2 flex justify-center items-center w-full'>
                        <img className='w-[30px] mr-4' src={google} alt="" />
                        <span>Continue With Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;