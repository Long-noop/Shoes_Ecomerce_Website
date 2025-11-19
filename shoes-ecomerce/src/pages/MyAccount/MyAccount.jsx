import React from 'react'
import './MyAccount.css'
import { NavLink, Outlet } from "react-router-dom";
const MyAccount = () => {
  return (
    <div className="account-container">
        <div className="account-grid">
            <aside className="account-sidebar">
                <div className="user-profile">
                    <div className="user-avatar">
                        <i className="fas fa-user"></i>
                        <div className="avatar-upload">
                            <i className="fas fa-camera"></i>
                            <input type="file" id="avatarUpload" style={{display: "none"}} accept="image/*"/>
                        </div>
                    </div>
                    <h3 className="user-name">John Anderson</h3>
                    <p className="user-email">john.anderson@email.com</p>
                </div>

                <ul className="sidebar-menu">
                    <li className="menu-item">
                        <NavLink className="menu-link" to="dashboard">
                            <i className="fas fa-home"></i>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="profile">
                            <i className="fas fa-user"></i>
                            <span>Profile Settings</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="orders">
                            <i className="fas fa-shopping-bag"></i>
                            <span>My Orders</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="wishlist">
                            <i className="fas fa-heart"></i>
                            <span>Wishlist</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="addresses">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Addresses</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink className="menu-link" to="security">
                            <i className="fas fa-lock"></i>
                            <span>Security</span>
                        </NavLink>
                    </li>
                    <li className="menu-item">
                        <NavLink to="/login" className="menu-link logout">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </NavLink>
                    </li>
                </ul>
            </aside>

            <main className='account-content'>
                <Outlet />
            </main>
        </div>
    </div>
  )
}

export default MyAccount