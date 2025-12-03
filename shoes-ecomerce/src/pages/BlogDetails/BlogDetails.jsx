import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogService } from '../../services/blogService';
const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBlog();
  }, [id]);

  const loadBlog = async () => {
    setLoading(true);
    try {
      const response = await blogService.getBlog(id);
      if (response.success) {
        setBlog(response.data);
      }
    } catch (error) {
      console.error('Error loading blog:', error);
      alert('Blog not found');
      navigate('/blogs');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
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

  if (!blog) {
    return null;
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <article className="blog-article">
            {/* Featured Image */}
            {blog.image_url && (
              <img
                src={blog.image_url}
                alt={blog.title}
                className="img-fluid rounded mb-4"
              />
            )}

            {/* Meta Info */}
            <div className="blog-meta mb-4">
              <span className="text-muted me-3">
                <i className="far fa-calendar me-1"></i>
                {formatDate(blog.created_at)}
              </span>
              <span className="text-muted">
                <i className="far fa-user me-1"></i>
                Admin
              </span>
            </div>

            {/* Title */}
            <h1 className="blog-title mb-4">{blog.title}</h1>

            {/* Content */}
            <div className="blog-content">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </div>

            <div className='d-flex justify-content-between border-top'>
                {/* Back to Blog */}
                <div className="mt-5">
                    <Link to="/blogs" className="btn btn-outline-secondary">
                        <i className="fas fa-arrow-left me-2"></i>
                        Back to Blog
                    </Link>
                </div>

                {/* Share Buttons */}
                <div className="share-section mt-3">
                    <h5 className="mb-3">Share this article</h5>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-primary">
                        <i className="fab fa-facebook"></i> Facebook
                        </button>
                        <button className="btn btn-outline-info">
                        <i className="fab fa-twitter"></i> Twitter
                        </button>
                        <button className="btn btn-outline-danger">
                        <i className="fab fa-pinterest"></i> Pinterest
                        </button>
                    </div>
                </div>
            </div>
            
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;