import React from 'react'
import {Link} from 'react-router-dom'
import './Products.css'
const Products = () => {
  return (
    <div>
    <div className="hero-banner">
        <div className="hero-content">
            <h3>Limited time only</h3>
            <h1>Get 30% off</h1>
            <p>Sneakers made with your comfort in mind so you can put all of your focus into your next session.</p>
        </div>
        <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500" alt="Adidas Shoe"/>
        </div>
    </div>

    <div className="listing-container">
        <div className="page-header">
            <div>
                <h1 className="page-title">Life Style Shoes</h1>
                <p className="item-count">122 Items</p>
            </div>
            <div className="sort-dropdown">
                <span style={{fontWeight: "600"}}>TRENDING</span>
                <select>
                    <option>Trending</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                </select>
            </div>
        </div>

        <div className="content-grid">
            <aside className="filters-sidebar">
                <h3 className="filter-title">Filters</h3>

                <div className="filter-section">
                    <div className="filter-header">
                        <span className="filter-label">Refine By</span>
                        <i className="fas fa-chevron-up"></i>
                    </div>
                    <div className="refine-tags">
                        <span className="tag">Runners</span>
                        <span className="tag outline">Sneaker</span>
                    </div>
                </div>

                <div className="filter-section">
                    <div className="filter-header">
                        <span className="filter-label">Size</span>
                        <i className="fas fa-chevron-up"></i>
                    </div>
                    <div className="size-grid">
                        <div className="size-btn active">38</div>
                        <div className="size-btn">39</div>
                        <div className="size-btn">40</div>
                        <div className="size-btn">41</div>
                        <div className="size-btn">42</div>
                        <div className="size-btn">43</div>
                        <div className="size-btn">44</div>
                        <div className="size-btn">45</div>
                        <div className="size-btn">46</div>
                        <div className="size-btn">47</div>
                    </div>
                </div>

                <div className="filter-section">
                    <div className="filter-header">
                        <span className="filter-label">Color</span>
                        <i className="fas fa-chevron-up"></i>
                    </div>
                    <div className="color-grid">
                        <div className="color-swatch" style={{ backgroundColor: '#ffa500' }}></div>
                        <div className="color-swatch" style={{ backgroundColor: '#000' }}></div>
                        <div className="color-swatch" style={{ backgroundColor: '#2d5016' }}></div>
                        <div className="color-swatch" style={{ backgroundColor: '#4a4a4a' }}></div>
                        <div className="color-swatch" style={{ backgroundColor: '#ff6b6b' }}></div>
                        <div className="color-swatch" style={{ backgroundColor: '#d3d3d3' }}></div>
                        <div className="color-swatch" style={{ backgroundColor: '#708090' }}></div>
                        <div className="color-swatch" style={{ backgroundColor: '#8b4513' }}></div>
                        <div className="color-swatch" style={{ backgroundColor: '#daa520' }}></div>
                    </div>
                </div>

                <div className="filter-section">
                    <div className="filter-header">
                        <span className="filter-label">Size</span>
                        <i className="fas fa-chevron-up"></i>
                    </div>
                    <div className="filter-checkbox">
                        <input type="checkbox" id="casual"/>
                        <label for="casual">Casual shoes</label>
                    </div>
                    <div className="filter-checkbox">
                        <input type="checkbox" id="runners"/>
                        <label for="runners">Runners</label>
                    </div>
                    <div className="filter-checkbox">
                        <input type="checkbox" id="hiking"/>
                        <label for="hiking">Hiking</label>
                    </div>
                    <div className="filter-checkbox">
                        <input type="checkbox" id="sneaker"/>
                        <label for="sneaker">Sneaker</label>
                    </div>
                    <div className="filter-checkbox">
                        <input type="checkbox" id="basketball"/>
                        <label for="basketball">Basketball</label>
                    </div>
                    <div className="filter-checkbox">
                        <input type="checkbox" id="golf"/>
                        <label for="golf">Golf</label>
                    </div>
                    <div className="filter-checkbox">
                        <input type="checkbox" id="outdoor"/>
                        <label for="outdoor">Outdoor</label>
                    </div>
                </div>

                <div className="filter-section">
                    <div className="filter-header">
                        <span className="filter-label">Gender</span>
                        <i className="fas fa-chevron-up"></i>
                    </div>
                    <div className="filter-checkbox">
                        <input type="checkbox" id="men"/>
                        <label for="men">Men</label>
                    </div>
                    <div className="filter-checkbox">
                        <input type="checkbox" id="women"/>
                        <label for="women">Women</label>
                    </div>
                </div>

                <div className="filter-section">
                    <div className="filter-header">
                        <span className="filter-label">Price</span>
                        <i className="fas fa-chevron-up"></i>
                    </div>
                    <div className="price-range">
                        <input type="range" className="form-range" min="0" max="1000" value="500"/>
                        <div className="price-inputs">
                            <span className="price-input">$0</span>
                            <span className="price-input">$1000</span>
                        </div>
                    </div>
                </div>
            </aside>

            <div className="products-grid">
                <div className="product-card">
                    <div>
                        <span className="badge new">New</span>
                        <div className="product-image">
                            <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200" alt="Shoe"/>
                        </div>
                    </div>
                    <div className="product-info">
                        <h3>ULTRABOOST 1.0 MIAMI</h3>
                        <p>Green</p>
                        <div className="product-footer">
                            <Link to={"/details"}><span>VIEW PRODUCT</span></Link>
                            <span className="price">$125</span>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <span className="badge new">New</span>
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=200" alt="Shoe"/>
                    </div>
                    <div className="product-info">
                        <h3>ADIDAS OZELIA SHOES</h3>
                        <p>Green</p>
                        <div className="product-footer">
                            <Link to={"/details"}><span>VIEW PRODUCT</span></Link>
                            <span className="price">$125</span>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <span className="badge new">New</span>
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200" alt="Shoe"/>
                    </div>
                    <div className="product-info">
                        <h3>ADIDAS 4DFWD 2 RUNNING SHOES</h3>
                        <p>Orange</p>
                        <div className="product-footer">
                            <Link to={"/details"}><span>VIEW PRODUCT</span></Link>
                            <span className="price">$125</span>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <span className="badge new">New</span>
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Shoe"/>
                    </div>
                    <div className="product-info">
                        <h3>ULTRABOOST 1.0 MIAMI</h3>
                        <p>Green</p>
                        <div className="product-footer">
                            <Link to={"/details"}><span>VIEW PRODUCT</span></Link>
                            <span className="price">$125</span>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <span className="badge new">New</span>
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" alt="Shoe"/>
                    </div>
                    <div className="product-info">
                        <h3>ADIDAS OZELIA SHOES</h3>
                        <p>Green</p>
                        <div className="product-footer">
                            <Link to={"/details"}><span>VIEW PRODUCT</span></Link>
                            <span className="price">$125</span>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <span className="badge new">New</span>
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200" alt="Shoe"/>
                    </div>
                    <div className="product-info">
                        <h3>ADIDAS 4DFWD 2 RUNNING SHOES</h3>
                        <p>Navy</p>
                        <div className="product-footer">
                            <Link to={"/details"}><span>VIEW PRODUCT</span></Link>
                            <span className="price">$125</span>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <span className="badge new">New</span>
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200" alt="Shoe"/>
                    </div>
                    <div className="product-info">
                        <h3>ULTRABOOST 1.0 MIAMI</h3>
                        <p>Green</p>
                        <div className="product-footer">
                            <Link to={"/details"}><span>VIEW PRODUCT</span></Link>
                            <span className="price"><span className="original">$125</span> $94</span>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <span className="badge sale">20% off</span>
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=200" alt="Shoe"/>
                    </div>
                    <div className="product-info">
                        <h3>ADIDAS OZELIA SHOES</h3>
                        <p>Green</p>
                        <div className="product-footer">
                            <Link to={"/details"}><span>VIEW PRODUCT</span></Link>
                            <span className="price">$125</span>
                        </div>
                    </div>
                </div>

                <div className="product-card">
                    <span className="badge new">New</span>
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200" alt="Shoe"/>
                    </div>
                    <div className="product-info">
                        <h3>ADIDAS 4DFWD 2 RUNNING SHOES</h3>
                        <p>White/Blue</p>
                        <div className="product-footer">
                            <Link to={"/details"}><span>VIEW PRODUCT</span></Link>
                            <span className="price">$125</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="pagination-container">
            <button className="page-btn"><i className="fas fa-chevron-left"></i> PREVIOUS</button>
            <button className="page-btn">1</button>
            <button className="page-btn active">2</button>
            <button className="page-btn">3</button>
            <button className="page-btn">4</button>
            <button className="page-btn">...</button>
            <button className="page-btn">10</button>
            <button className="page-btn">NEXT <i className="fas fa-chevron-right"></i></button>
        </div>
    </div>
    </div>
  )
}

export default Products