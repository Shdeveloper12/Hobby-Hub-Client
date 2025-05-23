
import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router';
import AllGroupCard from '../components/AllGroupCard';
import Home from './Home';

const AllGroup = () => {
    const InitialGroup = useLoaderData();
    const navigation = useNavigation();
    const [allgroups, setGroups] = useState(InitialGroup);

    if (navigation.state === 'loading') {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }
    return (
        <div>
                <div className='flex justify-center mt-8 text-2xl primary font-bold'>Showing All Group</div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 2  p-5'>
                

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