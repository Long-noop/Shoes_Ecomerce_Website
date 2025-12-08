import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Products.scss";
import { useAuth } from "../../contexts/AuthContext";
import { categoryService } from "../../services/categoryService";
import { productService } from "../../services/productService";
import { useCart } from "../../contexts/CartContext";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isAuthenticated } = useAuth();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);
  const { addToCart } = useCart();

  // State for sidebar drawer
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    keyword: searchParams.get("keyword") || "",
    category_id: searchParams.get("category_id") || "",
    min_price: searchParams.get("min_price") || "",
    max_price: searchParams.get("max_price") || "",
    page: parseInt(searchParams.get("page")) || 1,
    per_page: 15,
  });

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [filters]);

  // Close filter when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isFilterOpen &&
        !e.target.closest(".filters-sidebar") &&
        !e.target.closest(".filter-toggle-btn")
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterOpen]);

  // Prevent body scroll when filter is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterOpen]);

  const loadCategories = async () => {
    try {
      const response = await categoryService.getCategories(true);
      if (response.success) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error("Error loading categories", error);
    }
  };

  const loadProducts = async () => {
    setLoading(true);
    try {
      const params = {};
      Object.keys(filters).forEach((key) => {
        if (filters[key]) params[key] = filters[key];
      });

      const response = await productService.getProducts(params);
      if (response.success) {
        setProducts(response.data);
        setPagination(response.pagination);
      }
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value, page: 1 };
    setFilters(newFilters);

    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((k) => {
      if (newFilters[k]) params.set(k, newFilters[k]);
    });
    setSearchParams(params);
  };

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage });
    window.scrollTo(0, 0);
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

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  return (
    <div className="user-products">
      <div className="hero-banner">
        <div className="hero-content">
          <h3>Limited time only</h3>
          <h1>Get 30% off</h1>
          <p>
            Sneakers made with your comfort in mind so you can put all of your
            focus into your next session.
          </p>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500"
            alt="Adidas Shoe"
          />
        </div>
      </div>

      <div className="listing-container">
        <div className="page-header">
          <div>
            <h1 className="page-title">Life Style Shoes</h1>
            <p className="item-count">{pagination?.total || 0} Items</p>
          </div>
          <div className="mb-3 col-lg-9 col-12">
            <label className="form-label">Search</label>
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={filters.keyword}
              onChange={(e) => handleFilterChange("keyword", e.target.value)}
            />
          </div>
        </div>

        {pagination && (
          <div className="text-end">
            <p className="text-muted">
              Showing {pagination.from}-{pagination.to} of {pagination.total}{" "}
              results
            </p>
          </div>
        )}

        {/* Filter Overlay for Mobile */}
        <div
          className={`filter-overlay ${isFilterOpen ? "active" : ""}`}
          onClick={closeFilter}
        ></div>

        {/* Filter Toggle Button for Mobile */}
        <button
          className={`filter-toggle-btn ${isFilterOpen ? "active" : ""}`}
          onClick={toggleFilter}
          aria-label="Toggle Filters"
        >
          <i className={`fas ${isFilterOpen ? "fa-times" : "fa-filter"}`}></i>
        </button>

        <div className="content-grid">
          {/* Filters Sidebar with Drawer functionality */}
          <aside className={`filters-sidebar ${isFilterOpen ? "open" : ""}`}>
            {/* Close button for mobile */}
            <button
              className="filter-close-btn"
              onClick={closeFilter}
              aria-label="Close Filters"
            >
              <i className="fas fa-times"></i>
            </button>

            <h3 className="filter-title">Filters</h3>

            <div className="filter-section">
              <div className="filter-header">
                <div className="filter-label">TRENDING</div>
                <i className="fas fa-chevron-up"></i>
              </div>

              <div className="filter-checkbox">
                <input type="checkbox" id="lowToHigh" />
                <label htmlFor="lowToHigh">Price: Low to High</label>
              </div>
              <div className="filter-checkbox">
                <input type="checkbox" id="highToLow" />
                <label htmlFor="highToLow">Price: High to Low</label>
              </div>
              <div className="filter-checkbox">
                <input type="checkbox" id="newest" />
                <label htmlFor="newest">Newest</label>
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-header">
                <span className="filter-label">Refine By</span>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="refine-tags">
                <span className="tag">Runners</span>
                <span className="tag outline">Sneaker</span>
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-header">
                <span className="filter-label">Size</span>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="size-grid">
                <div className="size-btn active">38</div>
                <div className="size-btn">39</div>
                <div className="size-btn">40</div>
                <div className="size-btn">41</div>
                <div className="size-btn">42</div>
                <div className="size-btn">43</div>
                <div className="size-btn">44</div>
                <div className="size-btn">45</div>
                <div className="size-btn">46</div>
                <div className="size-btn">47</div>
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-header">
                <span className="filter-label">Color</span>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="color-grid">
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#ffa500" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#000" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#2d5016" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#4a4a4a" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#ff6b6b" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#d3d3d3" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#708090" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#8b4513" }}
                ></div>
                <div
                  className="color-swatch"
                  style={{ backgroundColor: "#daa520" }}
                ></div>
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-header">
                <span className="filter-label">Category</span>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="filter-checkbox">
                <input
                  id="cat-all"
                  type="checkbox"
                  checked={filters.category_id === ""}
                  onChange={() => handleFilterChange("category_id", "")}
                />
                <label htmlFor="cat-all">All Categories</label>
              </div>
              {categories.map((cat) => (
                <div className="filter-checkbox" key={cat.id}>
                  <input
                    type="checkbox"
                    id={`cat-${cat.id}`}
                    checked={filters.category_id === String(cat.id)}
                    onChange={() =>
                      handleFilterChange("category_id", String(cat.id))
                    }
                  />
                  <label htmlFor={`cat-${cat.id}`}>
                    {cat.name} ({cat.product_count || 0})
                  </label>
                </div>
              ))}
            </div>

            <div className="filter-section">
              <div className="filter-header">
                <span className="filter-label">Price</span>
                <i className="fas fa-chevron-up"></i>
              </div>
              <div className="price-range">
                <input
                  type="range"
                  className="form-range"
                  min="1000000"
                  max="10000000"
                  value={filters.max_price || 10000000}
                  onChange={(e) =>
                    handleFilterChange("max_price", e.target.value)
                  }
                />
                <div className="price-inputs">
                  <span className="price-input">
                    {formatCurrency(filters.min_price || 1000000)}
                  </span>
                  <span className="price-input">
                    {formatCurrency(filters.max_price || 10000000)}
                  </span>
                </div>
              </div>
            </div>

            <button
              className="btn btn-secondary w-100 mb-3"
              onClick={() => {
                setFilters({
                  keyword: "",
                  category_id: "",
                  min_price: "",
                  max_price: "",
                  page: 1,
                  per_page: 15,
                });
                setSearchParams({});
              }}
            >
              Clear Filters
            </button>

            <button className="btn btn-dark w-100" onClick={closeFilter}>
              Apply Filters
            </button>
          </aside>

          {/* Products Grid */}
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : products.length === 0 ? (
            <div className="alert alert-info">
              No products found. Try adjusting your filters.
            </div>
          ) : (
            <div className="products-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <Link to={`/products/details/${product.id}`}>
                    <span className="badge new">New</span>
                    <div className="product-image">
                      <img src={product.image_url} alt={product.name} />
                    </div>
                  </Link>
                  <div className="product-info">
                    <Link to={`/products/details/${product.id}`}>
                      <h3>{product.name}</h3>
                      <p>{product.category_name}</p>
                    </Link>
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
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination && pagination.last_page > 1 && (
          <nav className="mt-4">
            <ul className="pagination justify-content-center gap-3">
              <li
                className={`${pagination.current_page === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-btn"
                  onClick={() => handlePageChange(pagination.current_page - 1)}
                  disabled={pagination.current_page === 1}
                >
                  <i className="fas fa-chevron-left"></i> Previous
                </button>
              </li>

              {[...Array(pagination.last_page)].map((_, i) => (
                <li key={i + 1}>
                  <button
                    className={`page-btn ${
                      pagination.current_page === i + 1 ? "active" : ""
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              ))}

              <li
                className={`${
                  pagination.current_page === pagination.last_page
                    ? "disabled"
                    : ""
                }`}
              >
                <button
                  className="page-btn"
                  onClick={() => handlePageChange(pagination.current_page + 1)}
                  disabled={pagination.current_page === pagination.last_page}
                >
                  Next <i className="fas fa-chevron-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Products;
