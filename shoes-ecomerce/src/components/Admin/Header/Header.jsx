import React from 'react'
import './Header.css'

const Header = () => {
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
              </div>
          </div>
      </div>
    </header>
  )
}

export default Header