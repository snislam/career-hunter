import React from 'react';
import './About.css';
import profileImg from '../../images/service-1.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 container mx-auto'>
                <div className=' border bg-teal-400 p-5 flex flex-col my-10 w-4/5 mx-auto'>
                    <img className='w-[120px] h-[120px] rounded-full block mx-auto' src={profileImg} alt="" />
                    <h2 className='text-slate-800 text-2xl font-bold mt-5'>I am <br /> Najmul Islam</h2>
                    <p className='text-sm my-5 font-medium'>Front-end web developer</p>
                    <p>Hi I am a passionate worker in the field of web. It is my passion to get tyhe core fun of the web. Yes core fun with all the technologies yet.</p>
                </div>
                <div className='flex flex-col border shadow-inner mt-10 mb-10 w-4/5 mx-auto p-5 '>
                    <h2 className='text-3xl text-blue-600 font-semibold'>About me</h2>
                    <p className='text-slate-600 font-normal py-5'>I am studying in Life Science faculty but my passion is programming. That's why I am here to explore web and the web world. </p>
                    <p className='text-slate-600 font-normal py-5'>For now, my goal is to become a web back-end based full stack web developer and working in a IT farm in USA as a web developer. I know it's not easy but I will do it. </p>
                    <div>
                        <Link className='bg-blue-500 hover:bg-blue-700 duration-1000 py-2 px-10 inline-block' to='/contact'>Contact me</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;