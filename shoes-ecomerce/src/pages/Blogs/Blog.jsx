import React, { useEffect, useState } from 'react'
import './Blog.css'
import { Link, useSearchParams } from 'react-router-dom';
import { blogService } from '../../services/blogService';

const Blog = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(null);
    const [searchKeyword, setSearchKeyword] = useState(searchParams.get('keyword') || '');
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);

    useEffect(() => {
        loadBlogs();
    }, [currentPage, searchKeyword]);

    const loadBlogs = async () => {
        setLoading(true);
        try {
        const params = {
            page: currentPage,
            per_page: 9,
        };
        if (searchKeyword) {
            params.keyword = searchKeyword;
        }

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

    const handleSearch = (e) => {
        e.preventDefault();
        setCurrentPage(1);
        setSearchParams({ keyword: searchKeyword, page: 1 });
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };


  return (
    <div id="blogPage" class="page-section">
        <div class="page-hero">
            <h1>Our Blog</h1>
            <p>Stay updated with the latest sneaker news, style guides, and exclusive drops.</p>
        </div>

        <div className="row mb-4">
          <div className="col-lg-8 mx-auto">
            <form onSubmit={handleSearch} className="search-form">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search articles..."
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
                <button className="btn btn-dark" type="submit">
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </form>
          </div>
        </div>

        {loading? (
            <div className="text-center py-5">
                <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        ) : blogs.length === 0 ? (
            <div className="text-center py-5">
                <i className="fas fa-newspaper fa-4x text-muted mb-3"></i>
                <h4>No articles found</h4>
                <p className="text-muted">Try searching with different keywords</p>
            </div>
        ) : (
            <div class="blogs-content-container">
                <div class="blog-grid">
                    {blogs.map((blog, index) => (
                        <div key={blog.id} class={`blog-card ${index === 0 ? 'blog-featured' : ''}`}>
                            <div class="blog-image">
                                <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400" alt="Blog"/>
                                <span class="blog-category">Style Guide</span>
                            </div>
                            <div class="blog-content">
                                <div class="blog-meta">
                                    <span><i class="far fa-calendar"></i>{formatDate(blog.created_at)}</span>
                                    <span><i class="far fa-user"></i> Emily D.</span>
                                </div>
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                                <Link to={`/blog/${blog.id}`} className="read-more">
                                    Read More <i className="fas fa-arrow-right ms-1"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )}
        {pagination && pagination.last_page > 1 && (
            <nav className="mt-5">
            <ul className="pagination justify-content-center">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                    className="page-link"
                    onClick={() => {
                    setCurrentPage(currentPage - 1);
                    setSearchParams({ keyword: searchKeyword, page: currentPage - 1 });
                    }}
                >
                    Previous
                </button>
                </li>
                {[...Array(pagination.last_page)].map((_, i) => (
                <li
                    key={i + 1}
                    className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}
                >
                    <button
                    className="page-link"
                    onClick={() => {
                        setCurrentPage(i + 1);
                        setSearchParams({ keyword: searchKeyword, page: i + 1 });
                    }}
                    >
                    {i + 1}
                    </button>
                </li>
                ))}
                <li className={`page-item ${currentPage === pagination.last_page ? 'disabled' : ''}`}>
                <button
                    className="page-link"
                    onClick={() => {
                    setCurrentPage(currentPage + 1);
                    setSearchParams({ keyword: searchKeyword, page: currentPage + 1 });
                    }}
                >
                    Next
                </button>
                </li>
            </ul>
            </nav>
        )}
    </div>
  )
}

export default Blog