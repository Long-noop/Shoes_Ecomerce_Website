import React, { useState } from 'react'
import './Contact.css'
import { contactService } from '../../services/contactService';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
        setErrors({});
        setSuccessMessage('');
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
        newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
        }

        if (!formData.message.trim()) {
        newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
        newErrors.message = 'Message must be at least 10 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
        return;
        }

        setLoading(true);
        try {
        const submitData = {
            name: formData.name,
            email: formData.email,
            message: `Subject: ${formData.subject}\nMessage: ${formData.message}`,
        };
        const response = await contactService.submitContact(submitData);
        if (response.success) {
            setSuccessMessage(response.message);
            setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
            });
        }
        } catch (error) {
        setErrors({ submit: error.message || 'Failed to send message' });
        } finally {
        setLoading(false);
        }
    };
  return (
    <div id="contactPage" className="page-section">
        <div className="page-hero">
            <h1>Get In Touch</h1>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div className="contact-content-container">
            <div className="contact-grid">
                <div className="contact-info">
                    <h2>Contact Information</h2>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Address</h4>
                            <p>123 Sneaker Street<br/>District 1, Ho Chi Minh City<br/>Vietnam</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-phone"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Phone</h4>
                            <p>+84 123 456 789</p>
                            <p>Mon-Fri: 9AM - 6PM</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Email</h4>
                            <p>support@kicks.com</p>
                            <p>info@kicks.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">
                            <i className="fas fa-clock"></i>
                        </div>
                        <div className="contact-details">
                            <h4>Business Hours</h4>
                            <p>Monday - Friday: 9AM - 6PM</p>
                            <p>Saturday: 10AM - 4PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="form-label">Your Name *</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                            />
                            {errors.name && (
                                <div className="invalid-feedback">{errors.name}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Your Email *</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                            />
                            {errors.email && (
                                <div className="invalid-feedback">{errors.email}</div>
                            )}
                        </div>

                        <div className="form-group">
                            <label className="form-label">Subject</label>
                            <input
                            type="text"
                            className="form-control"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="How can we help?"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Message *</label>
                            <textarea
                            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us more about your inquiry..."
                            ></textarea>
                            {errors.message && (
                            <div className="invalid-feedback">{errors.message}</div>
                            )}
                        </div>

                        <button type="submit" className="btn-submit">
                            {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Sending...
                            </>
                            ) : (
                            <>
                                <i className="fas fa-paper-plane me-2"></i>
                                Send Message
                            </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact