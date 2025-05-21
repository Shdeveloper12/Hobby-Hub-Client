import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router';

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
        return <div className="text-center text-red-600">Group not found.</div>;
    }

    const {
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
        <>
        <div className='bg-green-50 p-5'>
             <div className="max-w-4xl mx-auto p-10 bg-white shadow-md rounded-lg my-5 space-y-2">
                <img src={imageurl} alt={groupname} className="w-full h-72 object-cover rounded-lg mb-6" />
                <h1 className="text-3xl font-bold mb-4">{groupname}</h1>
                <p><strong>Organizer:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Members:</strong> {member}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Location:</strong> {location}</p>
                <p><strong>Category:</strong> {category}</p>
                <p className="mt-4"><strong>Description:</strong> {description}</p>

                <div className="mt-6 text-center">
                    {joined ? (
                        <p className="text-green-600 font-semibold">You’ve joined this group!</p>
                    ) : (
                        <button onClick={handleJoinGroup} className="btn btn-success">
                            Join Group
                        </button>
                    )}
                </div>
            </div>
        </div>
           
        </>

    );
};

export default GroupDetails;
