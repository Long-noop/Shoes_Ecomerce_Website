import React, { useEffect, useState } from 'react'
import './Checkout.scss'
import { useNavigate } from 'react-router-dom';
import {useCart} from '../../contexts/CartContext'
import { orderService } from '../../services/orderService';
import { useAuth } from '../../contexts/AuthContext';

const Checkout = () => {
    const {isAuthenticated} = useAuth();
    const navigate = useNavigate();
    const {cartItems, total, loadCart} = useCart();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        loadCart();
    },[])

    const handlePlaceOrder = async () => {
        setLoading(true);
        try {
            const orderData = {
                total_price: total,
                items: cartItems.map(item => ({
                    product_id: item.product_id,
                    quantity: item.quantity,
                    price: item.price,
                })),
            };

            const response = await orderService.createOrder(orderData);
        
            if (response.success) {
                alert('Order placed successfully!');
                navigate('/my-account/orders');
            }
        } catch (error) {
            alert(error.message || 'Failed to place order');
        } finally {
            setLoading(false);
        }
    };
    
  return (
    <div className="checkout-container">
        {!isAuthenticated && ( 
            <div className="login-banner">
                Login and Checkout faster
            </div>
        )}
        <div className="row">
            <div className="col-lg-7">
                <div className="section-card">
                    <h2 className="section-title">Contact Details</h2>
                    <p className="section-subtitle">We will use these details to keep you inform about your delivery.</p>
                    
                    <div className="mb-3">
                        <input type="email" className="form-control" placeholder="Email"/>
                    </div>
                </div>

                <div className="section-card">
                    <h2 className="section-title">Shipping Address</h2>
                    
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="First Name*"/>
                        </div>
                        <div className="col-md-6">
                            <input type="text" className="form-control" placeholder="Last Name*"/>
                        </div>
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Find Delivery Address*"/>
                        <div className="helper-text">Start typing your street address or zip code for suggestion</div>
                    </div>

                    <div className="mb-3">
                        <input type="tel" className="form-control" placeholder="Phone Number*"/>
                        <div className="helper-text">E.g. (123) 456-7890</div>
                    </div>
                </div>

                <div className="section-card">
                    <h2 className="section-title">Delivery Options</h2>
                    
                    <div className="delivery-option selected">
                        <div>
                            <h5 className="mb-1" style={{fontWeight: "600"}}>Standard Delivery</h5>
                            <p className="mb-0 text-muted" style={{fontSize: "0.9rem"}}>Enter your address to see when you'll get your order</p>
                        </div>
                        <div className="delivery-price">$6.00</div>
                    </div>

                    <div className="delivery-option">
                        <div>
                            <h5 className="mb-1" style={{fontWeight: "600"}}>Collect in store</h5>
                            <p className="mb-0 text-muted" style={{fontSize: "0.9rem"}}>Pay now, collect in store</p>
                        </div>
                        <span className="free-badge">Free</span>
                    </div>
                </div>

                <div className="section-card">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="billingCheck" defaultChecked/>
                        <label className="form-check-label" htmlFor="billingCheck">
                            My billing and delivery information are the same
                        </label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ageCheck" defaultChecked/>
                        <label className="form-check-label" htmlFor="ageCheck">
                            I'm 13+ year old
                        </label>
                    </div>

                    <div className="mt-4 mb-3">
                        <p style={{fontWeight: "600"}}>Also want product updates with our newsletter?</p>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="newsletterCheck" defaultChecked/>
                        <label className="form-check-label" htmlFor="newsletterCheck">
                            Yes, I'd like to receive emails about exclusive sales and more.
                        </label>
                    </div>

                    <button className="btn-review" onClick={handlePlaceOrder} disabled={loading}>
                        {loading ? 'Processing...' : 'Place Order'}
                    </button>
                </div>
            </div>

            <div className="col-lg-5">
                <div className="order-summary">
                    <h3 className="summary-title">Order Summary</h3>
                    
                    <div className="summary-row">
                        <span>Subtotal:</span>
                        <span>${parseFloat(total).toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Delivery</span>
                        <span>Free</span>
                    </div>
                    <div className="summary-row">
                        <span>Sales Tax</span>
                        <span>$0.00</span>
                    </div>

                    <div className="summary-row total">
                        <span>Total</span>
                        <strong className="text-primary">${parseFloat(total).toFixed(2)}</strong>
                    </div>
                </div>

                <div className="section-card mt-3">
                    <h4 style={{fontWeight: "600", marginBottom: "1.5rem"}}>Order Details</h4>
                    {cartItems.map(item => (
                        <div key={item.id} className="product-card">
                            <div className="product-info">
                                <div className="product-image">
                                    <img src={item.image_url} alt={item.name}/>
                                </div>
                                <div className="product-details">
                                    <h5>{item.name}</h5>
                                    <p>Size 10 &nbsp;&nbsp;&nbsp; Quantity {item.quantity}</p>
                                    <div className="product-price">${(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout