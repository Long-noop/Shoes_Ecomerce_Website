import React, { use, useEffect, useState } from "react";
import "./Cart.scss";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
const Cart = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { loadCart, cartItems, total, removeItem, clearCart, updateQuantity } =
    useCart();

  useEffect(() => {
    loadingCart();
  }, []);

  const loadingCart = async () => {
    setLoading(true);
    try {
      loadCart();
    } catch (error) {
      console.error("Error loading cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (cartId) => {
    if (!confirm("Are you sure you want to remove this item?")) return;

    try {
      const response = await removeItem(cartId);
      if (response.success) {
        loadCart();
      }
    } catch (error) {
      alert(error.message || "Failed to remove item");
    }
  };

  const handleClearCart = async () => {
    if (!confirm("Are you sure you want to clear your cart?")) return;

    try {
      const response = clearCart();
    } catch (error) {
      alert(error.message || "Failed to clear cart");
    }
  };

  if (loading) {
    return (
      <div className="container my-5">
        <div className="text-center py-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container my-5">
        <div className="text-center py-5">
          <i className="fas fa-shopping-cart fa-4x text-muted mb-3"></i>
          <h3>Your cart is empty</h3>
          <p className="text-muted">Add some products to get started!</p>
          <Link to="/products" className="btn btn-dark btn-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
    }).format(amount || 0);
  };

  return (
    <div className="user-cart">
      {}
      <div className="container">
        <div className="promo-banner">
          <h2>Saving to celebrate</h2>
          <p>
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.
          </p>
          <p>{/* <a href="#">Join us</a> or <a href="#">Sign-in</a> */}</p>
        </div>
      </div>

      <div className="cart-container">
        <div className="row">
          <div className="col-lg-7">
            <div className="cart-card">
              <h2 className="cart-title">Your Bag</h2>
              <p className="cart-subtitle">
                Items in your bag not reserved- check out now to make them
                yours.
              </p>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Cart Items ({cartItems.length})</h5>
                <button
                  className="btn btn-outline-danger"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <Link to={`/products/details/${item.product_id}`}>
                    <div key={item.id} className="item-image">
                      <img src={item.image_url} alt={item.name} />
                    </div>
                  </Link>
                  <div className="item-details">
                    <h3 className="item-title">{item.name}</h3>

                    <div className="item-controls">
                      <div className="control-dropdown">
                        <button className="btn btn-lg">Size 10</button>
                      </div>
                      {/* <div className="control-dropdown">
                                        <button className="btn btn-lg">Stock: {item.stock}</button>
                                    </div> */}
                    </div>

                    <div className="item-actions">
                      <button
                        className="btn wishlist btn-outline-dark"
                        title="Add to Wishlist"
                      >
                        <i className="far fa-heart"></i>
                      </button>
                      <button
                        className="btn btn-outline-danger"
                        title="Remove"
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="far fa-trash-alt"></i>
                      </button>
                    </div>
                  </div>
                  <div className="d-flex flex-column justify-content-between">
                    <div className="quantity-group d-flex gap-2 justify-content-end">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <input
                        type="number"
                        className="form-control text-center"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        disabled={item.quantity >= item.stock}
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                    <div className="item-price text-end">
                      {" "}
                      {formatCurrency(item.price * item.quantity)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="order-summary">
              <h3 className="summary-title">Order Summary</h3>

              <div className="summary-row">
                <span>Subtotal:</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span>Free</span>
              </div>
              <div className="summary-row">
                <span>Sales Tax</span>
                <span>$0.00</span>
              </div>

              <div className="summary-total">
                <span>Total</span>
                <strong className="text-primary">
                  {formatCurrency(total)}
                </strong>
              </div>
              <button
                className="btn btn-checkout"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="btn btn-outline-secondary w-100 mt-3"
              >
                Continue Shopping
              </Link>

              <div className="promo-link">User a promo code</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
