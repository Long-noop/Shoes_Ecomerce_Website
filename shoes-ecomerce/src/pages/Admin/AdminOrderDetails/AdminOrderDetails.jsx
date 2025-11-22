import React from 'react'
import './AdminOrderDetails.scss'
const AdminOrderDetails = () => {
  return (
    <div className="page-body admin-order-details">
        <div className="container-fluid">
            <div className="page-header-custom p-3">
                <div>
                    <h2 className="page-title mb-1">Orders Details</h2>
                    <div className="breadcrumb-custom">Home {'>'} Order List {'>'} Order Details</div>
                </div>
            </div>

            <div className="order-header">
                <div className="order-title-row">
                    <div className="order-title">
                        Orders ID: #6743
                        <span className="status-badge">Pending</span>
                    </div>
                    <div className="order-actions">
                        <select className="btn">
                            <option selected disabled hidden>Change Status</option>
                            <option value="Pending">Pending</option>
                            <option value="Processing">Processing</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                        <button className="btn-action">
                            <i className="ti ti-printer"></i>
                        </button>
                        <button className="btn-action">Save</button>
                    </div>
                </div>
                <div className="order-date">
                    <i className="ti ti-calendar"></i>
                    Feb 16,2022 - Feb 20,2022
                </div>
            </div>

            <div className="info-cards-row">
                <div className="info-card">
                    <div className="info-card-header">
                        <div className="info-icon customer">
                            <i className="ti ti-user"></i>
                        </div>
                        <div className="info-title">Customer</div>
                    </div>
                    <div className="info-details">
                        <div><span className="info-label">Full Name:</span> Jane Cooper</div>
                        <div><span className="info-label">Email:</span> janecooper@gmail.com</div>
                        <div><span className="info-label">Phone:</span> +900 231 1212</div>
                    </div>
                    <button className="btn-view-profile">View profile</button>
                </div>

                <div className="info-card">
                    <div className="info-card-header">
                        <div className="info-icon order">
                            <i className="ti ti-shopping-cart"></i>
                        </div>
                        <div className="info-title">Order Info</div>
                    </div>
                    <div className="info-details">
                        <div><span className="info-label">Shipping:</span> Next express</div>
                        <div><span className="info-label">Payment Method:</span> Paypal</div>
                        <div><span className="info-label">Status:</span> Pending</div>
                    </div>
                    <button className="btn-view-profile">Download info</button>
                </div>

                <div className="info-card">
                    <div className="info-card-header">
                        <div className="info-icon deliver">
                            <i className="ti ti-shopping-bag"></i>
                        </div>
                        <div className="info-title">Deliver to</div>
                    </div>
                    <div className="info-details">
                        <div><span className="info-label">Address:</span> Santa Ana, Illinois</div>
                        <div>85342 2345 Westheimer Rd.</div>
                        <div>Block 9A</div>
                    </div>
                    <button className="btn-view-profile">View profile</button>
                </div>
            </div>

            <div className="payment-note-row">
                <div className="payment-card">
                    <div className="payment-title">Payment Info</div>
                    <div className="card-info">
                        <div className="card-logo"></div>
                        <div>
                            <div className="card-number">Master Card **** **** 6557</div>
                        </div>
                    </div>
                    <div className="info-details">
                        <div><span className="info-label">Business name:</span> Jane Cooper</div>
                        <div><span className="info-label">Phone:</span> +900 231 1212</div>
                    </div>
                </div>

                <div className="note-card">
                    <div className="note-title">Note</div>
                    <textarea className="note-textarea" placeholder="Type some notes"></textarea>
                </div>
            </div>

            <div className="products-card">
                <div className="products-header">
                    <div className="products-title">Products</div>
                    <div className="products-menu">
                        <i className="ti ti-dots-vertical"></i>
                    </div>
                </div>

                <table className="products-table">
                    <thead>
                        <tr>
                            <th><input type="checkbox"/></th>
                            <th>Product Name</th>
                            <th>Order ID</th>
                            <th>Quantity</th>
                            <th style={{textAlign: "right"}}>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>
                                <div className="product-cell">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="product-thumb" alt="Product"/>
                                    <span className="product-name">Adidas ultra boost</span>
                                </div>
                            </td>
                            <td>#25421</td>
                            <td>2</td>
                            <td style={{textAlign: "right", fontWeight: 600}}>$800.40</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>
                                <div className="product-cell">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="product-thumb" alt="Product"/>
                                    <span className="product-name">Adidas ultra boost</span>
                                </div>
                            </td>
                            <td>#25421</td>
                            <td>2</td>
                            <td style={{textAlign: "right", fontWeight: 600}}>$800.40</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>
                                <div className="product-cell">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="product-thumb" alt="Product"/>
                                    <span className="product-name">Adidas ultra boost</span>
                                </div>
                            </td>
                            <td>#25421</td>
                            <td>2</td>
                            <td style={{textAlign: "right", fontWeight: 600}}>$800.40</td>
                        </tr>
                        <tr>
                            <td><input type="checkbox"/></td>
                            <td>
                                <div className="product-cell">
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="product-thumb" alt="Product"/>
                                    <span className="product-name">Adidas ultra boost</span>
                                </div>
                            </td>
                            <td>#25421</td>
                            <td>2</td>
                            <td style={{textAlign: "right", fontWeight: 600}}>$800.40</td>
                        </tr>
                    </tbody>
                </table>

                <div className="order-summary">
                    <div className="summary-row">
                        <span className="summary-label">Subtotal</span>
                        <span className="summary-value">$3,201.6</span>
                    </div>
                    <div className="summary-row">
                        <span className="summary-label">Tax (20%)</span>
                        <span className="summary-value">$640.32</span>
                    </div>
                    <div className="summary-row">
                        <span className="summary-label">Discount</span>
                        <span className="summary-value">$0</span>
                    </div>
                    <div className="summary-total">
                        <span>Total</span>
                        <span>$3841.92</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AdminOrderDetails