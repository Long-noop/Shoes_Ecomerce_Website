import React from 'react'
import './AdminProductDetails.scss'
const AdminProductDetails = () => {
  return (
    <div className="page-body admin-site">
        <div className="container-fluid">
            <div className="page-header-custom p-3">
                <div>
                    <h2 className="page-title mb-1">Product Details</h2>
                    <div className="breadcrumb-custom">Home {'>'} All Products {'>'} Add New Product</div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-7">
                    <div className="form-container">
                        <div className="form-section">
                            <label className="form-label">Product Name</label>
                            <input type="text" className="form-input" placeholder="Type name here"/>
                        </div>

                        <div className="form-section">
                            <label className="form-label">Description</label>
                            <textarea className="form-input form-textarea" placeholder="Type Description here"></textarea>
                        </div>

                        <div className="form-section">
                            <label className="form-label">Category</label>
                            <input type="text" className="form-input" placeholder="Type Category here"/>
                        </div>

                        <div className="form-section">
                            <label className="form-label">Brand Name</label>
                            <input type="text" className="form-input" placeholder="Type brand name here"/>
                        </div>

                        <div className="form-section">
                            <div className="form-row">
                                <div>
                                    <label className="form-label">SKU</label>
                                    <input type="text" className="form-input" placeholder="Fox-3983"/>
                                </div>
                                <div>
                                    <label className="form-label">Stock Quantity</label>
                                    <input type="number" className="form-input" placeholder="1258"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <div className="form-row">
                                <div>
                                    <label className="form-label">Regular Price</label>
                                    <input type="text" className="form-input" placeholder="$1000"/>
                                </div>
                                <div>
                                    <label className="form-label">Sale Price</label>
                                    <input type="text" className="form-input" placeholder="$450"/>
                                </div>
                            </div>
                        </div>

                        <div className="form-section">
                            <label className="form-label">Tag</label>
                            <div className="tag-container">
                                <span className="tag-item">
                                    Adidas
                                    <span className="tag-remove">×</span>
                                </span>
                                <span className="tag-item">
                                    Shoes
                                    <span className="tag-remove">×</span>
                                </span>
                                <span className="tag-item">
                                    Sneakers
                                    <span className="tag-remove">×</span>
                                </span>
                                <span className="tag-item">
                                    Ultraboost
                                    <span className="tag-remove">×</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="form-container">
                        <div className="product-preview">
                            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" alt="Product Preview"/>
                        </div>

                        <div className="gallery-section">
                            <label className="form-label">Product Gallery</label>
                            
                            <div className="upload-zone" id="uploadZone">
                                <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <div className="upload-text">
                                    Drop your imager here, or browse<br/>
                                    Jpeg, png are allowed
                                </div>
                                <input type="file" id="fileInput" style={{display: "none"}} multiple accept="image/*"/>
                            </div>

                            <div className="gallery-list">
                                <div className="gallery-item">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="gallery-thumb" alt="Product"/>
                                    <div className="gallery-info">
                                        <div className="gallery-name">Product thumbnail.png</div>
                                        <div className="gallery-progress">
                                            <div className="gallery-progress-bar" style={{width: "100%"}}></div>
                                        </div>
                                    </div>
                                    <i className="ti ti-circle-check gallery-check"></i>
                                </div>

                                <div className="gallery-item">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="gallery-thumb" alt="Product"/>
                                    <div className="gallery-info">
                                        <div className="gallery-name">Product thumbnail.png</div>
                                        <div className="gallery-progress">
                                            <div className="gallery-progress-bar" style={{width: "100%"}}></div>
                                        </div>
                                    </div>
                                    <i className="ti ti-circle-check gallery-check"></i>
                                </div>

                                <div className="gallery-item">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="gallery-thumb" alt="Product"/>
                                    <div className="gallery-info">
                                        <div className="gallery-name">Product thumbnail.png</div>
                                        <div className="gallery-progress">
                                            <div className="gallery-progress-bar" style={{width: "100%"}}></div>
                                        </div>
                                    </div>
                                    <i className="ti ti-circle-check gallery-check"></i>
                                </div>

                                <div className="gallery-item">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="gallery-thumb" alt="Product"/>
                                    <div className="gallery-info">
                                        <div className="gallery-name">Product thumbnail.png</div>
                                        <div className="gallery-progress">
                                            <div className="gallery-progress-bar" style={{width: "100%"}}></div>
                                        </div>
                                    </div>
                                    <i className="ti ti-circle-check gallery-check"></i>
                                </div>
                            </div>
                        </div>

                        <div className="action-buttons">
                            <button className="btn-delete">DELETE</button>
                            <button className="btn-cancel">CANCEL</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminProductDetails