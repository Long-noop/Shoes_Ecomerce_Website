import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext.jsx';

const Navbar = () => {
    const navigate = useNavigate();
    const {user, logout, isAuthenticated} = useAuth();
    const {cartCount} = useCart();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };
  return (
    <nav className="navbar navbar-expand-lg user-site">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">KICKS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/products">New Drops 🔥</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/products">Categories</Link>
                    </li>
                    <li><Link className="nav-link" to="/about">About</Link></li>
                    <li><Link className="nav-link" to="/contact">Contact</Link></li>
                    <li><Link className="nav-link" to="/blogs">Blogs</Link></li>

                    {isAuthenticated && (
                        <>
                            <li><Link className="nav-link active" to="/cart">Cart</Link></li>
                            <li><Link className="nav-link active" to="/my-account">My Account</Link></li>
                        </>
                    )}
                    
                </ul>
                <div className="sub-navbar d-flex gap-3">
                    {/* <div className="col-md-7 col-12">
                        <form className="d-flex">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div> */}
                    {isAuthenticated ? (
                        <>
                            <div className="user-icon position-relative">
                                <Link to="/cart">
                                    <i className="fas fa-shopping-bag text-white"></i>
                                    {cartCount > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartCount}
                                        <span className="visually-hidden">items in cart</span>
                                    </span>
                                    )}
                                </Link>
                            </div>
                            
                            <div className='dropdown'>
                                <a href="#" className='text-dark dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
                                    <i className="fas fa-user"></i>
                                </a>
                                <ul className='dropdown-menu dropdown-menu-end'>
                                    <li>
                                        <Link className='dropdown-item' to='/my-account'>
                                            <i className="fas fa-user-circle me-2"></i>My Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item" to="/my-account/orders">
                                            <i className="fas fa-shopping-bag me-2"></i>
                                            My Orders
                                        </Link>
                                    </li>
                                    {user?.role === 'admin' && (
                                        <li>
                                            <Link className="dropdown-item" to="/admin">
                                            <i className="fas fa-cog me-2"></i>
                                            Admin Panel
                                            </Link>
                                        </li>
                                    )}
                                    <li><hr className="dropdown-divider"/></li>
                                    <li>    
                                        <button className="dropdown-item" onClick={() => handleLogout()}>
                                            <i className="fas fa-sign-out-alt me-2"></i>Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            {/* <Link to="/my-account" className="text-dark"><i className="fas fa-user"></i></Link> */}
                            
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="btn btn-custom">Login</Link>
                            <Link to="/register" className="btn btn-custom">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar