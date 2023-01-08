import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/FixedPages/FooterPage/Footer';
import Header from '../Pages/FixedPages/HeaderPage/Header';

const Main = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;