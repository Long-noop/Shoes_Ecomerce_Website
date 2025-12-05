import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.first_name) {
      newErrors.first_name = "First name is required";
    }

    if (!formData.last_name) {
      newErrors.last_name = "Last name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    console.log("Clicked register!");
    console.log("register:", register);

    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { confirmPassword, ...registerData } = formData;
      const response = await register(registerData);

      if (response.success) {
        navigate("/", { replace: true });
      } else {
        setError(response.message || "Registration failed");
        if (response.errors) {
          setErrors(response.errors);
        }
      }
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
      if (err.errors) {
        setErrors(err.errors);
      }
    } finally {
      setLoading(false);
    }
  };
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
                <i className="fab fa-instagram"></i>
              </div>
            </div>

            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className={`form-control ${
                  errors.first_name ? "is-invalid" : ""
                }`}
                placeholder="First Name"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              {errors.first_name && (
                <div className="invalid-feedback">{errors.first_name}</div>
              )}

              <input
                type="text"
                className={`form-control ${
                  errors.last_name ? "is-invalid" : ""
                }`}
                placeholder="Last Name"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
              {errors.first_name && (
                <div className="invalid-feedback">{errors.last_name}</div>
              )}

              {/* <label className="form-label">Gender</label>
                        <div className="gender-group">
                            <div className="gender-option">
                                <input type="checkbox" id="male"/>
                                <label htmlFor="male">Male</label>
                            </div>
                            <div className="gender-option">
                                <input type="checkbox" id="female"/>
                                <label htmlFor="female">Female</label>
                            </div>
                            <div className="gender-option">
                                <input type="checkbox" id="other"/>
                                <label htmlFor="other">Other</label>
                            </div>
                        </div> */}

              <input
                type="email"
                placeholder="Email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}

              <input
                type="password"
                placeholder="Password"
                className={`form-control ${
                  errors.password ? "is-invalid" : ""
                }`}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}

              {/* <p className="password-hint">
                            Minimum 8 characters with at least one uppercase, one lowercase, one special 
                            character and a number
                        </p> */}

              <input
                type="password"
                placeholder="Confirm Password"
                className={`form-control ${
                  errors.confirmPassword ? "is-invalid" : ""
                }`}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword}</div>
              )}

              <div className="form-check d-flex mb-1">
                <input type="checkbox" id="agreeTerms" />
                <label htmlFor="agreeTerms">
                  By clicking 'Log In' you agree to our website KicksClub Terms
                  & Conditions, Kicks Privacy Notice and Terms & Conditions.
                </label>
              </div>

              <div className="form-check d-flex mb-3">
                <input type="checkbox" id="keepLoggedRegister" />
                <label htmlFor="keepLoggedRegister">
                  Keep me logged in - applies to all log in options below.{" "}
                  <a href="#">More info</a>
                </label>
              </div>

              <button
                type="submit"
                className="btn-primary-custom"
                disabled={loading}
              >
                <span>REGISTER</span>
                <i className="fas fa-arrow-right"></i>
              </button>
              {loading ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Creating account...
                </>
              ) : (
                ""
              )}
            </form>

            <p style={{ marginTop: "1rem" }}>
              Already have an account?
              <span
                style={{
                  color: "#007bff",
                  cursor: "pointer",
                  marginLeft: "5px",
                }}
                onClick={() => navigate("/login")}
              >
                Login?
              </span>
            </p>
          </div>

          <div className="info-card">
            <h3 className="info-title">Join Kicks Club Get Rewarded Today.</h3>
            <p className="info-text">
              As kicks club member you get rewarded with what you love for doing
              what you love. Sign up today and receive immediate access to these
              Level 1 benefits:
            </p>

            <ul className="benefits-list">
              <li>Free shipping</li>
              <li>A 15% off voucher for your next purchase</li>
              <li>Access to Members Only products and sales</li>
              <li>Access to adidas Running and Training apps</li>
              <li>Special offers and promotions</li>
            </ul>

            <p className="info-text">
              Join now to start earning points, reach new levels and unlock more
              rewards and benefits from adiClub.
            </p>

            <button className="btn-primary-custom">
              <span>JOIN THE CLUB</span>
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
