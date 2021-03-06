import React, { useEffect, useState } from 'react';
import './Login.css';
import google from '../../../images/google.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState({ value: '', myError: '' });
    const [password, setPassword] = useState({ value: '', myError: '' });
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    //handle email
    const handleEmail = event => {
        const emailValue = event.target.value
        if (/\S+@\S+\.\S+/.test(emailValue)) {
            setEmail({ value: emailValue, myError: "" });
        } else {
            setEmail({ value: "", myError: "Please Provide a valid Email" });
        }
    }

    //handle password
    const handlePassword = event => {
        const passwordValue = event.target.value
        if (passwordValue.length < 6) {
            setPassword({ value: "", myError: "Password not match" });
        }
        else if (!/(?=.*[A-Z])/.test(passwordValue)) {
            setPassword({
                value: "", myError: "Password not match",
            });
        }
        else {
            setPassword({ value: passwordValue, myError: "" });
        }
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, googleUser, googleLoading, googleErr] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (error || googleErr) {
            setPassword(error);
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
        navigate(from, { replace: true });
    }

    const handleSubmitLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    const handleGoogleLogin = e => {
        signInWithGoogle();
    }

    return (
        <div className='flex justify-center items-center w-full h-[90vh]'>
            <div className='border mx-auto w-3/5 md:w-2/5 relative shadow-lg p-10'>
                <h2 className='text-3xl font-semibold mb-5 text-center text-blue-700'>Please Login</h2>

                <form onSubmit={handleSubmitLogin}>
                    <label className='font-semibold my-3' htmlFor="email">Email Address</label>
                    <input onBlur={handleEmail} className='border block w-full py-2 px-3' type="email" name="email" id="email" placeholder='Email address' required />

                    {email?.myError && <p>{email.myError}</p>}

                    <label className='font-semibold my-3' htmlFor="password">Password</label>
                    <input onBlur={handlePassword} className='border block w-full py-2 px-3' type="password" name="password" id="password" placeholder='Password' required />

                    {password?.myError && <p>{password.myError}</p>}

                    <p className='mt-5'>New in Career Hunter? <Link className='text-blue-500' to='/register' >Register Now</Link></p>

                    {/* <p className='text-red-500'>{err?.message}</p> */}

                    <input className='bg-blue-400 hover:bg-blue-600 py-2 px-5 mt-5 block text-center w-full duration-700 cursor-pointer' type="submit" value="Login" />
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

export default Login;