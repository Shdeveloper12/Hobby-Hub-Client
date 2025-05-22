import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './MainLayout.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import AllGroup from './pages/AllGroup.jsx';
import PrivateRoute from './pages/PrivatePages/PrivateRoutes.jsx';
import CreateGroup from './pages/PrivatePages/CreateGroup.jsx';
import MyGroup from './pages/PrivatePages/MyGroup.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import GroupDetails from './pages/GroupDetails.jsx';
import UbdateGroupDetails from './pages/UpdateGroup.jsx';
import Error from './pages/Error.jsx';
import UpdateGroup from './pages/UpdateGroup.jsx';

const loadGroupById = async ({ params }) => {
  const res = await fetch('http://localhost:3000/allgroups'); 
  const data = await res.json();
  return data.find(group => group._id === params.id);
};
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {

        path: '/',
        loader: () => fetch('http://localhost:3000/allgroups'),
        element: <Home></Home>
      },
      {
        path: '/allgroup',
        loader: () => fetch('http://localhost:3000/allgroups'),
        element: <AllGroup></AllGroup>
      },
      {
        path: '/creategroup',
        element: <PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
      },
      {
        path: '/groupdetails/:id',
        loader: loadGroupById,
        element: <GroupDetails></GroupDetails>
      },
      {
        path: '/mygroup',

        element: <PrivateRoute><MyGroup></MyGroup></PrivateRoute>
      },
      {
        path: "/updategroupdetails/:id",
         loader: ({ params }) => fetch(`http://localhost:3000/allgroups/${params.id}`),
        element:<UpdateGroup></UpdateGroup>,
       
      },

      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },

    ]
  },
]);


createRoot(document.getElementById('root')).render(


  <StrictMode>
    <ToastContainer position="top-center" />
    <AuthProvider>
      <RouterProvider router={router} />

    </AuthProvider>

  </StrictMode>,
)
