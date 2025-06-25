
import { Link, useLoaderData, } from 'react-router';
import AllGroupCard from '../components/AllGroupCard';
import Banner from '../components/Banner';
import { useEffect, useState } from 'react';
import PopularHobbyCard from '../components/PopularHobbyCard';


const Home = () => {
  const allgroups = useLoaderData();
  const [popularHobbies, setPopularHobbies] = useState([]);

  useEffect(() => {
    fetch('https://hobbyhub-server-xi.vercel.app/popular-hobbies')
      .then(res => res.json())
      .then(data => setPopularHobbies(data))
      .catch(error => console.error('Error fetching popular hobbies:', error));
  }, []);

  return (
    <>
      <Banner />
      <div className="p-5">
      <h1 className="text-2xl font-bold text-center my-8 primary">Featured Group</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {allgroups.slice(0, 8).map(group => (
        <AllGroupCard key={group._id} allgroup={group} />
        ))}
      </div>
      <div className="text-center mt-6">
        <Link to="/allgroup" className="btn btn-outline btn-primary">
        View All Groups
        </Link>
      </div>
      {/* Popular Hobbies Section */}
      <h1 className="text-2xl font-bold text-center my-8 primary">Popular Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularHobbies
        .slice()
        .sort((a, b) => (b.member?.length || 0) - (a.member?.length || 0))
        
        .map(hobby => (
          <PopularHobbyCard key={hobby._id} hobby={hobby} />
        ))}
      </div>
      </div>
    </>
    );
};

export default Home;
