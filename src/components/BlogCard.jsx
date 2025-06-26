import React from 'react';

const BlogCard = () => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Blog"
                    className="rounded-md w-100"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg"><span className='font-bold primary'>Blog Title:</span> Sample Blog Title</h2>
                <p className='text-sm font-semibold'>Author: John Doe</p>
                <p className='text-sm font-semibold'>Published: Jan 1, 2023</p>
            </div>
        </div>
    );
};

export default BlogCard;