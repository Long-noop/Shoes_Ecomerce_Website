import React from 'react'
import './Header.css'
import {useAuth} from '../../../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const {user, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
        await logout();
        navigate('/login');
        } catch (error) {
        console.error('Logout error:', error);
        }
    };
  return (
    <header className="navbar navbar-expand-md navbar-light d-print-none ">
      <div className="container-fluid">
          <div className="navbar-nav flex-row order-md-last ms-auto">
              <div className="nav-item">
                  <a href="#" className="nav-link px-0">
                      <i className="ti ti-search"></i>
                  </a>
              </div>
              <div className="nav-item">
                  <a href="#" className="nav-link px-0">
                      <i className="ti ti-bell"></i>
                  </a>
              </div>
              <div className="nav-item dropdown">
                    <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown">
                        <span className="avatar avatar-sm">ADMIN</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="/">
                            <i className="ti ti-home me-2"></i>View Site
                        </a>
                        <a className="dropdown-item" href="/my-account/profile">
                            <i className="ti ti-user me-2"></i>Profile
                        </a>
                        <div className="dropdown-divider"></div>
                        <button className="dropdown-item" onClick={handleLogout}>
                            <i className="ti ti-logout me-2"></i>Logout
                        </button>
                    </div>
              </div>
          </div>
      </div>
    </header>
  )
}

export default Header