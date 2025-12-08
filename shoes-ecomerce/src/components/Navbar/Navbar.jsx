import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext.jsx";
import { categoryService } from "../../services/categoryService.js";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const { cartCount } = useCart();
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // State để quản lý mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.getCategories();
        if (response?.data) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("Failed to load categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Đóng mobile menu khi route thay đổi
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsCategoryDropdownOpen(false);
    setIsUserDropdownOpen(false);
  }, [location.pathname]);

  // Đóng menu khi click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isMobileMenuOpen &&
        !e.target.closest(".navbar-collapse") &&
        !e.target.closest(".navbar-toggler")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll khi menu mở
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsCategoryDropdownOpen(false);
    setIsUserDropdownOpen(false);
  };

  const toggleCategoryDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const toggleUserDropdown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      closeMobileMenu();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      <div
        className={`navbar-overlay ${isMobileMenuOpen ? "active" : ""}`}
        onClick={closeMobileMenu}
      ></div>

      <nav className="navbar navbar-expand-lg user-site">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" onClick={closeMobileMenu}>
            KICKS
          </Link>

          <button
            className={`navbar-toggler ${isMobileMenuOpen ? "active" : ""}`}
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`navbar-collapse ${isMobileMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            {/* Close button for mobile */}
            <button
              className="navbar-close-btn"
              onClick={closeMobileMenu}
              aria-label="Close Menu"
            >
              <i className="fas fa-times"></i>
            </button>

            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/products"
                  onClick={closeMobileMenu}
                >
                  New Drops 🔥
                </Link>
              </li>

              <li
                className={`nav-item dropdown ${
                  isCategoryDropdownOpen ? "show" : ""
                }`}
              >
                <button
                  className="nav-link dropdown-toggle"
                  onClick={toggleCategoryDropdown}
                  aria-expanded={isCategoryDropdownOpen}
                >
                  Categories
                </button>
                <ul
                  className={`dropdown-menu ${
                    isCategoryDropdownOpen ? "show" : ""
                  }`}
                >
                  {loadingCategories ? (
                    <li>
                      <span className="dropdown-item disabled">Loading...</span>
                    </li>
                  ) : categories.length > 0 ? (
                    categories.map((category) => (
                      <li key={category._id || category.id}>
                        <Link
                          className="dropdown-item"
                          to={`/products?category=${
                            category._id || category.id
                          }`}
                          onClick={closeMobileMenu}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li>
                      <span className="dropdown-item disabled">
                        No categories available
                      </span>
                    </li>
                  )}
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/contact"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/blogs"
                  onClick={closeMobileMenu}
                >
                  Blogs
                </Link>
              </li>

              {/* Mobile only links */}
              {isAuthenticated && (
                <>
                  <li className="nav-item mobile-only">
                    <Link
                      className="nav-link"
                      to="/cart"
                      onClick={closeMobileMenu}
                    >
                      <i className="fas fa-shopping-bag me-2"></i>
                      Cart {cartCount > 0 && `(${cartCount})`}
                    </Link>
                  </li>
                  <li className="nav-item mobile-only">
                    <Link
                      className="nav-link"
                      to="/my-account"
                      onClick={closeMobileMenu}
                    >
                      <i className="fas fa-user me-2"></i>
                      My Account
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <div className="sub-navbar d-flex gap-5">
              {isAuthenticated ? (
                <>
                  <div
                    className={`dropdown ${isUserDropdownOpen ? "show" : ""}`}
                  >
                    <button
                      className="text-dark dropdown-toggle btn btn-none"
                      onClick={toggleUserDropdown}
                      aria-expanded={isUserDropdownOpen}
                    >
                      <i className="fas fa-user"></i>
                    </button>
                    <ul
                      className={`dropdown-menu dropdown-menu-end ${
                        isUserDropdownOpen ? "show" : ""
                      }`}
                    >
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/my-account"
                          onClick={closeMobileMenu}
                        >
                          <i className="fas fa-user-circle me-2"></i>My Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/my-account/orders"
                          onClick={closeMobileMenu}
                        >
                          <i className="fas fa-shopping-bag me-2"></i>
                          My Orders
                        </Link>
                      </li>
                      {user?.role === "admin" && (
                        <li>
                          <Link
                            className="dropdown-item"
                            to="/admin"
                            onClick={closeMobileMenu}
                          >
                            <i className="fas fa-cog me-2"></i>
                            Admin Panel
                          </Link>
                        </li>
                      )}
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          <i className="fas fa-sign-out-alt me-2"></i>Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="user-icon position-relative">
                    <Link to="/cart" onClick={closeMobileMenu}>
                      <button className="btn btn-none">
                        <i className="fas fa-shopping-bag text-white"></i>
                        {cartCount > 0 && (
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {cartCount}
                            <span className="visually-hidden">
                              items in cart
                            </span>
                          </span>
                        )}
                      </button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="btn btn-custom"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="btn btn-custom"
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
