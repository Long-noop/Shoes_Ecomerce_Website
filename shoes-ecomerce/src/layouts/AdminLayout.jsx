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
        <div className="page-wrapper">
          <div className="me-3 ms-auto m-2">
            <i className="ti ti-calendar"></i>
            <span>Feb 16,2022 - Feb 20,2022</span>
          </div> 
          <Outlet/>
        </div>
      <Footer/>
    </>
  );
};

export default AdminLayout;
