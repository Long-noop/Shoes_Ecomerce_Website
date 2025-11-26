import React, { use } from 'react'
import './MyAccount.scss'
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from '../../contexts/AuthContext';
const MyAccount = () => {

    const {logout, user} = useAuth();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        await logout();
        navigate("/login", { replace: true });
    };

  return (
    <div className="account-container user-account">
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
                    <h3 className="user-name">{user?.name}</h3>
                    <p className="user-email">{user?.email}</p>
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
                        <div onClick={handleLogout} className="menu-link logout">
                            <i className="fas fa-sign-out-alt"></i>
                            <span>Logout</span>
                        </div>
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