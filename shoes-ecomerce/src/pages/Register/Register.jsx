import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div className="auth-container">
        <div id="registerSection" className="auth-section">
            <div className="row-container">
                <div className="form-card">
                    <h2 className="form-title">Register</h2>
                    <p className="form-subtitle">Sign up with</p>

                    <div className="social-login">
                        <div className="social-btn">
                            <i className="fab fa-google fa-google"></i>
                        </div>
                        <div className="social-btn">
                            <i className="fab fa-apple fa-apple"></i>
                        </div>
                        <div className="social-btn">
                            <i className="fab fa-facebook fa-facebook"></i>
                        </div>
                    </div>

                    <div className="divider">OR</div>

                    <form>
                        <label className="form-label">Your Name</label>
                        <input type="text" className="form-control" placeholder="First Name"/>
                        <input type="text" className="form-control" placeholder="Last Name"/>

                        <label className="form-label">Gender</label>
                        <div className="gender-group">
                            <div className="gender-option">
                                <input type="checkbox" id="male"/>
                                <label for="male">Male</label>
                            </div>
                            <div className="gender-option">
                                <input type="checkbox" id="female"/>
                                <label for="female">Female</label>
                            </div>
                            <div className="gender-option">
                                <input type="checkbox" id="other"/>
                                <label for="other">Other</label>
                            </div>
                        </div>

                        <label className="form-label">Login Details</label>
                        <input type="email" className="form-control" placeholder="Email"/>
                        <input type="password" className="form-control" placeholder="Password"/>
                        <p className="password-hint">
                            Minimum 8 characters with at least one uppercase, one lowercase, one special 
                            character and a number
                        </p>

                        <div className="form-check">
                            <input type="checkbox" id="agreeTerms"/>
                            <label for="agreeTerms">
                                By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, 
                                Kicks Privacy Notice and Terms & Conditions.
                            </label>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" id="keepLoggedRegister"/>
                            <label for="keepLoggedRegister">
                                Keep me logged in - applies to all log in options below. <a href="#">More info</a>
                            </label>
                        </div>

                        <button type="submit" className="btn-primary-custom">
                            <span>REGISTER</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </form>
                </div>

                <div className="info-card">
                    <h3 className="info-title">Join Kicks Club Get Rewarded Today.</h3>
                    <p className="info-text">
                        As kicks club member you get rewarded with what you love for doing what you love. 
                        Sign up today and receive immediate access to these Level 1 benefits:
                    </p>

                    <ul className="benefits-list">
                        <li>Free shipping</li>
                        <li>A 15% off voucher for your next purchase</li>
                        <li>Access to Members Only products and sales</li>
                        <li>Access to adidas Running and Training apps</li>
                        <li>Special offers and promotions</li>
                    </ul>

                    <p className="info-text">
                        Join now to start earning points, reach new levels and unlock more rewards and 
                        benefits from adiClub.
                    </p>

                    <button className="btn-primary-custom">
                        <span>JOIN THE CLUB</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register