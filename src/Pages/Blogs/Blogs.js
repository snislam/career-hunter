import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div>
            <h1 className='text-center text-5xl font-bold text-blue-700 py-5'>Welcome to Career Hunter Blogs.</h1>
            <div className='container mx-auto grid grid-flow-row gap-5 my-5'>
                {
                    blogs.map(blog => <Blog blog={blog} key={blog.id} />)
                }
            </div>
        </div>
    );
};

export default Blogs;