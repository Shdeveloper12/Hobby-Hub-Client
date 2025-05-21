
import { useLoaderData } from 'react-router';
import './App.css'
import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const InitialGroup = useLoaderData();
  const [allgroups, setGroups] = useState(InitialGroup);
  return (
    <div>

      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-2 2 bg-green-50 p-5'>

        {

          allgroups.map(allgroup => <Home

            key={allgroup.id}
            setGroups={setGroups}
            allgroups={allgroups}
            allgroup={allgroup}

          ></Home>)


        }



      </div>

    </div>
  );
}

export default App
