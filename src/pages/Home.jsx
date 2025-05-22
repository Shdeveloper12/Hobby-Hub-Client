import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AllGroupCard from '../components/AllGroupCard';
import Banner from '../components/Banner';

const Home = () => {
  const allgroups = useLoaderData(); 

  return (
    <>
     <Banner></Banner>
    <div className='p-5 '>
      <h1 className='text-2xl font-bold text-center mb-6'>Featured Group</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {allgroups.slice(0, 3).map(group => (
          <AllGroupCard key={group._id} allgroup={group} />
        ))}
      </div>

      <div className='text-center mt-6'>
        <a href='' className='btn btn-outline btn-primary'>
          <Link to='/allgroup'>View All Groups</Link>
        </a>
      </div>
    </div>
    </>
    
    
  );
};

export default Home;
