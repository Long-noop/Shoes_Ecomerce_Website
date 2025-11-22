import React from 'react'
import './Sidebar.css'
import { NavLink, Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <aside className="navbar navbar-vertical navbar-expand-lg sidebar">
        <div className="container-fluid">
            <h1 className="navbar-brand navbar-brand-autodark">
                <Link to='/'><span className="logo">KICKS</span></Link>
            </h1>
            <div className="collapse navbar-collapse" id="sidebar-menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="dashboard">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-layout-dashboard"></i>
                            </span>
                            <span className="nav-link-title">DASHBOARD</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="products">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-shopping-bag"></i>
                            </span>
                            <span className="nav-link-title">ALL PRODUCTS</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="order-list">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-file-text"></i>
                            </span>
                            <span className="nav-link-title">ORDER LIST</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="user-management">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-user"></i>
                            </span>
                            <span className="nav-link-title">USER</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="contact">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-address-book"></i>
                            </span>
                            <span className="nav-link-title">CONTACT</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="news">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-news"></i>
                            </span>
                            <span className="nav-link-title">NEWS</span>
                        </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <NavLink className="nav-link dropdown-toggle" to="categories" data-bs-toggle="dropdown">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-category"></i>
                            </span>
                            <span className="nav-link-title">Categories</span>
                        </NavLink>

                        <div className="dropdown-menu">
                            <NavLink className="dropdown-item category-item active" to="sneakers">
                                Sneakers <span className="category-badge">21</span>
                            </NavLink>
                            <NavLink className="dropdown-item category-item" to="runners">
                                Runners <span className="category-badge">32</span>
                            </NavLink>
                            <NavLink className="dropdown-item category-item" to="golf">
                                Golf <span className="category-badge">13</span>
                            </NavLink>
                            <NavLink className="dropdown-item category-item" to="hiking">
                                Hiking <span className="category-badge">14</span>
                            </NavLink>
                            <NavLink className="dropdown-item category-item" to="football">
                                Football <span className="category-badge">6</span>
                            </NavLink>
                            <NavLink className="dropdown-item category-item" to="baseball">
                                Baseball <span className="category-badge">11</span>
                            </NavLink>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar