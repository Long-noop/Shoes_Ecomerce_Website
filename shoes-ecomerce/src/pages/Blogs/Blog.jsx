import React from 'react'
import './Blog.css'
const Blog = () => {
  return (
    <div id="blogPage" class="page-section">
        <div class="page-hero">
            <h1>Our Blog</h1>
            <p>Stay updated with the latest sneaker news, style guides, and exclusive drops.</p>
        </div>

        <div class="blogs-content-container">
            <div class="blog-grid">
                <div class="blog-card blog-featured">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800" alt="Blog"/>
                        <span class="blog-category">Featured</span>
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><i class="far fa-calendar"></i> October 25, 2025</span>
                            <span><i class="far fa-user"></i> By Admin</span>
                            <span><i class="far fa-comment"></i> 24 Comments</span>
                        </div>
                        <h3>The Ultimate Guide to Sneaker Care: Keep Your Kicks Fresh</h3>
                        <p>
                            Learn the essential tips and tricks to maintain your sneaker collection. From cleaning 
                            techniques to proper storage, we cover everything you need to know to keep your kicks 
                            looking brand new for years to come.
                        </p>
                        <a href="#" class="read-more">
                            Read More <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400" alt="Blog"/>
                        <span class="blog-category">Style Guide</span>
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><i class="far fa-calendar"></i> Oct 12, 2025</span>
                            <span><i class="far fa-user"></i> Emily D.</span>
                        </div>
                        <h3>How to Style Sneakers for Every Occasion</h3>
                        <p>
                            From casual outings to formal events, learn how to rock your sneakers with style.
                        </p>
                        <a href="#" class="read-more">
                            Read More <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div class="blog-card">
                    <div class="blog-image">
                        <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400" alt="Blog"/>
                        <span class="blog-category">Community</span>
                    </div>
                    <div class="blog-content">
                        <div class="blog-meta">
                            <span><i class="far fa-calendar"></i> Oct 10, 2025</span>
                            <span><i class="far fa-user"></i> Admin</span>
                        </div>
                        <h3>Meet the Sneakerheads: Community Spotlight</h3>
                        <p>
                            Celebrating the passionate collectors and enthusiasts in our KICKS community.
                        </p>
                        <a href="#" class="read-more">
                            Read More <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog