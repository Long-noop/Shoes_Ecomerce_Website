import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Admin/Header/Header.jsx";
import Sidebar from "../components/Admin/Sidebar/Sidebar.jsx";
import Footer from "../components/Admin/Footer/Footer.jsx";


const AdminLayout = () => {
  const [loading, setLoading] = useState(true);
  useEffect (() => {
    setLoading(true)
      import('../assets/admin.css');
    setLoading(false)
  }, []);

  if(loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header/>
      <Sidebar/>
        <div className="page-wrapper">
          <Outlet/>
        </div>
      <Footer/>
    </>
  );
};

export default AdminLayout;
