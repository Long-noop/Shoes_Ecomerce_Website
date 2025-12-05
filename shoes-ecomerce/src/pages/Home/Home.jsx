import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { productService } from "../../services/productService";
import { categoryService } from "../../services/categoryService";
import { useCart } from "../../contexts/CartContext";
import { useAuth } from "../../contexts/AuthContext";
const Home = () => {
  const { isAuthenticated } = useAuth();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [randomThree, setrandomThree] = useState([]);
  useEffect(() => {
    loadHomeData();
  }, []);

  const loadHomeData = async () => {
    setLoading(true);
    try {
      const [productsRes, categoriesRes] = await Promise.all([
        productService.getFeaturedProducts(4),
        categoryService.getCategories(true),
      ]);

      if (productsRes.success) {
        setFeaturedProducts(productsRes.data);
        setrandomThree(
          productsRes.data.sort(() => 0.5 - Math.random()).slice(0, 3)
        );
      }
      if (categoriesRes.success) {
        setCategories(categoriesRes.data.slice(0, 6));
      }
    } catch (error) {
      console.error("Error loading home data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (productId) => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart");
      return;
    }

    try {
      const response = await addToCart(productId, 1);
      if (response.success) {
        alert("Product added to cart!");
      }
    } catch (error) {
      alert(error.message || "Failed to add to cart");
    }
  };
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
    }).format(amount || 0);
  };

  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            DO IT <span className="blue">RIGHT</span>
          </h1>
          <div className="hero-card">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="hero-content">
                  <h2>NIKE AIR MAX</h2>
                  <p>Nike introducing the new air max for everyone's comfort</p>
                  <Link to="/products" className="btn btn-dark btn-lg">
                    <i className="fas fa-shopping-cart"></i> SHOP NOW
                  </Link>
                </div>
              </div>
              <div className="col-md-6 text-center">
                {randomThree[0] && (
                  <img src={randomThree[0].image_url} alt="Nike Air Max" />
                )}
              </div>
            </div>
            <div className="thumbnail-images">
              {randomThree[1] && (
                <img src={randomThree[1].image_url} alt="Nike Air Max" />
              )}
              {randomThree[2] && (
                <img src={randomThree[2].image_url} alt="Nike Air Max" />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="new-drops">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              DON'T MISS OUT
              <br />
              NEW DROPS
            </h2>
            <button className="btn btn-dark btn-lg">SHOP NEW DROPS</button>
          </div>
          <div className="row">
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border" role="status"></div>
              </div>
            ) : (
              <>
                {featuredProducts.map((product) => (
                  <div key={product.id} className="col-md-3 col-sm-6">
                    <div className="product-card">
                      <span className="badge-new">NEW</span>
                      <img src={product.image_url} alt={product.name} />
                      <h5 className="product-title">
                        ADIDAS 4DFWD X PARLEY RUNNING SHOES
                      </h5>
                      <div className="product-footer">
                        {product.stock > 0 ? (
                          <button
                            className="btn btn-sm btn-white"
                            onClick={() => handleAddToCart(product.id)}
                          >
                            Add to Cart
                          </button>
                        ) : (
                          <span className="btn btn-sm btn-danger">
                            Out of Stock
                          </span>
                        )}
                        <span className="price">
                          {formatCurrency(product.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <div className="section-header d-flex flex-column flex-sm-row">
            <h2 className="section-title"> SHOP BY CATEGORIES</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="category-card">
                {randomThree[0] && (
                  <img src={randomThree[0].image_url} alt="Nike Air Max" />
                )}
                <h3 className="category-title">
                  LIFESTYLE
                  <br />
                  SHOES
                </h3>
                <div className="category-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="category-card">
                {randomThree[1] && (
                  <img src={randomThree[1].image_url} alt="Nike Air Max" />
                )}
                <h3 className="category-title">
                  BASKETBALL
                  <br />
                  SHOES
                </h3>
                <div className="category-arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <div className="text-center">
              <div className="spinner-border" role="status"></div>
            </div>
          ) : (
            <div className="row g-4">
              {categories.map((category) => (
                <div key={category.id} className="col-lg-2 col-md-4 col-6">
                  <Link
                    to={`/products?category_id=${category.id}`}
                    className="category-card"
                  >
                    <img
                      src={category.image_url}
                      alt="Basketball Shoes"
                      style={{ top: "30%" }}
                    />

                    <div className="d-flex flex-column w-100">
                      <h6>{category.name}</h6>
                      <p className="text-muted small text-end">
                        {category.product_count || 0} items
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">REVIEWS</h2>
            <button className="btn btn-dark btn-lg">SEE ALL</button>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar"></div>
                  <div>
                    <h6 className="mb-0">
                      <strong>Good Quality</strong>
                    </h6>
                    <small className="text-muted">
                      I highly recommend shopping from kicks
                    </small>
                  </div>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <span className="ms-2">3.0</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400"
                  alt="Review"
                  className="review-image"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar"></div>
                  <div>
                    <h6 className="mb-0">
                      <strong>Good Quality</strong>
                    </h6>
                    <small className="text-muted">
                      I highly recommend shopping from kicks
                    </small>
                  </div>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="ms-2">5.0</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1612902456551-333ac5afa26e?w=400"
                  alt="Review"
                  className="review-image"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="review-card">
                <div className="review-header">
                  <div className="review-avatar"></div>
                  <div>
                    <h6 className="mb-0">
                      <strong>Good Quality</strong>
                    </h6>
                    <small className="text-muted">
                      I highly recommend shopping from kicks
                    </small>
                  </div>
                </div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <span className="ms-2">5.0</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400"
                  alt="Review"
                  className="review-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
