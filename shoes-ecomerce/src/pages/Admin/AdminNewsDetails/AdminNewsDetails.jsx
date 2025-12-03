import React, { useEffect, useState } from 'react'
import './AdminNewsDetails.scss'
import { useNavigate, useParams } from 'react-router-dom';
import { blogService } from '../../../services/blogService';
import { uploadImage } from '../../../services/uploadService';

const AdminNewsDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
        title: '',
        content: '',
        excerpt: '',
        image_url: '',
        status: 'draft',
    });

    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (isEditMode) {
        loadBlog();
        }
    }, [id]);

    const loadBlog = async () => {
        setLoading(true);
        try {
        const response = await blogService.getBlog(id);
        if (response.success) {
            setFormData({
            title: response.data.title || '',
            content: response.data.content || '',
            excerpt: response.data.excerpt || '',
            image_url: response.data.image_url || '',
            status: response.data.status || 'draft',
            });
            setImagePreview(response.data.image_url || '');
        }
        } catch (error) {
        alert('Failed to load blog post');
        navigate('/admin/news');
        } finally {
        setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value
        });
        setErrors({ ...errors, [name]: '' });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            alert('Please select a valid image file');
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB');
            return;
        }

        setImageFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    const uploadBlogImage = async () => {
        if (!imageFile) return formData.image_url;

        setUploading(true);
        try {
        const result = await uploadImage(imageFile, {
            folder: 'kicks/blogs',
            maxWidth: 1200,
            maxHeight: 800,
            onProgress: (progress) => setUploadProgress(progress),
        });

        if (result.success) {
            return result.url;
        }
        } catch (error) {
        throw new Error('Failed to upload image: ' + error.message);
        } finally {
        setUploading(false);
        setUploadProgress(0);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.title.trim()) {
        newErrors.title = 'Title is required';
        }

        if (!formData.content.trim()) {
        newErrors.content = 'Content is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
        return;
        }

        setLoading(true);
        try {
        // Upload image if new file selected
        let imageUrl = formData.image_url;
        if (imageFile) {
            imageUrl = await uploadBlogImage();
        }

        const blogData = {
            ...formData,
            image_url: imageUrl,
        };

        let response;
        if (isEditMode) {
            response = await blogService.updateBlog(id, blogData);
        } else {
            response = await blogService.createBlog(blogData);
        }

        if (response.success) {
            alert(`Blog post ${isEditMode ? 'updated' : 'created'} successfully!`);
            navigate('/admin/news');
        }
        } catch (error) {
        alert(error.message || `Failed to ${isEditMode ? 'update' : 'create'} blog post`);
        } finally {
        setLoading(false);
        }
    };

    if (loading && isEditMode) {
        return (
        <div className="page-body">
            <div className="container-xl">
            <div className="text-center py-5">
                <div className="spinner-border" role="status"></div>
            </div>
            </div>
        </div>
        );
    }
  return (
    <div className="page-body admin-news-details">
        <div className="container-xl">
            <div className="page-header-custom">
                <h2 className="page-title mb-1">{isEditMode? 'Edit Blog Post' : 'Add New Post'}</h2>
                <div className="breadcrumb-custom">Home {'>'} News {'>'} {isEditMode? 'Edit Blog Post' : 'Add New Post'}</div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-8">
                        <div className="form-container">
                            <div className="section-title">Basic Information</div>
                            
                            <div className="form-group">
                                <label className="form-label">
                                    Post Title<span className="required">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className={`form-input ${errors.title ? 'is-invalid' : ''}`} 
                                    id="postTitle"
                                    placeholder="Enter post title here..."
                                    maxLength="100"
                                />
                                {errors.title && (
                                <div className="invalid-feedback">{errors.title}</div>
                                )}
                                <div className="char-count">
                                    <span id="titleCount">0</span>/100 characters
                                </div>
                            </div>

                            {/* <div className="form-group">
                                <label className="form-label">URL Slug</label>
                                <input 
                                    type="text" 
                                    className="form-input" 
                                    id="postSlug"
                                    placeholder="url-slug-auto-generated"
                                    readOnly
                                    style={{background: "#f8f9fa"}}
                                />
                            </div> */}

                            <div className="form-row">
                                <div className="form-group">
                                    <label className="form-label">
                                        Category<span className="required">*</span>
                                    </label>
                                    <select className="form-select">
                                        <option value="">Select category...</option>
                                        <option value="news">News</option>
                                        <option value="review">Review</option>
                                        <option value="tutorial">Tutorial</option>
                                        <option value="tips">Tips</option>
                                        <option value="guide">Guide</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Author</label>
                                    <input 
                                        type="text" 
                                        className="form-input" 
                                        value="Admin"
                                        readOnly
                                    style={{background: "#f8f9fa"}}
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">
                                    Excerpt<span className="required">*</span>
                                </label>
                                <textarea 
                                    className="form-textarea" 
                                    id="postExcerpt"
                                    placeholder="Write a short summary of your post (will be shown in post listings)..."
                                    maxLength="200"
                                    rows="3"
                                    name="excerpt"
                                    value={formData.excerpt}
                                    onChange={handleChange}
                                ></textarea>
                                <div className="char-count">
                                    <span id="excerptCount">0</span>/200 characters
                                </div>
                            </div>
                        </div>

                        <div className="form-container">
                            <div className="section-title">Content</div>
                            
                            <div className="form-group">
                                <label className="form-label">
                                    Post Content<span className="required">*</span>
                                </label>
                                
                                <div className="editor-toolbar">
                                    <button className="editor-btn" type="button"title="Bold">
                                        <i className="ti ti-bold"></i>
                                    </button>
                                    <button className="editor-btn" type="button" title="Italic">
                                        <i className="ti ti-italic"></i>
                                    </button>
                                    <button className="editor-btn" type="button" title="Underline">
                                        <i className="ti ti-underline"></i>
                                    </button>
                                    <button className="editor-btn" type="button" title="Bullet List">
                                        <i className="ti ti-list"></i>
                                    </button>
                                    <button className="editor-btn" type="button" title="Numbered List">
                                        <i className="ti ti-list-numbers"></i>
                                    </button>
                                    <button className="editor-btn" type="button" title="Align Left">
                                        <i className="ti ti-align-left"></i>
                                    </button>
                                    <button className="editor-btn" type="button" title="Align Center">
                                        <i className="ti ti-align-center"></i>
                                    </button>
                                    <button className="editor-btn" type="button" title="Align Right">
                                        <i className="ti ti-align-right"></i>
                                    </button>
                                    <button className="editor-btn" type="button" title="Insert Link">
                                        <i className="ti ti-link"></i>
                                    </button>
                                    <button className="editor-btn" type="button" title="Insert Image">
                                        <i className="ti ti-photo"></i>
                                    </button>
                                </div>
                                
                                <textarea 
                                    className={`content-editor w-100 ${errors.content ? 'is-invalid' : ''}`}
                                    id="contentEditor"
                                    name="content"
                                    rows="15"
                                    value={formData.content}
                                    onChange={handleChange}
                                    placeholder="Start writing your post content here..."
                                ></textarea>
                                {errors.content && (
                                    <div className="invalid-feedback">{errors.content}</div>
                                )}
                            </div>
                        </div>

                        <div className="form-container">
                            <div className="section-title">SEO Settings</div>
                            
                            <div className="form-group">
                                <label className="form-label">Meta Title</label>
                                <input 
                                    type="text" 
                                    className="form-input" 
                                    id="metaTitle"
                                    placeholder="SEO title (leave empty to use post title)"
                                    maxLength="60"
                                />
                                <div className="char-count">
                                    <span id="metaTitleCount">0</span>/60 characters (recommended)
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Meta Description</label>
                                <textarea 
                                    className="form-textarea" 
                                    id="metaDescription"
                                    placeholder="SEO description for search engines..."
                                    maxLength="160"
                                    style={{minHeight: "80px"}}
                                ></textarea>
                                <div className="char-count">
                                    <span id="metaDescCount">0</span>/160 characters (recommended)
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Keywords/Tags</label>
                                <div className="tag-input-wrapper" id="tagWrapper">
                                    <input 
                                        type="text" 
                                        className="tag-input" 
                                        id="tagInput"
                                        placeholder="Type and press Enter to add tags..."
                                    />
                                </div>
                            </div>

                            <div className="seo-preview">
                                <div className="seo-preview-title">Search Engine Preview</div>
                                <div className="google-preview">
                                    <div className="google-url">https://kicks.com/news/your-post-slug</div>
                                    <div className="google-title" id="seoPreviewTitle">Your Post Title Will Appear Here</div>
                                    <div className="google-description" id="seoPreviewDesc">Your meta description will appear here. Make it compelling to encourage clicks from search results.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar-panel">
                            <div className="sidebar-panel-title">Publish Settings</div>
                            
                            <div className="form-group">
                                <label className="form-label">Status</label>
                                <div className="status-options">
                                    <div className="status-option">
                                        <input type="radio" name="status" value="draft" checked={formData.status === "draft"} id="statusDraft" onChange={handleChange}/>
                                        <label htmlFor="statusDraft">Draft</label>
                                    </div>
                                    <div className="status-option">
                                        <input type="radio" name="status" value="publish" checked={formData.status === "publish"} id="statusPublished" onChange={handleChange} />
                                        <label htmlFor="statusPublished">Published</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Publish Date</label>
                                <input type="datetime-local" className="form-input"/>
                            </div>

                            {/* <div className="form-group">
                                <label className="form-label">Visibility</label>
                                <select className="form-select">
                                    <option value="public">Public</option>
                                    <option value="private">Private</option>
                                    <option value="password">Password Protected</option>
                                </select>
                            </div> */}
                        </div>

                        <div className="sidebar-panel">
                            <div className="sidebar-panel-title">Featured Image</div>
                                {imagePreview && (
                                    <img src={imagePreview} id="featuredImagePreview" className="featured-image-preview mb-3" alt="Featured"/>
                                )}
                            
                            <label htmlFor='featuredImageInput' className="featured-image-section w-100" id="featuredImageSection">
                                <div id="uploadPrompt">
                                    <div className="image-upload-icon">
                                        <i className="ti ti-photo"></i>
                                    </div>
                                    <div className="upload-text">
                                        <strong>Click to upload</strong> or drag and drop<br/>
                                        Supported formats: JPEG, PNG, WebP. <br />
                                        Max file size: 5MB. 
                                    </div>
                                </div>
                                <input 
                                    type="file" 
                                    id="featuredImageInput" 
                                    accept="image/*" 
                                    style={{display: "none"}}
                                    onChange={handleImageChange}
                                />
                            </label>
                        </div>

                        <div className="action-buttons">
                            {uploading && (
                                <div className="progress mt-3">
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${uploadProgress}%` }}
                                >
                                    {uploadProgress}%
                                </div>
                                </div>
                            )}
                            <button
                                type="submit"
                                className="btn btn-dark w-100"
                                disabled={loading || uploading}
                            >
                                {loading || uploading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    {uploading ? 'Uploading...' : 'Saving...'}
                                </>
                                ) : (
                                <>
                                    <i className="ti ti-check me-2"></i>
                                    {isEditMode ? 'Update Post' : 'Publish Post'}
                                </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AdminNewsDetails