
import { Link, useLoaderData, } from 'react-router';
import AllGroupCard from '../components/AllGroupCard';
import Banner from '../components/Banner';
import { useEffect, useState } from 'react';
import PopularHobbyCard from '../components/PopularHobbyCard';
import ReviewSection from '../components/ReviewSection';
import FaqSection from '../components/FaqSection';


const Home = () => {
  const allgroups = useLoaderData();
  const [popularHobbies, setPopularHobbies] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/popular-hobbies`)
      .then(res => res.json())
      .then(data => setPopularHobbies(data))
      .catch(error => console.error('Error fetching popular hobbies:', error));
  }, []);

  return (
    <>
      <Banner />
      <div className="p-5">
      <h1 className="text-2xl font-bold text-center my-12 primary">Featured Group</h1>
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
      <h1 className="text-2xl font-bold text-center my-12 primary">Popular Hobbies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularHobbies
        .slice()
        .sort((a, b) => (b.member?.length || 0) - (a.member?.length || 0))
        
        .map(hobby => (
          <PopularHobbyCard key={hobby._id} hobby={hobby} />
        ))}
      </div>

      <ReviewSection />

        <div id="faq-section">
           <FaqSection />
        </div>
     
      </div>
    </>
    );
};

export default Home;
