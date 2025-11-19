import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div id="contactPage" class="page-section">
        <div class="page-hero">
            <h1>Get In Touch</h1>
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>

        <div class="contact-content-container">
            <div class="contact-grid">
                <div class="contact-info">
                    <h2>Contact Information</h2>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Address</h4>
                            <p>123 Sneaker Street<br/>District 1, Ho Chi Minh City<br/>Vietnam</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Phone</h4>
                            <p>+84 123 456 789</p>
                            <p>Mon-Fri: 9AM - 6PM</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Email</h4>
                            <p>support@kicks.com</p>
                            <p>info@kicks.com</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="contact-details">
                            <h4>Business Hours</h4>
                            <p>Monday - Friday: 9AM - 6PM</p>
                            <p>Saturday: 10AM - 4PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>
                </div>

                <div class="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div class="form-group">
                            <label class="form-label">Full Name</label>
                            <input type="text" class="form-control" placeholder="Enter your name" required/>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Email Address</label>
                            <input type="email" class="form-control" placeholder="Enter your email" required/>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Phone Number</label>
                            <input type="tel" class="form-control" placeholder="Enter your phone number"/>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Subject</label>
                            <input type="text" class="form-control" placeholder="What is this about?" required/>
                        </div>

                        <div class="form-group">
                            <label class="form-label">Message</label>
                            <textarea class="form-control" placeholder="Write your message here..." required></textarea>
                        </div>

                        <button type="submit" class="btn-submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact