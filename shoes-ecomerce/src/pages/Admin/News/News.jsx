import React from 'react'
import './News.css'
const News = () => {
  return (
    <div className="page-body">
                <div className="container-fluid">
                    <div className="header-row">
                        <div>
                            <h2 className="page-title">News & Articles</h2>
                            <div className="breadcrumb-custom">Home {'>'} News Management</div>
                        </div>
                        <button className="btn-add-post" onclick="addPost()">
                            <i className="ti ti-plus"></i>
                            Add New Post
                        </button>
                    </div>

                    <div className="filter-section">
                        <div className="filter-row">
                            <input type="text" className="filter-input" placeholder="Search by title, content..."/>
                            <select className="filter-select">
                                <option value="">All Categories</option>
                                <option value="news">News</option>
                                <option value="review">Review</option>
                                <option value="tutorial">Tutorial</option>
                            </select>
                            <select className="filter-select">
                                <option value="">All Status</option>
                                <option value="published">Published</option>
                                <option value="draft">Draft</option>
                            </select>
                            <button className="btn-filter">
                                <i className="ti ti-search"></i>
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="posts-grid">
                        <div className="post-card-wrapper">
                            <div className="post-card">
                                <span className="status-badge status-published">● Published</span>
                                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" className="post-image" alt="Post"/>
                                <div className="post-content">
                                    <div className="post-category">SNEAKERS</div>
                                    <h3 className="post-title">The Ultimate Guide to Choosing the Perfect Running Shoes</h3>
                                    <p className="post-excerpt">
                                        Discover essential tips and factors to consider when selecting the ideal running shoes for your needs and running style.
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
                                        <div className="post-date">Nov 18, 2025</div>
                                    </div>
                                    <div className="post-actions">
                                        <button className="btn-post-action edit" onclick="editPost(1)">
                                            <i className="ti ti-edit"></i>
                                            Edit
                                        </button>
                                        <button className="btn-post-action delete" onclick="deletePost(1)">
                                            <i className="ti ti-trash"></i>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-card-wrapper">
                            <div className="post-card">
                                <span className="status-badge status-published">● Published</span>
                                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400" className="post-image" alt="Post"/>
                                <div className="post-content">
                                    <div className="post-category">REVIEW</div>
                                    <h3 className="post-title">Adidas Ultra Boost 2025: A Comprehensive Review</h3>
                                    <p className="post-excerpt">
                                        We put the latest Adidas Ultra Boost through rigorous testing to see if it lives up to the hype. Here's our verdict.
                                    </p>
                                    <div className="post-stats">
                                        <div className="stat-item">
                                            <i className="ti ti-eye"></i>
                                            <span>2,890 views</span>
                                        </div>
                                        <div className="stat-item">
                                            <i className="ti ti-message"></i>
                                            <span>45 comments</span>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <div className="post-author">
                                            <i className="ti ti-user"></i>
                                            <span>Admin</span>
                                        </div>
                                        <div className="post-date">Nov 17, 2025</div>
                                    </div>
                                    <div className="post-actions">
                                        <button className="btn-post-action edit" onclick="editPost(2)">
                                            <i className="ti ti-edit"></i>
                                            Edit
                                        </button>
                                        <button className="btn-post-action delete" onclick="deletePost(2)">
                                            <i className="ti ti-trash"></i>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-card-wrapper">
                            <div className="post-card">
                                <span className="status-badge status-draft">● Draft</span>
                                <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400" className="post-image" alt="Post"/>
                                <div className="post-content">
                                    <div className="post-category">TIPS</div>
                                    <h3 className="post-title">How to Care for Your Sneakers: Maintenance Tips</h3>
                                    <p className="post-excerpt">
                                        Learn the best practices for keeping your sneakers clean and extending their lifespan with our expert maintenance tips.
                                    </p>
                                    <div className="post-stats">
                                        <div className="stat-item">
                                            <i className="ti ti-eye"></i>
                                            <span>0 views</span>
                                        </div>
                                        <div className="stat-item">
                                            <i className="ti ti-message"></i>
                                            <span>0 comments</span>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <div className="post-author">
                                            <i className="ti ti-user"></i>
                                            <span>Admin</span>
                                        </div>
                                        <div className="post-date">Nov 16, 2025</div>
                                    </div>
                                    <div className="post-actions">
                                        <button className="btn-post-action edit" onclick="editPost(3)">
                                            <i className="ti ti-edit"></i>
                                            Edit
                                        </button>
                                        <button className="btn-post-action delete" onclick="deletePost(3)">
                                            <i className="ti ti-trash"></i>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-card-wrapper">
                            <div className="post-card">
                                <span className="status-badge status-published">● Published</span>
                                <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400" className="post-image" alt="Post"/>
                                <div className="post-content">
                                    <div className="post-category">NEWS</div>
                                    <h3 className="post-title">Top 10 Sneaker Trends for 2025 You Need to Know</h3>
                                    <p className="post-excerpt">
                                        Stay ahead of the curve with our roundup of the hottest sneaker trends that are dominating the fashion scene this year.
                                    </p>
                                    <div className="post-stats">
                                        <div className="stat-item">
                                            <i className="ti ti-eye"></i>
                                            <span>3,567 views</span>
                                        </div>
                                        <div className="stat-item">
                                            <i className="ti ti-message"></i>
                                            <span>67 comments</span>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <div className="post-author">
                                            <i className="ti ti-user"></i>
                                            <span>Admin</span>
                                        </div>
                                        <div className="post-date">Nov 15, 2025</div>
                                    </div>
                                    <div className="post-actions">
                                        <button className="btn-post-action edit" onclick="editPost(4)">
                                            <i className="ti ti-edit"></i>
                                            Edit
                                        </button>
                                        <button className="btn-post-action delete" onclick="deletePost(4)">
                                            <i className="ti ti-trash"></i>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-card-wrapper">
                            <div className="post-card">
                                <span className="status-badge status-published">● Published</span>
                                <img src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400" className="post-image" alt="Post"/>
                                <div className="post-content">
                                    <div className="post-category">TUTORIAL</div>
                                    <h3 className="post-title">Styling Your Sneakers: From Casual to Formal</h3>
                                    <p className="post-excerpt">
                                        Master the art of sneaker styling with our comprehensive guide on how to incorporate sneakers into any outfit.
                                    </p>
                                    <div className="post-stats">
                                        <div className="stat-item">
                                            <i className="ti ti-eye"></i>
                                            <span>1,923 views</span>
                                        </div>
                                        <div className="stat-item">
                                            <i className="ti ti-message"></i>
                                            <span>38 comments</span>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <div className="post-author">
                                            <i className="ti ti-user"></i>
                                            <span>Admin</span>
                                        </div>
                                        <div className="post-date">Nov 14, 2025</div>
                                    </div>
                                    <div className="post-actions">
                                        <button className="btn-post-action edit" onclick="editPost(5)">
                                            <i className="ti ti-edit"></i>
                                            Edit
                                        </button>
                                        <button className="btn-post-action delete" onclick="deletePost(5)">
                                            <i className="ti ti-trash"></i>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="post-card-wrapper">
                            <div className="post-card">
                                <span className="status-badge status-draft">● Draft</span>
                                <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400" className="post-image" alt="Post"/>
                                <div className="post-content">
                                    <div className="post-category">GUIDE</div>
                                    <h3 className="post-title">Understanding Sneaker Sizing: A Complete Guide</h3>
                                    <p className="post-excerpt">
                                        Navigate the confusing world of sneaker sizing with our detailed guide to finding your perfect fit across different brands.
                                    </p>
                                    <div className="post-stats">
                                        <div className="stat-item">
                                            <i className="ti ti-eye"></i>
                                            <span>0 views</span>
                                        </div>
                                        <div className="stat-item">
                                            <i className="ti ti-message"></i>
                                            <span>0 comments</span>
                                        </div>
                                    </div>
                                    <div className="post-meta">
                                        <div className="post-author">
                                            <i className="ti ti-user"></i>
                                            <span>Admin</span>
                                        </div>
                                        <div className="post-date">Nov 13, 2025</div>
                                    </div>
                                    <div className="post-actions">
                                        <button className="btn-post-action edit" onclick="editPost(6)">
                                            <i className="ti ti-edit"></i>
                                            Edit
                                        </button>
                                        <button className="btn-post-action delete" onclick="deletePost(6)">
                                            <i className="ti ti-trash"></i>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pagination">
                        <button className="page-btn active">1</button>
                        <button className="page-btn">2</button>
                        <button className="page-btn">3</button>
                        <button className="page-btn">4</button>
                    </div>
                </div>
            </div>
  )
}

export default News