import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Admin/Header/Header.jsx";
import Sidebar from "../components/Admin/Sidebar/Sidebar.jsx";
import Footer from "../components/Admin/Footer/Footer.jsx";


const AdminLayout = () => {
    useEffect (() => {
        import('../assets/admin.css');
    }, []);

  return (
    <>
      <Header/>
      <Sidebar/>
        <Outlet/>
      <Footer/>
    </>
  );
};

export default AdminLayout;
