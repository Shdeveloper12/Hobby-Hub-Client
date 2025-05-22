import React from 'react';
import Home from './pages/Home';
import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';

const MainLayout = () => {
    return (
        <div>
            
            <Header></Header>
           
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;