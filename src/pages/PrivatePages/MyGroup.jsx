import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router';


const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user?.email) return;

        fetch(`https://hobbyhub-server-xi.vercel.app/allgroups?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setGroups(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching groups:", error);
                setLoading(false);
            });
    }, [user]);

    const handleDelete = (email) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This action cannot be undone!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                fetch(`https://hobbyhub-server-xi.vercel.app/allgroups/${email}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setGroups(prev => prev.filter(g => g._id !== email));
                            Swal.fire('Deleted!', 'Your group has been deleted.', 'success');
                        } else {
                            Swal.fire('Error!', 'Group not found or already deleted.', 'error');
                        }
                    })
                    .catch(error => {
                        console.error("Error deleting group:", error);
                        Swal.fire('Error!', 'Failed to delete the group.', 'error');
                    });
            }
        });
    };

    const handleUpdate = (email) => {
        navigate(`/updategroupdetails/${email}`);
    };

    if (loading) {

        return <div className="loading loading-ring loading-xl"></div>;
    }

    return (
        <div className="overflow-x-auto mt-10 px-4 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-center primary">My Groups</h2>

            {groups.length > 0 ? (
                <>
                    <div className='  lg:hidden overflow-x-auto'>
                        <table className="table table-zebra w-full bg-base-100 text-sm">
                            <thead>
                                <tr className='primary'>
                                    <th>#</th>
                                    <th>Group Name</th>
                                    <th>Member</th>
                                    <th>Created Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groups.map((group, index) => (
                                    <tr key={group._id}>
                                        <td>{index + 1}</td>
                                        <td className='font-bold font-primary'>{group.groupname}</td>
                                        <td>{group.member}</td>
                                        <td className='font-secondary'>{group.date}</td>
                                        
                                        <td>
                                            <button
                                                className="btn w-25 btn-sm btn-outline btn-success mr-2"
                                                onClick={() => handleUpdate(group._id)}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="btn w-25 mt-2 btn-sm btn-outline btn-error"
                                                onClick={() => handleDelete(group._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className='hidden lg:block gap-5'>
                        <table className="table table-zebra w-full bg-base-100 text-sm">
                            <thead>
                                <tr className='primary'>
                                    <th>#</th>
                                    <th>Group Name</th>
                                    <th>Member</th>
                                    <th>Created Date</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {groups.map((group, index) => (
                                    <tr key={group._id}>
                                        <td>{index + 1}</td>
                                        <td className='font-bold font-opensans'>{group.groupname}</td>
                                        <td>{group.member}</td>
                                        <td className='secondary'>{group.date}</td>
                                        <td className='secondary'>{group.category}</td>
                                        <td className='secondary'>{group.description}</td>
                                        <td>
                                            <button
                                                className="btn w-25 btn-sm btn-outline btn-success mr-2"
                                                onClick={() => handleUpdate(group._id)}
                                            >
                                                Update
                                            </button>
                                            <button
                                                className="btn w-25 mt-2 btn-sm btn-outline btn-error"
                                                onClick={() => handleDelete(group._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </>


            ) : (
                <p className="text-center mt-6 text-gray-500 ">No groups created yet.</p>
            )}
        </div>
    );
};

export default MyGroups;
