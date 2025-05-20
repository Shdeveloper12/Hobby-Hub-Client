import React from 'react';
import { Link } from 'react-router';

const AllGroupCard = ({ allgroup, allgroups, setGroups }) => {
    const {
        _d, groupname, imageurl,
        name, email, member, date,
        location, description,
        category

    } = allgroup;


    return (
        <div className="card bg-base-100  shadow-sm">
            <figure className="px-10 pt-10 ">
                <img
                    src={imageurl}
                    alt="Shoes"
                    className="rounded-xl w-100" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-lg "><span className='font-bold'>Group Name:</span> {groupname}</h2>
               
                <div className="card-actions">
                    <button className="btn btn-primary"><Link to='/groupdetails'>See Details</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default AllGroupCard;