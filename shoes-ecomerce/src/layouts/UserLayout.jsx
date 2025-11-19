import React, { useEffect } from 'react'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';
import Navbar from '../components/Navbar/Navbar';
import News from '../components/News/News';
import Footer from '../components/Footer/Footer';

const UserLayout = () => {
  useEffect(() => {
    import("../assets/user.css");
  }, []);

  return (
    <>
    <Header></Header>
      <Navbar></Navbar>
        <div className='app'>
          <Outlet/>
        </div>
      <News/>
    <Footer/>
    </>
  );
};

export default UserLayout