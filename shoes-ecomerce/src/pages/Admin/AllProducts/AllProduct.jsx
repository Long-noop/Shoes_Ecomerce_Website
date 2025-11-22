import React from 'react'
import './AllProduct.scss'
import { Link, Outlet } from "react-router-dom";
const AllProduct = () => {
  return (
    <div className="page-body admin-products">
        <div className="container-fluid">
            <div className="page-header-custom p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="page-title mb-1">All Products</h2>
                        <div className="breadcrumb-custom">Home {'>'} All Products</div>
                    </div>
                    <Link to='/admin/products/add'>
                        <button className="btn-add-product">
                            <i className="ti ti-plus"></i>
                            ADD NEW PRODUCT
                        </button>
                    </Link>
                    <Outlet/>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-header">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" alt="Adidas Ultra boost" className="product-image"/>
                            <div className="product-info">
                                <div className="product-name">Adidas Ultra boost</div>
                                <div className="product-category">Sneaker</div>
                                <div className="product-price">$110.40</div>
                            </div>
                            <div className="product-menu">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div className="product-summary">
                            <div className="summary-title">Summary</div>
                            <div className="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div className="product-stats">
                            <div className="stat-row">
                                <span className="stat-label">Sales</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">
                                    <i className="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">Remaining Products</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-header">
                            <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Adidas Ultra boost" className="product-image"/>
                            <div className="product-info">
                                <div className="product-name">Adidas Ultra boost</div>
                                <div className="product-category">Sneaker</div>
                                <div className="product-price">$100.40</div>
                            </div>
                            <div className="product-menu">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div className="product-summary">
                            <div className="summary-title">Summary</div>
                            <div className="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div className="product-stats">
                            <div className="stat-row">
                                <span className="stat-label">Sales</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">
                                    <i className="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">Remaining Products</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-header">
                            <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=200" alt="Adidas Ultra boost" className="product-image"/>
                            <div className="product-info">
                                <div className="product-name">Adidas Ultra boost</div>
                                <div className="product-category">Sneaker</div>
                                <div className="product-price">$800.40</div>
                            </div>
                            <div className="product-menu">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div className="product-summary">
                            <div className="summary-title">Summary</div>
                            <div className="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div className="product-stats">
                            <div className="stat-row">
                                <span className="stat-label">Sales</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">
                                    <i className="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">Remaining Products</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-header">
                            <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200" alt="ADIZERO SL RUNNING" className="product-image"/>
                            <div className="product-info">
                                <div className="product-name">ADIZERO SL RUNNING</div>
                                <div className="product-category">Running</div>
                                <div className="product-price">$64.40</div>
                            </div>
                            <div className="product-menu">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div className="product-summary">
                            <div className="summary-title">Summary</div>
                            <div className="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div className="product-stats">
                            <div className="stat-row">
                                <span className="stat-label">Sales</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">
                                    <i className="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">Remaining Products</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-header">
                            <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200" alt="ULTRABOOST CLEATS" className="product-image"/>
                            <div className="product-info">
                                <div className="product-name">ULTRABOOST CLEATS</div>
                                <div className="product-category">Sneaker</div>
                                <div className="product-price">$800.40</div>
                            </div>
                            <div className="product-menu">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div className="product-summary">
                            <div className="summary-title">Summary</div>
                            <div className="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div className="product-stats">
                            <div className="stat-row">
                                <span className="stat-label">Sales</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">
                                    <i className="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">Remaining Products</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-header">
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200" alt="FORUM EXHIBIT LOW" className="product-image"/>
                            <div className="product-info">
                                <div className="product-name">FORUM EXHIBIT LOW</div>
                                <div className="product-category">Sneaker</div>
                                <div className="product-price">$74.00</div>
                            </div>
                            <div className="product-menu">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div className="product-summary">
                            <div className="summary-title">Summary</div>
                            <div className="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div className="product-stats">
                            <div className="stat-row">
                                <span className="stat-label">Sales</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "10%"}}></div>
                                </div>
                                <span className="stat-value">
                                    <i className="ti ti-trending-up stat-icon"></i>
                                    109
                                </span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">Remaining Products</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">1500</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-header">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" alt="Adidas Ultra boost" className="product-image"/>
                            <div className="product-info">
                                <div className="product-name">Adidas Ultra boost</div>
                                <div className="product-category">Sneaker</div>
                                <div className="product-price">$110.40</div>
                            </div>
                            <div className="product-menu">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div className="product-summary">
                            <div className="summary-title">Summary</div>
                            <div className="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div className="product-stats">
                            <div className="stat-row">
                                <span className="stat-label">Sales</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">
                                    <i className="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">Remaining Products</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-header">
                            <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Adidas Ultra boost" className="product-image"/>
                            <div className="product-info">
                                <div className="product-name">Adidas Ultra boost</div>
                                <div className="product-category">Sneaker</div>
                                <div className="product-price">$100.40</div>
                            </div>
                            <div className="product-menu">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div className="product-summary">
                            <div className="summary-title">Summary</div>
                            <div className="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div className="product-stats">
                            <div className="stat-row">
                                <span className="stat-label">Sales</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">
                                    <i className="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">Remaining Products</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="product-card">
                        <div className="product-header">
                            <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=200" alt="Adidas Ultra boost" className="product-image"/>
                            <div className="product-info">
                                <div className="product-name">Adidas Ultra boost</div>
                                <div className="product-category">Sneaker</div>
                                <div className="product-price">$800.40</div>
                            </div>
                            <div className="product-menu">
                                <i className="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div className="product-summary">
                            <div className="summary-title">Summary</div>
                            <div className="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div className="product-stats">
                            <div className="stat-row">
                                <span className="stat-label">Sales</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">
                                    <i className="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div className="stat-row">
                                <span className="stat-label">Remaining Products</span>
                                <div className="stat-bar">
                                    <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                </div>
                                <span className="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pagination">
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">...</button>
                <button className="page-btn">10</button>
                <button className="page-btn page-btn-next">
                    NEXT
                    <i className="ti ti-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AllProduct