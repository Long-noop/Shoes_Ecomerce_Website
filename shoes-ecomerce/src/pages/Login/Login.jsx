import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className="auth-container">
        <div id="loginSection" className="auth-section active">
            <div className="row-container">
                <div className="form-card">
                    <h2 className="form-title">Login</h2>
                    <a href="#" className="forgot-password">Forgot your password?</a>

                    <form>
                        <input type="email" className="form-control" placeholder="Email"/>
                        <input type="password" className="form-control" placeholder="Password"/>

                        <div className="form-check">
                            <input type="checkbox" id="keepLogged"/>
                            <label for="keepLogged">
                                Keep me logged in - applies to all log in options below. <a href="#">More info</a>
                            </label>
                        </div>

                        <button type="submit" className="btn-primary-custom">
                            <span>EMAIL LOGIN</span>
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </form>

                    <div className="social-login mt-4">
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

                    <p style={{ fontSize: "0.85rem" , color: " #666" , marginTop: "1.5rem"}}>
                        By clicking 'Log In' you agree to our website KicksClub Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.
                    </p>
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

export default Login