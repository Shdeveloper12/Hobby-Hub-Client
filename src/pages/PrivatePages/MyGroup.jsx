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

        fetch(`http://localhost:3000/allgroups?email=${user.email}`)
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

    const handleDelete = (groupId) => {
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
                fetch(`http://localhost:3000/allgroups/${groupId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setGroups(prev => prev.filter(g => g._id !== groupId));
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

    const handleUpdate = (groupId) => {
        navigate(`/updategroupdetails/${groupId}`);
    };

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="overflow-x-auto mt-10 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center">My Groups</h2>

            {groups.length > 0 ? (
                <table className="table table-zebra w-full bg-base-100">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Group Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {groups.map((group, index) => (
                            <tr key={group._id}>
                                <td>{index + 1}</td>
                                <td>{group.groupname}</td>
                                <td>{group.description}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-outline btn-success mr-2"
                                        onClick={() => handleUpdate(group._id)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-sm btn-outline btn-error"
                                        onClick={() => handleDelete(group._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-6 text-gray-500">No groups created yet.</p>
            )}
        </div>
    );
};

export default MyGroups;
