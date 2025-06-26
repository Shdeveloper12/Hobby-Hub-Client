import React from 'react';
import { Link } from 'react-router';

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
                {/* See Details */}
                <div className="card-actions">
                    <button className="btn btn-primary"><Link to={`/groupdetails/${hobby._id}`}>See Details</Link></button>
                </div>  

            </div>
        </div>
);

export default PopularHobbyCard;