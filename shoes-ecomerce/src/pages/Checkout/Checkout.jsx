import React from 'react'
import './Checkout.css'
const Checkout = () => {
  return (
    <div class="checkout-container">
        <div class="login-banner">
            Login and Checkout faster
        </div>

        <div class="row">
            <div class="col-lg-7">
                <div class="section-card">
                    <h2 class="section-title">Contact Details</h2>
                    <p class="section-subtitle">We will use these details to keep you inform about your delivery.</p>
                    
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email"/>
                    </div>
                </div>

                <div class="section-card">
                    <h2 class="section-title">Shipping Address</h2>
                    
                    <div class="row mb-3">
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="First Name*"/>
                        </div>
                        <div class="col-md-6">
                            <input type="text" class="form-control" placeholder="Last Name*"/>
                        </div>
                    </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Find Delivery Address*"/>
                        <div class="helper-text">Start typing your street address or zip code for suggestion</div>
                    </div>

                    <div class="mb-3">
                        <input type="tel" class="form-control" placeholder="Phone Number*"/>
                        <div class="helper-text">E.g. (123) 456-7890</div>
                    </div>
                </div>

                <div class="section-card">
                    <h2 class="section-title">Delivery Options</h2>
                    
                    <div class="delivery-option selected">
                        <div>
                            <h5 class="mb-1" style={{fontWeight: "600"}}>Standard Delivery</h5>
                            <p class="mb-0 text-muted" style={{fontSize: "0.9rem"}}>Enter your address to see when you'll get your order</p>
                        </div>
                        <div class="delivery-price">$6.00</div>
                    </div>

                    <div class="delivery-option">
                        <div>
                            <h5 class="mb-1" style={{fontWeight: "600"}}>Collect in store</h5>
                            <p class="mb-0 text-muted" style={{fontSize: "0.9rem"}}>Pay now, collect in store</p>
                        </div>
                        <span class="free-badge">Free</span>
                    </div>
                </div>

                <div class="section-card">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="billingCheck" checked/>
                        <label class="form-check-label" for="billingCheck">
                            My billing and delivery information are the same
                        </label>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="ageCheck" checked/>
                        <label class="form-check-label" for="ageCheck">
                            I'm 13+ year old
                        </label>
                    </div>

                    <div class="mt-4 mb-3">
                        <p style={{fontWeight: "600"}}>Also want product updates with our newsletter?</p>
                    </div>

                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="newsletterCheck" checked/>
                        <label class="form-check-label" for="newsletterCheck">
                            Yes, I'd like to receive emails about exclusive sales and more.
                        </label>
                    </div>

                    <button class="btn-review">REVIEW AND PAY</button>
                </div>
            </div>

            <div class="col-lg-5">
                <div class="order-summary">
                    <h3 class="summary-title">Order Summary</h3>
                    
                    <div class="summary-row">
                        <span>1 ITEM</span>
                        <span>$130.00</span>
                    </div>
                    <div class="summary-row">
                        <span>Delivery</span>
                        <span>$6.99</span>
                    </div>
                    <div class="summary-row">
                        <span>Sales Tax</span>
                        <span>-</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total</span>
                        <span>$130.00</span>
                    </div>
                </div>

                <div class="section-card mt-3">
                    <h4 style={{fontWeight: "600", marginBottom: "1.5rem"}}>Order Details</h4>
                    
                    <div class="product-card">
                        <div class="product-info">
                            <div class="product-image">
                                <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=150" alt="Dropset Trainer Shoes"/>
                            </div>
                            <div class="product-details">
                                <h5>DROPSET TRAINER SHOES</h5>
                                <p>Men's Road Running Shoes</p>
                                <p>Enamel Blue/ University White</p>
                                <p>Size 10 &nbsp;&nbsp;&nbsp; Quantity 1</p>
                                <div class="product-price">$130.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout