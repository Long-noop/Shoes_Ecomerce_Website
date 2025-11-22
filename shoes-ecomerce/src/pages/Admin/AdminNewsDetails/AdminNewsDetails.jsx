import React from 'react'
import './AdminNewsDetails.scss'
const AdminNewsDetails = () => {
  return (
    <div className="page-body admin-news-details">
        <div className="container-xl">
            <div className="page-header-custom">
                <h2 className="page-title mb-1">Add New Post</h2>
                <div className="breadcrumb-custom">Home {'>'} News {'>'} Add New Post</div>
            </div>

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
                                className="form-input" 
                                id="postTitle"
                                placeholder="Enter post title here..."
                                maxLength="100"
                            />
                            <div className="char-count">
                                <span id="titleCount">0</span>/100 characters
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">URL Slug</label>
                            <input 
                                type="text" 
                                className="form-input" 
                                id="postSlug"
                                placeholder="url-slug-auto-generated"
                                readOnly
                                style={{background: "#f8f9fa"}}
                            />
                        </div>

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
                            
                            <div 
                                className="content-editor" 
                                id="contentEditor"
                                contentEditable="true"
                                placeholder="Start writing your post content here..."
                            ></div>
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
                                    <input type="radio" name="status" value="draft" id="statusDraft" defaultChecked/>
                                    <label htmlFor="statusDraft">Draft</label>
                                </div>
                                <div className="status-option">
                                    <input type="radio" name="status" value="published" id="statusPublished"/>
                                    <label htmlFor="statusPublished">Published</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Publish Date</label>
                            <input type="datetime-local" className="form-input"/>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Visibility</label>
                            <select className="form-select">
                                <option value="public">Public</option>
                                <option value="private">Private</option>
                                <option value="password">Password Protected</option>
                            </select>
                        </div>
                    </div>

                    <div className="sidebar-panel">
                        <div className="sidebar-panel-title">Featured Image</div>
                        
                        <div className="featured-image-section" id="featuredImageSection">
                            <img id="featuredImagePreview" className="featured-image-preview" alt="Featured"/>
                            <button className="remove-image-btn">
                                <i className="ti ti-x"></i>
                            </button>
                            <div id="uploadPrompt">
                                <div className="image-upload-icon">
                                    <i className="ti ti-photo"></i>
                                </div>
                                <div className="upload-text">
                                    <strong>Click to upload</strong> or drag and drop<br/>
                                    PNG, JPG, GIF up to 10MB
                                </div>
                            </div>
                            <input 
                                type="file" 
                                id="featuredImageInput" 
                                accept="image/*" 
                                style={{display: "none"}}
                                // onchange="handleFeaturedImage(event)"
                            />
                        </div>
                    </div>

                    <div className="action-buttons">
                        <button className="btn-action btn-publish">
                            <i className="ti ti-send"></i>
                            Publish Post
                        </button>
                        <button className="btn-action btn-save-draft">
                            <i className="ti ti-device-floppy"></i>
                            Save as Draft
                        </button>
                        <button className="btn-action btn-cancel">
                            <i className="ti ti-x"></i>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AdminNewsDetails