
import { Link, useLoaderData, } from 'react-router';
import AllGroupCard from '../components/AllGroupCard';
import Banner from '../components/Banner';
import CountUp from 'react-countup';

const Home = () => {
  const allgroups = useLoaderData();
  
   const totalGroup = 10;
   const totalUser = 500;
  const activeUser = 50;
 
  
 


  return (
    <>
      <Banner></Banner>
      <div className='p-5 '>
        <h1 className='text-2xl font-bold text-center mb-6 primary'>Featured Group</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
          {allgroups.slice(0, 6).map(group => (
            <AllGroupCard key={group._id} allgroup={group} />
          ))}
        </div>

        <div className='text-center mt-6'>
          <a href='' className='btn btn-outline btn-primary'>
            <Link to='/allgroup'>View All Groups</Link>
          </a>
        </div>
      </div>
      <div className='grid grid-cols-3 sm:grid-col-3 p-5 text-center my-5'>
        <div className="bg-base-200 p-6 rounded-xl shadow">
          <p className="text-lg font-bold primary">Total Groups</p>
          <h2 className="text-3xl font-bold text-blue-600">
            <CountUp end={totalGroup} duration={6} />
          </h2>
        </div>
        <div className="bg-base-200 p-6 rounded-xl shadow">
          <p className="text-lg font-bold primary">Total User</p>
          <h2 className="text-3xl font-bold text-blue-600">
            <CountUp end={totalUser} duration={6} />
          </h2>
        </div>
        <div className="bg-base-200 p-6 rounded-xl shadow">
          <p className="text-lg font-bold primary ">Active User</p>
          <h2 className="text-3xl font-bold text-blue-600">
            <CountUp end={activeUser} duration={6} />
          </h2>
        </div>
      </div>

    </>


  );
};

export default Home;
