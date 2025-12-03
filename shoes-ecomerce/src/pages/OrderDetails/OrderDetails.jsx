import React, { useEffect, useState } from 'react'
import './OrderDetails.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { orderService } from '../../services/orderService';

const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadOrder();
    }, [id]);

    const loadOrder = async () => {
        setLoading(true);
        try {
            const response = await orderService.getOrder(id);
            if (response.success) {
                setOrder(response.data);
            }
        } catch (error) {
            alert('Failed to load order');
            navigate('/my-account/orders');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusChange = async (newStatus) => {
        try {
        const response = await orderService.updateOrderStatus(id, newStatus);
        if (response.success) {
            alert('Order status updated successfully');
            loadOrder();
        }
        } catch (error) {
        alert(error.message || 'Failed to update order status');
        }
    };

    const getStatusBadge = (status) => {
        const badges = {
        pending: 'bg-warning',
        processing: 'bg-info',
        shipped: 'bg-primary',
        completed: 'bg-success',
        cancelled: 'bg-danger',
        };
        return badges[status] || 'bg-secondary';
    };

    if (loading) {
        return (
        <div className="page-body">
            <div className="container-xl">
            <div className="text-center py-5">
                <div className="spinner-border" role="status"></div>
            </div>
            </div>
        </div>
        );
    }

    if (!order) return null;

    const items = order.items || [];
    
    return (
        <div className="page-body user-order-details mt-3">
            <div className="container-fluid m-auto">
                <div className="page-header-custom p-3">
                    <div>
                        <h2 className="section-title">Orders Details</h2>
                        <p className="section-subtitle">View and manage your order details</p>
                    </div>
                </div>
                <div className="text-end">
                    <button
                        onClick={() => navigate('/my-account/orders')}
                        className="btn btn-dark btn-sm mb-3"
                    >
                        <i className="ti ti-arrow-left me-2"></i>
                        Back to Orders
                    </button>
                </div>
                <div className="order-header">
                    <div className="order-title-row">
                        <div className="order-title">
                            Orders ID: #{order.id}
                            <span className={`badge ${getStatusBadge(order.status)}`} style={{color:"white"}}>{order.status}</span>
                        </div>
                    </div>
                    <div className="order-date">
                        <i className="ti ti-calendar"></i>
                            {new Date(order.created_at).toLocaleDateString()}
                        <small className="text-muted">
                            {new Date(order.created_at).toLocaleTimeString()}
                        </small>
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
                            <div><span className="info-label">Status:</span> {order.status}</div>
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
                        <textarea className="note-textarea" placeholder="" disabled={true}></textarea>
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
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th style={{textAlign: "right"}}>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => (
                            <tr>
                                <td># {item.product_id}</td>
                                <td>
                                    <div className="product-cell">
                                        <img src={item.image_url} className="product-thumb" alt="Product"/>
                                        <span className="product-name">{item.product_name}</span>
                                    </div>
                                </td>
                                {/* <td>{item.product_name}</td> */}
                                <td>{item.quantity}</td>
                                <td style={{fontWeight: 600}}>${parseFloat(item.price).toFixed(2)}</td>
                                <td style={{textAlign: "right", fontWeight: 600}}>${parseFloat(item.total).toFixed(2)}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="order-summary">
                        <div className="summary-row">
                            <span className="summary-label">Subtotal</span>
                            <span className="summary-value">${parseFloat(order.total_price).toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span className="summary-label">Tax (0%)</span>
                            <span className="summary-value">$0.00</span>
                        </div>
                        <div className="summary-row">
                            <span className="summary-label">Delivery (Free)</span>
                            <span className="summary-value">$0.00</span>
                        </div>
                        <div className="summary-row">
                            <span className="summary-label">Discount</span>
                            <span className="summary-value">$0</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>${parseFloat(order.total_price).toFixed(2)}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OrderDetails