import React from 'react'
import './ProductDetails.css'
const ProductDetails = () => {
  return (
    <div>
      <div className="product-detail-container">
          <div className="product-detail">
              <div className="product-grid">
                  <div className="product-images">
                      <div className="main-image">
                          <button className="image-nav prev"><i className="fas fa-chevron-left"></i></button>
                          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" alt="Product" id="mainImage"/>
                          <button className="image-nav next"><i className="fas fa-chevron-right"></i></button>
                      </div>

                      <div className="thumbnail-grid">
                          <div className="thumbnail active" data-image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600">
                              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" alt="Thumbnail 1"/>
                          </div>
                          <div className="thumbnail" data-image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600">
                              <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Thumbnail 2"/>
                          </div>
                      </div>
                  </div>

                  <div className="product-info">
                      <span className="badge-new">New Release</span>
                      <h1 className="product-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h1>
                      <div className="product-price">$125.00</div>

                      <div className="option-group">
                          <label className="option-label">Color</label>
                          <div className="color-options">
                              <div className="color-option active" style={{backgroundColor: "#2d5016", dataColor:"green"}}></div>
                              <div className="color-option" style={{backgroundColor:"#4a4a4a" , dataColor:"gray"}}></div>
                          </div>
                      </div>

                      <div className="option-group">
                          <label className="option-label">Size <span className="size-chart-link">SIZE CHART</span></label>
                          <div className="size-options">
                              <div className="size-option">38</div>
                              <div className="size-option">39</div>
                              <div className="size-option">40</div>
                              <div className="size-option active">41</div>
                              <div className="size-option">42</div>
                              <div className="size-option">43</div>
                              <div className="size-option">44</div>
                              <div className="size-option">45</div>
                              <div className="size-option">46</div>
                              <div className="size-option">47</div>
                          </div>
                      </div>

                      <div className="action-buttons">
                          <button className="btn-add-cart">
                              ADD TO CART
                          </button>
                          <button className="btn-wishlist">
                              <i className="far fa-heart"></i>
                          </button>
                      </div>

                      <button className="btn-buy-now" style={{width: "100%" , marginBottom: "2rem"}}>BUY IT NOW</button>

                      <div className="product-description">
                          <h3 className="description-title">About the Product</h3>
                          <p className="description-text">Shadow Navy / Army Green</p>
                          <p className="description-text">
                              This product is excluded from all promotional discounts and offers.
                          </p>

                          <ul className="description-list">
                              <li>Pay over time in interest-free installments with Affirm, Klarna or Afterpay.</li>
                              <li>Join adiClub to get unlimited free standard shipping, returns, & exchanges.</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="recommendations">
          <div className="section-header">
              <h2 className="section-title">You may also like</h2>
              <div className="carousel-controls">
                  <button className="carousel-btn"><i className="fas fa-chevron-left"></i></button>
                  <button className="carousel-btn"><i className="fas fa-chevron-right"></i></button>
              </div>
          </div>

          <div className="product-carousel">
              <div className="product-card">
                  <span className="badge-new">New</span>
                  <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200" alt="Product"/>
                  </div>
                  <h4 className="card-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                  <div className="card-footer">
                      <span>VIEW PRODUCT</span>
                      <span>$125</span>
                  </div>
              </div>

              <div className="product-card">
                  <span className="badge-new">New</span>
                  <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Product"/>
                  </div>
                  <h4 className="card-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                  <div className="card-footer">
                      <span>VIEW PRODUCT</span>
                      <span>$125</span>
                  </div>
              </div>

              <div className="product-card">
                  <span className="badge-new">New</span>
                  <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=200" alt="Product"/>
                  </div>
                  <h4 className="card-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                  <div className="card-footer">
                      <span>VIEW PRODUCT</span>
                      <span>$125</span>
                  </div>
              </div>

              <div className="product-card">
                  <span className="badge-new">New</span>
                  <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200" alt="Product"/>
                  </div>
                  <h4 className="card-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                  <div className="card-footer">
                      <span>VIEW PRODUCT</span>
                      <span>$125</span>
                  </div>
              </div>
          </div>

          <div className="carousel-dots">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails