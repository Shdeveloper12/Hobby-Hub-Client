import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const UpdateGroup = () => {
    const {
        groupname,
        _id,
        imageurl,
        name,
        email,
        member,
        date,
        location,
        description,
        category
    } = useLoaderData();

    const [selectedCategory, setSelectedCategory] = useState(category || '');
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
        setSelectedCategory(cat);
        setDropdownOpen(false);
    };

    const handleUpdateGroup = (e) => {
        e.preventDefault();
        const form = e.target;

        if (!selectedCategory) {
            return Swal.fire({
                icon: 'warning',
                title: 'Please select a hobby category!',
                confirmButtonText: 'OK',
            });
        }

        const formData = new FormData(form);
        const groupData = Object.fromEntries(formData.entries());

        const updatedGroup = {
            ...groupData,
            category: selectedCategory,
            name: user?.displayName || '',
            email: user?.email || '',
        };

        fetch(`${import.meta.env.VITE_API_URL}/allgroups/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedGroup),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Group Updated Successfully!',
                        icon: 'success',
                    }).then(() => {
                        form.reset();
                        setSelectedCategory('');
                    });
                }
            });
    };

    return (
        <div className="container mx-auto mb-8">
            <h1 className="text-center text-2xl my-12 font-bold ">Update Group Details</h1>

            <form onSubmit={handleUpdateGroup}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <fieldset className="fieldset p-4">
                        <label className="label font-bold text-orange-400 secondary">Group Name</label>
                        <input defaultValue={groupname} type="text" name="groupname" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset p-4">
                        <label className="label font-bold text-orange-400 secondary">Image URL</label>
                        <input  type="text" name="imageurl" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset p-4">
                        <label className="label font-bold text-orange-400 secondary">User Name</label>
                        <input type="text" name="name" className="input w-full" value={user?.displayName || ''} readOnly />
                    </fieldset>

                    <fieldset className="fieldset p-4">
                        <label className="label font-bold text-orange-400 secondary">User Email</label>
                        <input type="email" name="email" className="input w-full" value={user?.email || ''} readOnly />
                    </fieldset>

                    <fieldset className="fieldset p-4">
                        <label className="label font-bold text-orange-400 secondary">Max Members</label>
                        <input defaultValue={member} type="number" name="member" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset p-4">
                        <label className="label font-bold text-orange-400 secondary">Start Date</label>
                        <input  type="date" name="date" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset p-4">
                        <label className="label font-bold text-orange-400 secondary">Meeting Location</label>
                        <input defaultValue={location} type="text" name="location" className="input w-full" required />
                    </fieldset>

                    <fieldset className="fieldset p-4">
                        <label className="label font-bold text-orange-400 secondary">Description</label>
                        <textarea  name="description" className="textarea w-full" required></textarea>
                    </fieldset>
                </div>

                <input type="hidden" name="category" value={selectedCategory} />

                {selectedCategory && (
                    <p className="text-center primary text-lg font-semibold mt-4 text-orange-400">
                        Selected Hobby: <span className="text-blue-700">{selectedCategory}</span>
                    </p>
                )}

                <div className="flex justify-center my-4 relative">
                    <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="btn m-1"
                    >
                        {selectedCategory ? `Change Hobby (${selectedCategory})` : "Select Hobby Category"}
                    </button>

                    {dropdownOpen && (
                        <ul className="absolute secondary text-black top-full mt-2 bg-orange-400 z-10 w-52 p-2 shadow-lg rounded-box">
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
                    <button type="submit" className="btn btn-primary secondary mt-10">
                        Update Now
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateGroup;
