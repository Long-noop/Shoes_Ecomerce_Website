import React, { useEffect, useState } from 'react'
import './News.scss'
import { blogService } from '../../../services/blogService';
import { Link } from 'react-router-dom';

const News = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(null);
    const [filters, setFilters] = useState({
        keyword: '',
        page: 1,
        per_page: 7,
    });

    useEffect(() => {
        loadBlogs();
    }, [filters]);

    const loadBlogs = async () => {
        setLoading(true);
        try {
            const params = {};
            Object.keys(filters).forEach(key =>{
                if (filters[key]) params[key] = filters[key];
            })
            const response = await blogService.getBlogs(params);
            if (response.success) {
                setBlogs(response.data);
                setPagination(response.pagination);
            }
        } catch (error) {
        console.error('Error loading blogs:', error);
        } finally {
        setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this blog post?')) return;

        try {
        const response = await blogService.deleteBlog(id);
        if (response.success) {
            alert('Blog deleted successfully');
            loadBlogs();
        }
        } catch (error) {
        alert(error.message || 'Failed to delete blog');
        }
    };
  return (
    <div className="page-body admin-news">
        <div className="container-fluid">
            <div className="header-row">
                <div>
                    <h2 className="page-title">News & Articles</h2>
                    <div className="breadcrumb-custom">Home {'>'} News Management</div>
                </div>
                <Link to='/admin/news/add'>
                    <button className="btn-add-post">
                        <i className="ti ti-plus"></i>
                        Add New Post
                    </button>
                </Link>
            </div>

            <div className="card mb-3">
            <div className="card-body">
                <div className="row g-3">
                <div className="col-md-8">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Search posts..."
                    value={filters.keyword}
                    onChange={(e) => setFilters({ ...filters, keyword: e.target.value, page: 1 })}
                    />
                </div>
                <select className="filter-select col-md-3">
                    <option value="">All Status</option>
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                </select>
                <div className="col-md-1">
                    <button
                    className="btn btn-secondary w-100"
                    onClick={() => setFilters({ keyword: '', page: 1, per_page: 20 })}
                    >
                    Clear
                    </button>
                </div>
                </div>
            </div>
            </div>

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border" role="status"></div>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-muted">No blog posts found</p>
              </div>
            ) : (
            <div className="posts-grid">
                {blogs.map(blog => (
                <div key={blog.id} className="post-card-wrapper">
                    <div className="post-card">
                        <span className="status-badge status-published">● {blog.status}</span>
                        <img src={blog.image_url} className="post-image" alt="Post"/>
                        <div className="post-content">
                            <div className="post-category">SNEAKERS</div>
                            <h3 className="post-title">{blog.title}</h3>
                            <p className="post-excerpt">
                                {blog.content}
                            </p>
                            <div className="post-stats">
                                <div className="stat-item">
                                    <i className="ti ti-eye"></i>
                                    <span>1,245 views</span>
                                </div>
                                <div className="stat-item">
                                    <i className="ti ti-message"></i>
                                    <span>24 comments</span>
                                </div>
                            </div>
                            <div className="post-meta">
                                <div className="post-author">
                                    <i className="ti ti-user"></i>
                                    <span>Admin</span>
                                </div>
                                <div className="post-date">{new Date(blog.created_at).toLocaleDateString()}</div>
                            </div>
                            <div className="post-actions">
                                <Link className="btn-post-action edit" to={`/admin/news/details/${blog.id}`}>
                                    <i className="ti ti-edit"></i>
                                    Edit
                                </Link>
                                <button className="btn-post-action delete" onClick={() => handleDelete(blog.id)}>
                                    <i className="ti ti-trash"></i>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            )}

            {pagination && pagination.last_page > 1 && (
            <nav className="mt-3">
                <ul className="pagination justify-content-center">
                <li >
                    <button
                    className={`page-btn ${filters.page === 1 ? 'disabled' : ''}`}
                    onClick={() => setFilters({ ...filters, page: filters.page - 1 })}
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
                        onClick={() => setFilters({ ...filters, page: i + 1 })}
                    >
                        {i + 1}
                    </button>
                    </li>
                ))}
                <li >
                    <button
                    className={`page-btn ${filters.page === pagination.last_page ? 'disabled' : ''}`}
                    onClick={() => setFilters({ ...filters, page: filters.page + 1 })}
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

export default News