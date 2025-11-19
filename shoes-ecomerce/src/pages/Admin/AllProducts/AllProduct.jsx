import React from 'react'
import './AllProduct.css'
const AllProduct = () => {
  return (
    <div class="page-body">
        <div class="container-fluid">
            <div class="page-header-custom p-3">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 class="page-title mb-1">All Products</h2>
                        <div class="breadcrumb-custom">Home {'>'} All Products</div>
                    </div>
                    <button class="btn-add-product" onclick="window.location.href='./admin-new-product.html'">
                        <i class="ti ti-plus"></i>
                        ADD NEW PRODUCT
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4">
                    <div class="product-card">
                        <div class="product-header">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" alt="Adidas Ultra boost" class="product-image"/>
                            <div class="product-info">
                                <div class="product-name">Adidas Ultra boost</div>
                                <div class="product-category">Sneaker</div>
                                <div class="product-price">$110.40</div>
                            </div>
                            <div class="product-menu">
                                <i class="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div class="product-summary">
                            <div class="summary-title">Summary</div>
                            <div class="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div class="product-stats">
                            <div class="stat-row">
                                <span class="stat-label">Sales</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">
                                    <i class="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">Remaining Products</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

/                <div class="col-md-4">
                    <div class="product-card">
                        <div class="product-header">
                            <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Adidas Ultra boost" class="product-image"/>
                            <div class="product-info">
                                <div class="product-name">Adidas Ultra boost</div>
                                <div class="product-category">Sneaker</div>
                                <div class="product-price">$100.40</div>
                            </div>
                            <div class="product-menu">
                                <i class="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div class="product-summary">
                            <div class="summary-title">Summary</div>
                            <div class="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div class="product-stats">
                            <div class="stat-row">
                                <span class="stat-label">Sales</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">
                                    <i class="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">Remaining Products</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

/                <div class="col-md-4">
                    <div class="product-card">
                        <div class="product-header">
                            <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=200" alt="Adidas Ultra boost" class="product-image"/>
                            <div class="product-info">
                                <div class="product-name">Adidas Ultra boost</div>
                                <div class="product-category">Sneaker</div>
                                <div class="product-price">$800.40</div>
                            </div>
                            <div class="product-menu">
                                <i class="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div class="product-summary">
                            <div class="summary-title">Summary</div>
                            <div class="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div class="product-stats">
                            <div class="stat-row">
                                <span class="stat-label">Sales</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">
                                    <i class="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">Remaining Products</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

/                <div class="col-md-4">
                    <div class="product-card">
                        <div class="product-header">
                            <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200" alt="ADIZERO SL RUNNING" class="product-image"/>
                            <div class="product-info">
                                <div class="product-name">ADIZERO SL RUNNING</div>
                                <div class="product-category">Running</div>
                                <div class="product-price">$64.40</div>
                            </div>
                            <div class="product-menu">
                                <i class="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div class="product-summary">
                            <div class="summary-title">Summary</div>
                            <div class="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div class="product-stats">
                            <div class="stat-row">
                                <span class="stat-label">Sales</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">
                                    <i class="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">Remaining Products</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="product-card">
                        <div class="product-header">
                            <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200" alt="ULTRABOOST CLEATS" class="product-image"/>
                            <div class="product-info">
                                <div class="product-name">ULTRABOOST CLEATS</div>
                                <div class="product-category">Sneaker</div>
                                <div class="product-price">$800.40</div>
                            </div>
                            <div class="product-menu">
                                <i class="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div class="product-summary">
                            <div class="summary-title">Summary</div>
                            <div class="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div class="product-stats">
                            <div class="stat-row">
                                <span class="stat-label">Sales</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">
                                    <i class="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">Remaining Products</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="product-card">
                        <div class="product-header">
                            <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=200" alt="FORUM EXHIBIT LOW" class="product-image"/>
                            <div class="product-info">
                                <div class="product-name">FORUM EXHIBIT LOW</div>
                                <div class="product-category">Sneaker</div>
                                <div class="product-price">$74.00</div>
                            </div>
                            <div class="product-menu">
                                <i class="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div class="product-summary">
                            <div class="summary-title">Summary</div>
                            <div class="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div class="product-stats">
                            <div class="stat-row">
                                <span class="stat-label">Sales</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 10%"></div>
                                </div>
                                <span class="stat-value">
                                    <i class="ti ti-trending-up stat-icon"></i>
                                    109
                                </span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">Remaining Products</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">1500</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="product-card">
                        <div class="product-header">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" alt="Adidas Ultra boost" class="product-image"/>
                            <div class="product-info">
                                <div class="product-name">Adidas Ultra boost</div>
                                <div class="product-category">Sneaker</div>
                                <div class="product-price">$110.40</div>
                            </div>
                            <div class="product-menu">
                                <i class="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div class="product-summary">
                            <div class="summary-title">Summary</div>
                            <div class="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div class="product-stats">
                            <div class="stat-row">
                                <span class="stat-label">Sales</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">
                                    <i class="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">Remaining Products</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="product-card">
                        <div class="product-header">
                            <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Adidas Ultra boost" class="product-image"/>
                            <div class="product-info">
                                <div class="product-name">Adidas Ultra boost</div>
                                <div class="product-category">Sneaker</div>
                                <div class="product-price">$100.40</div>
                            </div>
                            <div class="product-menu">
                                <i class="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div class="product-summary">
                            <div class="summary-title">Summary</div>
                            <div class="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div class="product-stats">
                            <div class="stat-row">
                                <span class="stat-label">Sales</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">
                                    <i class="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">Remaining Products</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="product-card">
                        <div class="product-header">
                            <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=200" alt="Adidas Ultra boost" class="product-image"/>
                            <div class="product-info">
                                <div class="product-name">Adidas Ultra boost</div>
                                <div class="product-category">Sneaker</div>
                                <div class="product-price">$800.40</div>
                            </div>
                            <div class="product-menu">
                                <i class="ti ti-dots-vertical"></i>
                            </div>
                        </div>
                        <div class="product-summary">
                            <div class="summary-title">Summary</div>
                            <div class="summary-text">Long distance running requires a lot from athletes.</div>
                        </div>
                        <div class="product-stats">
                            <div class="stat-row">
                                <span class="stat-label">Sales</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">
                                    <i class="ti ti-trending-up stat-icon"></i>
                                    1269
                                </span>
                            </div>
                            <div class="stat-row">
                                <span class="stat-label">Remaining Products</span>
                                <div class="stat-bar">
                                    <div class="stat-bar-fill" style="width: 100%"></div>
                                </div>
                                <span class="stat-value">1269</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pagination">
                <button class="page-btn active">1</button>
                <button class="page-btn">2</button>
                <button class="page-btn">3</button>
                <button class="page-btn">4</button>
                <button class="page-btn">...</button>
                <button class="page-btn">10</button>
                <button class="page-btn page-btn-next">
                    NEXT
                    <i class="ti ti-chevron-right"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default AllProduct