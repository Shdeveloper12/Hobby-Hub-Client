import React from 'react';

const PopularHobbyCard = ({ hobby }) => (
  <div className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10 ">
                <img
                    src={hobby.imageurl}
                    alt="Shoes"
                    className="rounded-md w-100" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg "><span className='font-bold primary'>Group Name:</span> {hobby.groupname}</h2>
                <p className='text-sm font-semibold'>Category: {hobby.category}</p>
                <p className='text-sm font-semibold'>Members: {hobby.member}</p>

            </div>
        </div>
);

export default PopularHobbyCard;