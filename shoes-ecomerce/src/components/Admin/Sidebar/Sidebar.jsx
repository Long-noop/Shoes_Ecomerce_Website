import React, { useEffect, useState } from 'react'
// import './Sidebar.css'
import { NavLink, Link } from 'react-router-dom'
import { categoryService } from '../../../services/categoryService';

const Sidebar = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        keyword: '',
        category_id: '',
        page: 1,
        per_page: 20,
    });

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = async () => {
        try {
        const response = await categoryService.getCategories();
        if (response.success) {
            setCategories(response.data);
        }
        } catch (error) {
        console.error('Error loading categories:', error);
        }
    };
  return (
    // <aside className="navbar navbar-vertical navbar-expand-lg sidebar">
    //     <div className="container-fluid">
    //         <h1 className="navbar-brand navbar-brand-autodark">
    //             <Link to='/'><span className="logo">KICKS</span></Link>
    //         </h1>
    //         <div className="collapse navbar-collapse" id="sidebar-menu">
    //             <ul className="navbar-nav">
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link" to="dashboard">
    //                         <span className="nav-link-icon d-md-none d-lg-inline-block">
    //                             <i className="ti ti-layout-dashboard"></i>
    //                         </span>
    //                         <span className="nav-link-title">DASHBOARD</span>
    //                     </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link" to="products">
    //                         <span className="nav-link-icon d-md-none d-lg-inline-block">
    //                             <i className="ti ti-shopping-bag"></i>
    //                         </span>
    //                         <span className="nav-link-title">ALL PRODUCTS</span>
    //                     </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link" to="orders">
    //                         <span className="nav-link-icon d-md-none d-lg-inline-block">
    //                             <i className="ti ti-file-text"></i>
    //                         </span>
    //                         <span className="nav-link-title">ORDER LIST</span>
    //                     </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link" to="user-management">
    //                         <span className="nav-link-icon d-md-none d-lg-inline-block">
    //                             <i className="ti ti-user"></i>
    //                         </span>
    //                         <span className="nav-link-title">USER</span>
    //                     </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link" to="contact">
    //                         <span className="nav-link-icon d-md-none d-lg-inline-block">
    //                             <i className="ti ti-address-book"></i>
    //                         </span>
    //                         <span className="nav-link-title">CONTACT</span>
    //                     </NavLink>
    //                 </li>
    //                 <li className="nav-item">
    //                     <NavLink className="nav-link" to="news">
    //                         <span className="nav-link-icon d-md-none d-lg-inline-block">
    //                             <i className="ti ti-news"></i>
    //                         </span>
    //                         <span className="nav-link-title">NEWS</span>
    //                     </NavLink>
    //                 </li>
    //                 <li className="nav-item dropdown">
    //                     <NavLink className="nav-link dropdown-toggle" to="categories" data-bs-toggle="dropdown">
    //                         <span className="nav-link-icon d-md-none d-lg-inline-block">
    //                             <i className="ti ti-category"></i>
    //                         </span>
    //                         <span className="nav-link-title">Categories</span>
    //                     </NavLink>

    //                     <div className="dropdown-menu">
    //                         <NavLink className="dropdown-item category-item active" to="sneakers">
    //                             Sneakers <span className="category-badge">21</span>
    //                         </NavLink>
    //                         <NavLink className="dropdown-item category-item" to="runners">
    //                             Runners <span className="category-badge">32</span>
    //                         </NavLink>
    //                         <NavLink className="dropdown-item category-item" to="golf">
    //                             Golf <span className="category-badge">13</span>
    //                         </NavLink>
    //                         <NavLink className="dropdown-item category-item" to="hiking">
    //                             Hiking <span className="category-badge">14</span>
    //                         </NavLink>
    //                         <NavLink className="dropdown-item category-item" to="football">
    //                             Football <span className="category-badge">6</span>
    //                         </NavLink>
    //                         <NavLink className="dropdown-item category-item" to="baseball">
    //                             Baseball <span className="category-badge">11</span>
    //                         </NavLink>
    //                     </div>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </aside>
    <aside className="navbar navbar-vertical navbar-expand-lg" data-bs-theme="dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebar-menu"
            aria-controls="sidebar-menu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-brand navbar-brand-autodark">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="32"
                viewBox="0 0 232 68"
                className="navbar-brand-image"
              >
                <path
                  d="M64.6 16.2C63 9.9 58.1 5 51.8 3.4 40 1.5 28 1.5 16.2 3.4 9.9 5 5 9.9 3.4 16.2 1.5 28 1.5 40 3.4 51.8 5 58.1 9.9 63 16.2 64.6c11.8 1.9 23.8 1.9 35.6 0C58.1 63 63 58.1 64.6 51.8c1.9-11.8 1.9-23.8 0-35.6zM33.3 36.3c-2.8 4.4-6.6 8.2-11.1 11-1.5.9-3.3.9-4.8.1s-2.4-2.3-2.5-4c0-1.7.9-3.3 2.4-4.1 2.3-1.4 4.4-3.2 6.1-5.3-1.8-2.1-3.8-3.8-6.1-5.3-2.3-1.3-3-4.2-1.7-6.4s4.3-2.9 6.5-1.6c4.5 2.8 8.2 6.5 11.1 10.9 1 1.4 1 3.3.1 4.7zM49.2 46H37.8c-2.1 0-3.8-1-3.8-3s1.7-3 3.8-3h11.4c2.1 0 3.8 1 3.8 3s-1.7 3-3.8 3z"
                  fill="#066fd1"
                  style={{ fill: "var(--tblr-primary, #066fd1)" }}
                />

                <text
                  x="90"
                  y="55"
                  fontSize="60"
                  fontFamily="Abril Fatface"
                  fill="var(--tblr-primary, #066fd1)"
                  fontWeight="bold"
                >
                  KICK
                </text>

              </svg>
            </Link>
          </div>

          <div className="collapse navbar-collapse" id="sidebar-menu">
            <ul className="navbar-nav pt-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link" to="dashboard">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-1"
                    >
                      <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg
                  ></span>
                  <span className="nav-link-title"> Home </span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="orders">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-1"
                    >
                      <path d="M9 11l3 3l8 -8" />
                      <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" /></svg
                  ></span>
                  <span className="nav-link-title"> Orders List </span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="news">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-1"
                    >
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg
                  ></span>
                  <span className="nav-link-title"> News </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-1"
                    >
                      <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                      <path d="M12 12l8 -4.5" />
                      <path d="M12 12l0 9" />
                      <path d="M12 12l-8 -4.5" />
                      <path d="M16 5.25l-8 4.5" /></svg
                  ></span>
                  <span className="nav-link-title"> All Products </span>
                </NavLink>
              </li>
              <li className="nav-item active dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#navbar-layout"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="false"
                  role="button"
                  aria-expanded="true"
                >
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-1"
                    >
                      <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                      <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                      <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
                      <path d="M14 15m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" /></svg
                  ></span>
                  <span className="nav-link-title"> Categories </span>
                </a>
                <div className="dropdown-menu show">
                  <div className="dropdown-menu-columns">
                    <div className="dropdown-menu-column">
                        {categories.map(item => (
                            <Link key={item.id} className="dropdown-item" to={`products`}> {item.name} </Link>
                        ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="dashboard">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-1"
                    >
                      <path
                        d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"
                      /></svg
                  ></span>
                  <span className="nav-link-title"> Carts </span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  <span className="nav-link-icon d-md-none d-lg-inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-1"
                    >
                      <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
                      <path d="M12 8l0 13" />
                      <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                      <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" /></svg
                  ></span>
                  <span className="nav-link-title"> Users Contact </span>
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink className="nav-link" to="user-management">
                  <span className="nav-link-icon d-md-none d-lg-inline-block"
                    >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="icon icon-1"
                    >
                      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M15 15l3.35 3.35" />
                      <path d="M9 15l-3.35 3.35" />
                      <path d="M5.65 5.65l3.35 3.35" />
                      <path d="M18.35 5.65l-3.35 3.35" /></svg
                  ></span>
                  <span className="nav-link-title"> User Management </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </aside>
  )
}

export default Sidebar