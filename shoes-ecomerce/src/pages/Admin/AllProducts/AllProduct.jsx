import React, { useEffect, useState } from 'react'
import './AllProduct.scss'
import { Link } from "react-router-dom";
import { productService } from '../../../services/productService';
import { categoryService } from '../../../services/categoryService';
const AllProduct = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(null);
    const [filters, setFilters] = useState({
        keyword: '',
        category_id: '',
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
        console.error('Error loading categories:', error);
        }
    };

    const loadProducts = async () => {
        setLoading(true);
        try {
            const params = {};
            Object.keys(filters).forEach(key =>{
                if (filters[key]) params[key] = filters[key];
            })
        const response = await productService.getProducts(params);
        if (response.success) {
            setProducts(response.data);
            setPagination(response.pagination);
        }
        } catch (error) {
        console.error('Error loading products:', error);
        } finally {
        setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this product?')) return;

        try {
        const response = await productService.deleteProduct(id);
        console.log(response)
        if (response.success) {
            alert('Product deleted successfully');
            loadProducts();
        }
        } catch (error) {
        alert(error.message || 'Failed to delete product');
        }
    };

    const handleFilterChange = (key, value) => {
        setFilters({ ...filters, [key]: value, page: 1 });
    };

    const handlePageChange = (newPage) => {
        setFilters({ ...filters, page: newPage });
        window.scrollTo(0, 0);
    };
  return (
    <div className="page-body admin-products">
        <div className="container-fluid">
            <div className="page-header-custom p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="page-title mb-1">All Products</h2>
                        <div className="breadcrumb-custom">Home {'>'} All Products</div>
                    </div>
                    <Link to='/admin/products/add'>
                        <button className="btn-add-product">
                            <i className="ti ti-plus"></i>
                            ADD NEW PRODUCT
                        </button>
                    </Link>
                </div>
            </div>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row g-3">
                    <div className="col-md-6">
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Search products..."
                        value={filters.keyword}
                        onChange={(e) => handleFilterChange('keyword', e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <select
                        className="form-select"
                        value={filters.category_id}
                        onChange={(e) => handleFilterChange('category_id', e.target.value)}
                        >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                        </select>
                    </div>
                    <div className="col-md-2    ">
                        <button
                        className="btn btn-secondary w-100"
                        onClick={() => setFilters({
                            keyword: '',
                            category_id: '',
                            page: 1,
                            per_page: 20,
                        })}
                        >
                        Clear Filters
                        </button>
                    </div>
                    </div>
                </div>
            </div>


            <div className="row">
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
                        <div key={product.id} className="col-md-4">
                            <div className="product-card">
                                <div className="product-header">
                                    <img src={product.image_url} alt={product.name} className="product-image"/>
                                    <div className="product-info">
                                        <div className="product-name">{product.name}</div>
                                        <div className="product-category">{product.category_name}</div>
                                        <div className="product-price">${parseFloat(product.price).toFixed(2)}</div>
                                    </div>
                                    <div className='d-flex flex-column gap-2'>
                                        <Link
                                            to={`/admin/products/details/${product.id}`}
                                            className="btn btn-outline-primary btn-sm"
                                        >
                                            <i className="ti ti-edit"></i>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(product.id)}
                                            className="btn btn-outline-danger btn-sm"
                                        >
                                            <i className="ti ti-trash"></i>
                                        </button>
                                    </div>
                                    {/* <div className="product-menu">
                                        <i className="ti ti-dots-vertical"></i>
                                    </div> */}
                                </div>
                                <div className="product-summary">
                                    <div className="summary-title">Summary</div>
                                    <div className="summary-text">{product.description}</div>
                                </div>
                                <div className="product-stats">
                                    <div className="stat-row">
                                        <span className="stat-label">Sales</span>
                                        <div className="stat-bar">
                                            <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                        </div>
                                        <span className="stat-value">
                                            <i className="ti ti-trending-up stat-icon"></i>
                                            1269
                                        </span>
                                    </div>
                                    <div className="stat-row">
                                        <span className="stat-label">Remaining Products</span>
                                        <div className="stat-bar">
                                            <div className="stat-bar-fill" style={{width: "100%"}}></div>
                                        </div>
                                        <span className="stat-value">{product.stock}</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                    ))}
                    </>
                )}
                
            </div>

            

            {pagination && pagination.last_page > 1 && (
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
            )}
        </div>
    </div>
  )
}

export default AllProduct