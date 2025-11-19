import React from 'react'
import './About.css'
const About = () => {
  return (
    <div id="aboutPage" class="page-section active">
        <div class="page-hero">
            <h1>About KICKS</h1>
            <p>We are the biggest hyperstore in the universe. We got you all covered with our exclusive collections and latest drops.</p>
        </div>

        <div class="content-container">
            <div class="about-card">
                <div class="about-header">
                    <h2>Our Story</h2>
                    <p>
                        Founded in 2020, KICKS has grown to become the world's leading destination for sneaker enthusiasts. 
                        We believe that everyone deserves access to the latest and greatest footwear, from limited edition 
                        releases to everyday essentials. Our mission is to connect sneakerheads with the kicks they love, 
                        while providing an unparalleled shopping experience.
                    </p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">500K+</div>
                        <div class="stat-label">Happy Customers</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">10K+</div>
                        <div class="stat-label">Products</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">50+</div>
                        <div class="stat-label">Brands</div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-number">100+</div>
                        <div class="stat-label">Countries</div>
                    </div>
                </div>
            </div>

            <div class="about-card">
                <div class="about-header">
                    <h2>Our Values</h2>
                </div>

                <div class="values-grid">
                    <div class="value-card">
                        <div class="value-icon">
                            <i class="fas fa-heart"></i>
                        </div>
                        <h3>Passion</h3>
                        <p>We live and breathe sneakers. Our passion drives us to curate the best collection for our community.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <h3>Authenticity</h3>
                        <p>Every product is 100% authentic. We guarantee the quality and legitimacy of every item we sell.</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <i class="fas fa-users"></i>
                        </div>
                        <h3>Community</h3>
                        <p>We're building a global community of sneaker lovers who share the same passion and enthusiasm.</p>
                    </div>
                </div>
            </div>

            <div class="about-card">
                <div class="about-header">
                    <h2>Meet Our Team</h2>
                </div>

                <div class="team-grid">
                    <div class="team-member">
                        <div class="team-photo">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="team-info">
                            <h4>John Anderson</h4>
                            <p>Chief Executive Officer</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="team-photo">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="team-info">
                            <h4>Sarah Mitchell</h4>
                            <p>Head of Operations</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="team-photo">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="team-info">
                            <h4>Mike Chen</h4>
                            <p>Creative Director</p>
                        </div>
                    </div>
                    <div class="team-member">
                        <div class="team-photo">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class="team-info">
                            <h4>Emily Davis</h4>
                            <p>Customer Success Lead</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About