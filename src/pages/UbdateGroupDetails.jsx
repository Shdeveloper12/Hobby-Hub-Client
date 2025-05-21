import React, { use, useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const CreateGroup = () => {
    const {groupname,
        _id,
        imageurl,
        name,
        email,
        member,
        date,
        location,
        description,
       } =useLoaderData();


    const [categorys, setCategory] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user } = useContext(AuthContext);
    const navigation = useNavigation();

    if (navigation.state === 'loading') {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    const handleSelectCategory = (cat) => {
        setCategory(cat);
        setDropdownOpen(false); // auto close
    };

    const handleCreateGroup = (e) => {
        e.preventDefault();
        const form = e.target;

        // Warn if no category is selected
        if (!categorys) {
            return Swal.fire({
                icon: 'warning',
                title: 'Please select a hobby category!',
                confirmButtonText: 'OK',
            });
        }

        const formData = new FormData(form);
        const groupData = Object.fromEntries(formData.entries());

        const newGroup = {
            ...groupData,
            categorys,
            name: user?.displayName || '',
            email: user?.email || '',
        };

       fetch(`http://localhost:3000/allgroups/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGroup)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Group Ubdated Successfully!",
                        icon: "success",
                    }).then(() => {
                        form.reset();
                        setCategory('');
                    });
                }
            });
    };

    return (
        <div className='p-24 bg-green-50'>
            <h1 className='text-center mb-14 text-4xl font-bold'>Ubdate Group Details</h1>

            <form onSubmit={handleCreateGroup}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">Group Name</label>
                        <input defaultValue={groupname} type="text" name='groupname' className="input w-full " placeholder="Enter group name" required />
                    </fieldset>

                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">Image Url</label>
                        <input defaultValue={imageurl} type="text" name='imageurl' className="input w-full" placeholder="Enter photo URL" required />
                    </fieldset>

                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">User Name</label>
                        <input
                            defaultValue={name}
                            type="text"
                            name="name"
                            className="input w-full"
                            value={user?.displayName || ''}
                            readOnly
                        />
                    </fieldset>

                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">User Email</label>
                        <input
                            defaultValue={email}
                            type="email"
                            name="email"
                            className="input w-full "
                            value={user?.email || ''}
                            readOnly
                        />
                    </fieldset>

                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">Max Member</label>
                        <input defaultValue={member} type="number" name='member' className="input w-full" placeholder="Enter max members" required />
                    </fieldset>

                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">Start Date</label>
                        <input defaultValue={date} type="date" name='date' className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">Meeting Location</label>
                        <input defaultValue={location} type="text" name='location' className="input w-full" placeholder="Write your location" required />
                    </fieldset>

                    <fieldset className="fieldset rounded-box p-4">
                        <label className="label font-bold">Description</label>
                        <textarea defaultValue={description} className="textarea w-full" name='description' placeholder="Write a description" required></textarea>
                    </fieldset>
                </div>

                
                <input  type="hidden" name="category" value={categorys} />

                
                {categorys && (
                    <p className="text-center text-lg font-semibold mt-4">
                        Selected Hobby: <span className="text-blue-700">{categorys}</span>
                    </p>
                )}

                
                <div className="flex justify-center my-4 relative">
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="btn m-1"
                    >
                        {categorys ? `Change Hobby (${categorys})` : "Select Hobby Category"}
                    </button>

                    {dropdownOpen && (
                        <ul className="absolute top-full mt-2 bg-white z-10 w-52 p-2 shadow-lg rounded-box">
                            {[
                                "Drawing & Painting",
                                "Web Developing",
                                "Photography",
                                "Video Gaming",
                                "Fishing",
                                "Running",
                                "Cooking",
                                "Reading",
                                "Writing"
                            ].map((hobby) => (
                                <li key={hobby}>
                                    <button
                                        type="button"
                                        onClick={() => handleSelectCategory(hobby)}
                                        className="w-full text-left hover:bg-gray-100 px-2 py-1 rounded"
                                    >
                                        {hobby}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                
                <div className="flex justify-center">
                    <button type="submit" className="btn btn-success  mt-10 rounded-xl w-50">
                        Ubdate Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateGroup;
