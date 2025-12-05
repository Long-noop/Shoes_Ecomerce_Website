import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Admin/Header/Header.jsx";
import Sidebar from "../components/Admin/Sidebar/Sidebar.jsx";
import Footer from "../components/Admin/Footer/Footer.jsx";
import { useLayoutCSS } from "../hooks/useLayoutCSS";

const AdminLayout = () => {
  const loading = useLayoutCSS("/src/assets/admin.css", "admin");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [loading]);

  if (loading || !isReady) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="layout-fluid">
      <div className="page">
        <Sidebar />
        <Header />
        <div className="page-wrapper">
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
