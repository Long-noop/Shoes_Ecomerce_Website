import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg user-site">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">KICKS</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/new">New Drops 🔥</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/men">Men</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/women">Women</Link>
                        </li>
                        <li><Link className="nav-link" to="/about">About</Link></li>
                        <li><Link className="nav-link" to="/contact">Contact</Link></li>
                        <li><Link className="nav-link" to="/blogs">Blogs</Link></li>
                        <li><Link className="nav-link active" to="/my-account">My Account</Link></li>
                        <li><Link className="nav-link active" to="/cart">Cart</Link></li>
                        </ul>
                    </ul>
                <div className="sub-navbar d-flex justify-content-between gap-3">
                    <div className="col-md-8 col-12">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                    </div>
                    <Link to="/my-account" className="text-dark"><i className="fas fa-user"></i></Link>
                    <div className="user-icon">
                        <Link to="/cart"><i className="fas fa-shopping-bag text-white"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar