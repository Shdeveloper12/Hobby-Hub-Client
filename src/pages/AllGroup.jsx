
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllGroupCard from '../components/AllGroupCard';

const AllGroup = () => {
    const InitialCoffees = useLoaderData();
    const [allgroups, setGroups] = useState(InitialCoffees);
    return (
        <div>

            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 2 bg-green-50 p-5'>

                {

                    allgroups.map(allgroup => <AllGroupCard

                        key={allgroup._id}
                        setGroups={setGroups}
                        allgroups={allgroups}
                        allgroup={allgroup}

                    ></AllGroupCard>)
                }

            </div>
           
        </div>
    );
};

export default AllGroup;