import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <section class="hero-section">
        <div class="container">
            <h1 class="hero-title">DO IT <span class="blue">RIGHT</span></h1>
            <div class="hero-card">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="hero-content">
                            <h2>NIKE AIR MAX</h2>
                            <p>Nike introducing the new air max for everyone's comfort</p>
                            <Link to="/products" className="btn btn-primary">SHOP NOW</Link>
                        </div>
                    </div>
                    <div class="col-md-6 text-center">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" alt="Nike Air Max"/>
                    </div>
                </div>
                <div class="thumbnail-images">
                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" alt="Thumbnail 1"/>
                    <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=100" alt="Thumbnail 2"/>
                </div>
            </div>
        </div>
    </section>

    <section class="new-drops">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">DON'T MISS OUT<br/>NEW DROPS</h2>
                <button class="btn btn-primary">SHOP NEW DROPS</button>
            </div>
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="product-card">
                        <span class="badge-new">NEW</span>
                        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300" alt="Adidas Shoe"/>
                        <h5 class="product-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h5>
                        <div class="product-footer">
                            <span>VIEW PRODUCT</span>
                            <span>$125</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-card">
                        <span class="badge-new">NEW</span>
                        <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=300" alt="Adidas Shoe"/>
                        <h5 class="product-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h5>
                        <div class="product-footer">
                            <span>VIEW PRODUCT</span>
                            <span>$125</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-card">
                        <span class="badge-new">NEW</span>
                        <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=300" alt="Adidas Shoe"/>
                        <h5 class="product-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h5>
                        <div class="product-footer">
                            <span>VIEW PRODUCT</span>
                            <span>$125</span>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6">
                    <div class="product-card">
                        <span class="badge-new">NEW</span>
                        <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300" alt="Adidas Shoe"/>
                        <h5 class="product-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h5>
                        <div class="product-footer">
                            <span>VIEW PRODUCT</span>
                            <span>$125</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="categories">
        <div class="container">
            <div class="section-header d-flex flex-column flex-sm-row">
                <h2 class="section-title">CATEGORIES</h2>
                <div class="toggle-icons">
                    <div class="toggle-btn"></div>
                    <div class="toggle-btn active"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="category-card">
                        <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400" alt="Lifestyle Shoes"/>
                        <h3 class="category-title">LIFESTYLE<br/>SHOES</h3>
                        <div class="category-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="category-card">
                        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400" alt="Basketball Shoes"/>
                        <h3 class="category-title">BASKETBALL<br/>SHOES</h3>
                        <div class="category-arrow">
                            <i class="fas fa-arrow-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="reviews">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">REVIEWS</h2>
                <button class="btn btn-primary">SEE ALL</button>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="review-card">
                        <div class="review-header">
                            <div class="review-avatar"></div>
                            <div>
                                <h6 class="mb-0"><strong>Good Quality</strong></h6>
                                <small class="text-muted">I highly recommend shopping from kicks</small>
                            </div>
                        </div>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <span class="ms-2">3.0</span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400" alt="Review" class="review-image"/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="review-card">
                        <div class="review-header">
                            <div class="review-avatar"></div>
                            <div>
                                <h6 class="mb-0"><strong>Good Quality</strong></h6>
                                <small class="text-muted">I highly recommend shopping from kicks</small>
                            </div>
                        </div>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span class="ms-2">5.0</span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=400" alt="Review" class="review-image"/>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="review-card">
                        <div class="review-header">
                            <div class="review-avatar"></div>
                            <div>
                                <h6 class="mb-0"><strong>Good Quality</strong></h6>
                                <small class="text-muted">I highly recommend shopping from kicks</small>
                            </div>
                        </div>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span class="ms-2">5.0</span>
                        </div>
                        <img src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400" alt="Review" class="review-image"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Home