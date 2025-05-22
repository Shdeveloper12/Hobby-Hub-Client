import React from 'react';
import { Link,  } from 'react-router';

const AllGroupCard = ({ allgroup }) => {
    
    const { _id, groupname, imageurl, } = allgroup;

    

    return (
        <div className="card bg-base-100  shadow-xl">
            <figure className="px-10 pt-10 ">
                <img
                    src={imageurl}
                    alt="Shoes"
                    className="rounded-xl w-100" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg "><span className='font-bold primary'>Group Name:</span> {groupname}</h2>

                <div className="card-actions">
                    <button className="btn btn-primary secondary"><Link to={`/groupdetails/${_id}`}>See Details</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default AllGroupCard;