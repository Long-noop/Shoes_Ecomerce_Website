import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { categoryService } from '../../services/categoryService';
import './Footer.css'
const Footer = () => {
    const [categories, setCategories] = useState([]);

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
        console.error("Error loading categories in footer:", error);
        }
    };
  return (
    <footer className='user-site'>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <h5 className="footer-title">About us</h5>
                    <p className="footer-text">
                        We are the biggest hyperstore in the universe. We got you all covered with our 
                        exclusive collections and latest drops.
                    </p>
                </div>
                <div className="col-md-3">
                    <h5 className="footer-title">Categories</h5>
                    <ul className="footer-links">
                        {categories.length > 0 ? (
                            categories.map(cat => (
                            <li key={cat.id}>
                                <Link to={`/products?category_id=${cat.id}`}>
                                {cat.name}
                                </Link>
                            </li>
                            ))
                        ) : (
                            <li>Loading...</li>
                        )}
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className="footer-title">Company</h5>
                    <ul className="footer-links">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h5 className="footer-title">Follow us</h5>
                    <div className="social-icons">
                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-tiktok"></i></Link>
                    </div>
                </div>
            </div>

            <div className="footer-logo">KICKS</div>

            <div className="copyright">
                © All rights reserved | Made With <i className="fas fa-heart" style={{color: "#4169e1"}}></i> by 
                <a href="#">Vishista Systems International</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer