import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../shered/Header/Header';
import Footer from '../../shered/Footer/Footer';

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