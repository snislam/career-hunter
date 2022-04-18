import React from 'react';

const Blog = ({ blog }) => {
    const { question, answer, author } = blog;
    return (
        <div className='border p-10'>
            <h3 className='text-3xl font-semibold mb-5'>{question}</h3>
            <p className='mb-3'><strong>{author}</strong></p>
            <p>{answer}</p>
        </div>
    );
};

export default Blog;