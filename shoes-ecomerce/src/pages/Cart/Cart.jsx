import React from 'react'
import './Cart.css'
import {Link} from 'react-router-dom'
const Cart = () => {
  return (
    <div>
    <div class="container">
        <div class="promo-banner">
            <h2>Saving to celebrate</h2>
            <p>Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.</p>
            <p><a href="#">Join us</a> or <a href="#">Sign-in</a></p>
        </div>
    </div>

    <div class="cart-container">
        <div class="row">
            <div class="col-lg-7">
                <div class="cart-card">
                    <h2 class="cart-title">Your Bag</h2>
                    <p class="cart-subtitle">Items in your bag not reserved- check out now to make them yours.</p>

                    <div class="cart-item">
                        <div class="item-image">
                            <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200" alt="Dropset Trainer Shoes"/>
                        </div>
                        <div class="item-details">
                            <h3 class="item-title">DROPSET TRAINER SHOES</h3>
                            <p class="item-subtitle">Men's Road Running Shoes</p>
                            <p class="item-subtitle">Enamel Blue/ University White</p>

                            <div class="item-controls">
                                <div class="control-dropdown">
                                    <button class="dropdown-btn">Size 10</button>
                                </div>
                                <div class="control-dropdown">
                                    <button class="dropdown-btn">Quantity 1</button>
                                </div>
                            </div>

                            <div class="item-actions">
                                <button class="action-btn wishlist" title="Add to Wishlist">
                                    <i class="far fa-heart"></i>
                                </button>
                                <button class="action-btn" title="Remove">
                                    <i class="far fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>
                        <div class="item-price">$130.00</div>
                    </div>
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

                    <div class="summary-total">
                        <span>Total</span>
                        <span>$136.99</span>
                    </div>
                    <Link to='/checkout' class="btn btn-checkout">CHECKOUT</Link>
                    <div class="promo-link">User a promo code</div>
                </div>
            </div>
        </div>

        <div class="recommendations">
            <div class="section-header">
                <h2 class="section-title">You may also like</h2>
                <div class="carousel-controls">
                    <button class="carousel-btn"><i class="fas fa-chevron-left"></i></button>
                    <button class="carousel-btn"><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>

            <div class="product-carousel">
                <div class="product-card">
                    <span class="badge-new">NEW</span>
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200" alt="Shoe"/>
                    </div>
                    <h4 class="product-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                    <div class="product-footer">
                        <span>VIEW PRODUCT</span>
                        <span class="price">$125</span>
                    </div>
                </div>

                <div class="product-card">
                    <span class="badge-new">NEW</span>
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Shoe"/>
                    </div>
                    <h4 class="product-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                    <div class="product-footer">
                        <span>VIEW PRODUCT</span>
                        <span class="price">$125</span>
                    </div>
                </div>

                <div class="product-card">
                    <span class="badge-new">NEW</span>
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=200" alt="Shoe"/>
                    </div>
                    <h4 class="product-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                    <div class="product-footer">
                        <span>VIEW PRODUCT</span>
                        <span class="price">$125</span>
                    </div>
                </div>

                <div class="product-card">
                    <span class="badge-new">NEW</span>
                    <div class="product-image">
                        <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200" alt="Shoe"/>
                    </div>
                    <h4 class="product-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                    <div class="product-footer">
                        <span>VIEW PRODUCT</span>
                        <span class="price">$125</span>
                    </div>
                </div>
            </div>

            <div class="carousel-dots">
                <div class="dot active"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Cart