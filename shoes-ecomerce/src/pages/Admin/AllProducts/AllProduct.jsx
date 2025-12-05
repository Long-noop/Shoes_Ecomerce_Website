import React, { useEffect, useState } from "react";
// import './AllProduct.scss'
import { Link, useNavigate } from "react-router-dom";
import { productService } from "../../../services/productService";
import { categoryService } from "../../../services/categoryService";
const AllProduct = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);
  const [filters, setFilters] = useState({
    keyword: "",
    category_id: "",
    page: 1,
    per_page: 20,
  });

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const loadCategories = async () => {
    try {
      const response = await categoryService.getCategories();
      if (response.success) {
        setCategories(response.data);
      }
    } catch (error) {
      console.error("Error loading categories:", error);
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

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await productService.deleteProduct(id);
      console.log(response);
      if (response.success) {
        alert("Product deleted successfully");
        loadProducts();
      }
    } catch (error) {
      alert(error.message || "Failed to delete product");
    }
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setFilters({ ...filters, page: newPage });
    window.scrollTo(0, 0);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "VND",
    }).format(amount || 0);
  };
  return (
    <>
      <div class="page-header d-print-none" aria-label="Page header">
        <div class="container-fluid">
          <div className="row g-2 align-items-center">
            <div className="col">
              <div className="page-pretitle">Product Management,</div>
              <h2 className="page-title">Admin Dashborad {">"} All Products</h2>
            </div>
            <div className="col-auto ms-auto d-print-none">
              <div className="btn-list">
                <span className="d-none d-sm-inline">
                  <a
                    onClick={() => navigate("/admin/products/add")}
                    className="btn btn-1 btn-dark"
                  >
                    {" "}
                    <i className="ti ti-plus me-3"></i> ADD NEW PRODUCT{" "}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-body admin-products">
        <div className="container-fluid">
          <div className="row row-cards">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        value={filters.keyword}
                        onChange={(e) =>
                          handleFilterChange("keyword", e.target.value)
                        }
                      />
                    </div>
                    <div className="col-md-4">
                      <select
                        className="form-select"
                        value={filters.category_id}
                        onChange={(e) =>
                          handleFilterChange("category_id", e.target.value)
                        }
                      >
                        <option value="">All Categories</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-2    ">
                      <button
                        className="btn btn-secondary w-100"
                        onClick={() =>
                          setFilters({
                            keyword: "",
                            category_id: "",
                            page: 1,
                            per_page: 20,
                          })
                        }
                      >
                        Clear Filters
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border" role="status"></div>
              </div>
            ) : products.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted">No products found</p>
              </div>
            ) : (
              <>
                {products.map((product) => (
                  <div key={product.id} className="col-lg-4">
                    <div class="card">
                      <div class="card-body">
                        <div class="row align-items-center">
                          <div class="col-4">
                            <img
                              src={product.image_url}
                              alt={product.name}
                              className="product-image"
                            />
                          </div>
                          <div class="col">
                            <div className="d-flex justify-content-between">
                              <div>
                                <h3 class="card-title mb-1">{product.name}</h3>
                                <div class="text-secondary">
                                  {product.category_name}
                                </div>
                                <h3 class="card-title mb-1">
                                  {formatCurrency(product.price)}
                                </h3>
                              </div>
                              <div class="col-auto">
                                <div class="dropdown">
                                  <a
                                    href="#"
                                    class="btn-action"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      class="icon icon-1"
                                    >
                                      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                      <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                      <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    </svg>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-end">
                                    <Link
                                      to={`/admin/products/details/${product.id}`}
                                      className="dropdown-item text-primary"
                                    >
                                      <i className="ti ti-edit"></i> Edit
                                    </Link>
                                    <button
                                      onClick={() => handleDelete(product.id)}
                                      className="dropdown-item text-danger"
                                    >
                                      <i className="ti ti-trash"></i> Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="">
                            <h3 className="card-title mt-3">Summary</h3>
                            <div
                              className="text-secondary"
                              style={{
                                display: "-webkit-box",
                                WebkitLineClamp: 1,
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                              }}
                            >
                              {product.description}
                            </div>
                          </div>
                          <div className="mt-3">
                            <div class="row g-2 align-items-center">
                              <div className="col-auto me-3">Sales</div>
                              <div className="col">
                                <div class="progress progress-sm">
                                  <div
                                    className="progress-bar"
                                    style={{
                                      width: `${
                                        Math.floor(
                                          Math.random() * (80 - 20 + 1)
                                        ) + 20
                                      }%`,
                                      backgroundColor: "orange",
                                    }}
                                    role="progressbar"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-label="25% Complete"
                                  >
                                    <span className="visually-hidden">
                                      25% Complete
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <span className="col-auto">
                                {Math.floor(Math.random() * (80 - 20 + 1)) + 20}
                              </span>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div class="row g-2 align-items-center">
                              <div className="col-auto me-3">Ramaining</div>
                              <div className="col">
                                <div class="progress progress-sm">
                                  <div
                                    className="progress-bar"
                                    style={{
                                      width: "25%",
                                      backgroundColor: "green",
                                    }}
                                    role="progressbar"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    aria-label="25% Complete"
                                  >
                                    <span className="visually-hidden">
                                      25% Complete
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <span className="ms-2 col-auto">
                                {product.stock}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {pagination && (
              <>
                <div className="col-lg-12 d-flex ms-auto">
                  <ul className="pagination m-0 ms-auto">
                    <li className="page-item">
                      <button
                        tabIndex="-1"
                        aria-disabled="true"
                        className={`page-link ${
                          filters.page === 1 ? "disabled" : ""
                        }`}
                        onClick={() => handlePageChange(filters.page - 1)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="icon icon-1"
                        >
                          <path d="M15 6l-6 6l6 6" />
                        </svg>
                      </button>
                    </li>
                    {[...Array(pagination.last_page)].map((_, i) => (
                      <li key={i + 1} className="page-item">
                        <button
                          className={`page-link ${
                            filters.page === i + 1 ? "active" : ""
                          }`}
                          onClick={() => handlePageChange(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    <li className="page-item">
                      <a
                        className={`page-link ${
                          filters.page === pagination.last_page
                            ? "disabled"
                            : ""
                        }`}
                        onClick={() => handlePageChange(filters.page + 1)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="icon icon-1"
                        >
                          <path d="M9 6l6 6l-6 6" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
          {/* {pagination && pagination.last_page > 1 && (
                <nav className="mt-3">
                    <ul className="pagination justify-content-center">
                    <li >
                        <button
                        className={`page-btn ${filters.page === 1 ? 'disabled' : ''}`}
                            onClick={() => handlePageChange(filters.page - 1)}
                            >
                                <i className="fas fa-chevron-left"></i>Previous
                        </button>
                    </li>
                    {[...Array(pagination.last_page)].map((_, i) => (
                        <li
                        key={i + 1}
                        
                        >
                        <button
                            className={`page-btn ${filters.page === i + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                        </li>
                    ))}
                    <li >
                        <button
                        className={`page-btn ${filters.page === pagination.last_page ? 'disabled' : ''}`}
                        onClick={() => handlePageChange(filters.page + 1)}
                        >
                        Next<i className="fas fa-chevron-right"></i>
                        </button>
                    </li>
                    </ul>
                </nav>  
            )} */}
        </div>
      </div>
    </>
  );
};

export default AllProduct;
