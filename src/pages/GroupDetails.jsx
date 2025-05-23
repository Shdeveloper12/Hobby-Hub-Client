import { PilcrowSquare } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';

const GroupDetails = () => {
    const group = useLoaderData();
    const navigation = useNavigation();
    const [joined, setJoined] = useState(false);

    if (navigation.state === 'loading') {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    if (!group) {
        return <div className="text-center text-red-600 mt-10">Group not found.</div>;
    }

    const {
        _id,
        groupname,
        imageurl,
        name,
        email,
        member,
        date,
        location,
        description,
        category,
    } = group;

    const handleJoinGroup = () => {
        setJoined(true);
    };

    return (
        <div className="p-5">
            <div className="max-w-4xl mx-auto p-10 border-amber-400 shadow-xl rounded-lg my-5 space-y-2">
                <img
                    src={imageurl}
                    alt={groupname}
                    className="w-full h-72 object-cover rounded-lg mb-6"
                />
                <div>
                    <h1 className="text-3xl font-bold mb-4 primary">{groupname}</h1>
                    <p className='secondary'><strong>Organizer:</strong> {name}</p>
                    <p className='secondary'><strong>Email:</strong> {email}</p>
                    <p className='secondary'><strong>Members:</strong> {member}</p>
                    <p className='secondary'><strong>Date:</strong> {date}</p>
                    <p className='secondary'><strong>Location:</strong> {location}</p>
                    <p className='secondary'><strong>Category:</strong> {category}</p>
                    <p className="mt-4 secodary"><strong>Description:</strong> {description}</p>
                </div>

                <div className="mt-6 text-center">
                    {joined ? (
                        <p className="text-green-600 font-semibold primary ml-4">You’ve joined this group!</p>
                    ) : (
                        <button
                            onClick={handleJoinGroup}
                            className="btn btn-success primary"
                        >
                            Join Group
                        </button>
                    )}

                    <Link to={`/updategroupdetails/${_id}`}>
                        <button className="btn btn-outline btn-info ml-4 primary">
                            Update Group Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default GroupDetails;
