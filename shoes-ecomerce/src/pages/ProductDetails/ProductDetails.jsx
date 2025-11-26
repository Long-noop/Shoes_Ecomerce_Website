import React, { useEffect, useState } from 'react'
import './ProductDetails.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import { productService } from '../../services/productService';
import { useCart } from '../../contexts/CartContext'
const ProductDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {isAuthenticated} = useAuth();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [addingToCart, setAddingToCart] = useState(false);
    const {addToCart} = useCart();

    useEffect(()=>{
        loadProduct(id);
    },[id])

    const loadProduct = async() => {
        setLoading(true);
        try {
            const response = await productService.getProduct(id);
            if (response.success) {
                setProduct(response.data);
            }
        } catch (error) {
            console.error('Error loading product:', error);
            alert('Product not found');
            navigate('/products');
        } finally {
            setLoading(false);
        }
    }

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1 && newQuantity <= product.stock) {
            setQuantity(newQuantity);
        }
    };

    const handleAddToCart = async() => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: { pathname: `/details/${id}` } } });
            return;
        }
        setAddingToCart(true);
        try {
            const response = await addToCart(product.id, quantity);
            if (response.success) {
                alert(`${quantity} item(s) added to cart!`);
                setQuantity(1);
            }
        } catch (error) {
            alert(error.message || 'Failed to add to cart');
        } finally {
            setAddingToCart(false);
        }
    }
    const handleBuyNow = async () => {
        if (!isAuthenticated) {
            navigate('/login', { state: { from: { pathname: `/details/${id}` } } });
            return;
        }

        try {
            await addToCart(product.id, quantity);
            navigate('/checkout');
        } catch (error) {
            alert(error.message || 'Failed to process');
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

    if (!product) {
        return (
        <div className="container my-5">
            <div className="alert alert-danger">Product not found</div>
        </div>
        );
    }

  return (
    <div className='user-product-detail'>
      <div className="product-detail-container">
          <div className="product-detail">
              <div className="product-grid">
                  <div className="product-images">
                      <div className="main-image">
                          <button className="image-nav prev"><i className="fas fa-chevron-left"></i></button>
                          <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" alt="Product" id="mainImage"/>
                          <button className="image-nav next"><i className="fas fa-chevron-right"></i></button>
                      </div>

                      <div className="thumbnail-grid">
                          <div className="thumbnail active" data-image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600">
                              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200" alt="Thumbnail 1"/>
                          </div>
                          <div className="thumbnail" data-image="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600">
                              <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Thumbnail 2"/>
                          </div>
                      </div>
                  </div>

                  <div className="product-info">
                        <span className="badge-new">New Release</span>
                        <h1 className="product-title">{product.name}</h1>
                        <div className="product-price">${parseFloat(product.price).toFixed(2)}</div>
                    <div className='d-flex justify-content-between'>
                        <div className="option-group">
                            <label className="option-label">Color</label>
                            <div className="color-options">
                                <div className="color-option" style={{backgroundColor: "#2d5016", dataColor:"green"}}></div>
                                <div className="color-option" style={{backgroundColor:"#4a4a4a" , dataColor:"gray"}}></div>
                            </div>
                        </div>

                        <div>
                            {product.stock > 0 && (
                                <div className="mb-4">
                                    <label className="option-label ">Quantity</label>
                                    <div className="d-flex quantity-selector gap-2">
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleQuantityChange(-1)}
                                        disabled={quantity <= 1}
                                    >
                                        <i className="fas fa-minus"></i>
                                    </button>
                                    <input
                                        type="number"
                                        className="form-control text-center"
                                        value={quantity}
                                        readOnly
                                        style={{ width: '80px' }}
                                    />
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={() => handleQuantityChange(1)}
                                        disabled={quantity >= product.stock}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                    </div>
                                </div>
                            )}
                            <br />
                            <div >
                                {product.stock > 0 ? (
                                    <div className='text-success' style={{fontWeight:500, fontSize:'1.1rem'}}>
                                        <i className="fas fa-check-circle me-2"></i> In Stock ({product.stock} available)
                                    </div>
                                ) : (
                                    <div className="text-danger">
                                        <i className="fas fa-times-circle me-2"></i>
                                        Out of Stock
                                    </div>
                                ) }
                            </div>
                        </div>
                    </div>
                        <div className="option-group">
                            <label className="option-label">Size </label>
                                {/* <span className="size-chart-link">SIZE CHART</span> */}
                            <div className="size-options">
                                <div className="size-option">38</div>
                                <div className="size-option">39</div>
                                <div className="size-option">40</div>
                                <div className="size-option active">41</div>
                                <div className="size-option">42</div>
                                <div className="size-option">43</div>
                                <div className="size-option">44</div>
                                <div className="size-option">45</div>
                                <div className="size-option">46</div>
                                <div className="size-option">47</div>
                            </div>
                        </div>
    
                    {product.stock > 0 && (
                        <>
                        <div className="action-buttons">
                            <button className="btn-add-cart" onClick={handleAddToCart} disabled={addingToCart}>
                                {addingToCart ? (
                                    <>
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                        Adding...
                                    </>
                                ) : (
                                    <>
                                        <i className="fas fa-shopping-cart me-2"></i> ADD TO CART
                                    </>
                                )}
                                    
                            </button>
                            <button className="btn-wishlist">
                                <i className="far fa-heart"></i>
                            </button>
                        </div>

                        <button className="btn-buy-now"  onClick={handleBuyNow} style={{width: "100%" , marginBottom: "2rem"}}>
                            <i className="fas fa-bolt me-2"></i> BUY IT NOW
                        </button>
                        </>
                    )}

                    <div className="row mt-5">
                        <div className="col-12">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    data-bs-toggle="tab"
                                    data-bs-target="#details"
                                    type="button">
                                    Details
                                </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    data-bs-toggle="tab"
                                    data-bs-target="#specifications"
                                    type="button">
                                    Specifications
                                </button>
                                </li>
                            </ul>

                            <div className="tab-content p-4 border border-top-0">
                                <div className="tab-pane fade show active" id="details">
                                <h5>Product Details</h5>
                                <p className="text-muted">
                                    {product.description || 'No detailed description available.'}
                                </p>
                                </div>
                                <div className="tab-pane fade" id="specifications">
                                <h5>Specifications</h5>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td><strong>Category:</strong></td>
                                        <td>{product.category_name}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>SKU:</strong></td>
                                        <td>SKU-{product.id}</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Stock:</strong></td>
                                        <td>{product.stock} units</td>
                                    </tr>
                                    </tbody>
                                </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
              </div>
          </div>
      </div>

      <div className="recommendations">
          <div className="section-header">
              <h2 className="section-title">You may also like</h2>
              <div className="carousel-controls">
                  <button className="carousel-btn"><i className="fas fa-chevron-left"></i></button>
                  <button className="carousel-btn"><i className="fas fa-chevron-right"></i></button>
              </div>
          </div>

          <div className="product-carousel">
              <div className="product-card">
                  <span className="badge-new">New</span>
                  <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200" alt="Product"/>
                  </div>
                  <h4 className="card-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                  <div className="card-footer">
                      <span>VIEW PRODUCT</span>
                      <span>$125</span>
                  </div>
              </div>

              <div className="product-card">
                  <span className="badge-new">New</span>
                  <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200" alt="Product"/>
                  </div>
                  <h4 className="card-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                  <div className="card-footer">
                      <span>VIEW PRODUCT</span>
                      <span>$125</span>
                  </div>
              </div>

              <div className="product-card">
                  <span className="badge-new">New</span>
                  <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=200" alt="Product"/>
                  </div>
                  <h4 className="card-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                  <div className="card-footer">
                      <span>VIEW PRODUCT</span>
                      <span>$125</span>
                  </div>
              </div>

              <div className="product-card">
                  <span className="badge-new">New</span>
                  <div className="product-image">
                      <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200" alt="Product"/>
                  </div>
                  <h4 className="card-title">ADIDAS 4DFWD X PARLEY RUNNING SHOES</h4>
                  <div className="card-footer">
                      <span>VIEW PRODUCT</span>
                      <span>$125</span>
                  </div>
              </div>
          </div>

          <div className="carousel-dots">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
          </div>
      </div>
    </div>
  )
}

export default ProductDetails