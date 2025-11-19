import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <aside className="navbar navbar-vertical navbar-expand-lg sidebar">
        <div className="container-fluid">
            <h1 className="navbar-brand navbar-brand-autodark">
                <span className="logo">KICKS</span>
            </h1>
            <div className="collapse navbar-collapse" id="sidebar-menu">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="./admin.html">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-layout-dashboard"></i>
                            </span>
                            <span className="nav-link-title">DASHBOARD</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./admin-product.html">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-shopping-bag"></i>
                            </span>
                            <span className="nav-link-title">ALL PRODUCTS</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./admin-order-list.html">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-file-text"></i>
                            </span>
                            <span className="nav-link-title">ORDER LIST</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./admin-user.html">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-user"></i>
                            </span>
                            <span className="nav-link-title">USER</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./admin-contact.html">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-address-book"></i>
                            </span>
                            <span className="nav-link-title">CONTACT</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-news"></i>
                            </span>
                            <span className="nav-link-title">NEWS</span>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                            <span className="nav-link-icon d-md-none d-lg-inline-block">
                                <i className="ti ti-category"></i>
                            </span>
                            <span className="nav-link-title">Categories</span>
                        </a>

                        <div className="dropdown-menu">
                            <a className="dropdown-item category-item active" href="#">
                                Sneakers <span className="category-badge">21</span>
                            </a>
                            <a className="dropdown-item category-item" href="#">
                                Runners <span className="category-badge">32</span>
                            </a>
                            <a className="dropdown-item category-item" href="#">
                                Golf <span className="category-badge">13</span>
                            </a>
                            <a className="dropdown-item category-item" href="#">
                                Hiking <span className="category-badge">14</span>
                            </a>
                            <a className="dropdown-item category-item" href="#">
                                Football <span className="category-badge">6</span>
                            </a>
                            <a className="dropdown-item category-item" href="#">
                                Baseball <span className="category-badge">11</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar