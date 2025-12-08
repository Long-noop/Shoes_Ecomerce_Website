import React, { useEffect, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Outlet } from "react-router-dom";
import Header from "../components/header/header";
import Navbar from "../components/Navbar/Navbar";
import News from "../components/News/News";
import Footer from "../components/Footer/Footer";
import { useLayoutCSS } from "../hooks/useLayoutCSS";
import "./UserLayout.css";
const UserLayout = () => {
  const loading = useLayoutCSS("/src/assets/user.css", "user");
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
          <span className="visually-hidden">KICK is Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <div className="app">
        <Outlet />
      </div>
      <News />
      <Footer />
    </>
  );
};

export default UserLayout;
