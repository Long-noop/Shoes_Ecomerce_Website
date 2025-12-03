import React, { useState, useEffect } from 'react'
import './AdminProductDetails.scss'
import { productService } from '../../../services/productService';
import { categoryService } from '../../../services/categoryService';
import { uploadImage } from '../../../services/uploadService';
import { useNavigate, useParams } from 'react-router-dom';

const AdminProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEditMode = !!id;

    const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category_id: '',
    image_url: '',
    feature: 0,
    });

    const [categories, setCategories] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        loadCategories();
        if (isEditMode) {
        loadProduct();
        }
    }, [id]);

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

    const loadProduct = async () => {
        setLoading(true);
        try {
        const response = await productService.getProduct(id);
        if (response.success) {
            setFormData({
            name: response.data.name || '',
            description: response.data.description || '',
            price: response.data.price || '',
            stock: response.data.stock || '',
            category_id: response.data.category_id || '',
            image_url: response.data.image_url || '',
            feature: response.data.feature || 0,
            });
            setImagePreview(response.data.image_url || '');
        }
        } catch (error) {
        alert('Failed to load product');
        navigate('/admin/products');
        } finally {
        setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
        ...formData,
        [name]: type === 'checkbox' ? (checked ? 1 : 0) : value,
        });
        setErrors({ ...errors, [name]: '' });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
        // Validate file type
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
            alert('Please select a valid image file (JPEG, PNG, or WebP)');
            return;
        }

        // Validate file size (5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size must be less than 5MB');
            return;
        }

        setImageFile(file);
        // Create preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };

    const uploadProductImage = async () => {
        if (!imageFile) return formData.image_url;

        setUploading(true);
        try {
        const result = await  uploadImage(imageFile, {
            folder: 'kicks/products',
            maxWidth: 1200,
            maxHeight: 1200,
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

        if (!formData.name.trim()) {
        newErrors.name = 'Product name is required';
        }

        if (!formData.price || parseFloat(formData.price) <= 0) {
        newErrors.price = 'Valid price is required';
        }

        if (!formData.stock || parseInt(formData.stock) < 0) {
        newErrors.stock = 'Valid stock quantity is required';
        }

        if (!formData.category_id) {
        newErrors.category_id = 'Category is required';
        }

        if (!isEditMode && !imageFile && !formData.image_url) {
        newErrors.image = 'Product image is required';
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
            imageUrl = await uploadProductImage();
        }

        const productData = {
            ...formData,
            image_url: imageUrl,
            price: parseFloat(formData.price),
            stock: parseInt(formData.stock),
        };

        let response;
        if (isEditMode) {
            response = await productService.updateProduct(id, productData);
        } else {
            response = await productService.createProduct(productData);
        }

        if (response.success) {
            alert(`Product ${isEditMode ? 'updated' : 'created'} successfully!`);
            navigate('/admin/products');
        }
        } catch (error) {
        alert(error.message || `Failed to ${isEditMode ? 'update' : 'create'} product`);
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
    <div className="page-body admin-site">
        <div className="container-fluid">
            <div className="page-header-custom p-3">
                <div>
                    <h2 className="page-title mb-1">{isEditMode? 'Edit Product': 'Add New Product'}</h2>
                    <div className="breadcrumb-custom">Home {'>'} All Products {'>'} {isEditMode? 'Edit Product': 'Add New Product'}</div>
                </div>
            </div>
            <div className="col-auto text-end">
                <button
                    onClick={() => navigate('/admin/products')}
                    className="btn btn-outline-dark btn-sm mb-3"
                >
                    <i className="ti ti-arrow-left me-2"></i>
                    Back to Products
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-lg-7">
                        <div className="form-container">
                            <div className="form-section">
                                <label className="form-label">Product Name</label>
                                <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter product name"
                                />
                                {errors.name && (
                                <div className="invalid-feedback">{errors.name}</div>
                                )}
                            </div>

                            <div className="form-section">
                                <label className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    name="description"
                                    rows="5"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Enter product description"
                                ></textarea>
                            </div>

                            <div className="form-section">
                                <label className="form-label">Category</label>
                                <select
                                className={`form-select ${errors.category_id ? 'is-invalid' : ''}`}
                                name="category_id"
                                value={formData.category_id}
                                onChange={handleChange}
                                >
                                <option value="">Select Category</option>
                                {categories.map(cat => (
                                    <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                    </option>
                                ))}
                                </select>
                                {errors.category_id && (
                                <div className="invalid-feedback">{errors.category_id}</div>
                                )}
                            </div>

                            <div className="form-section">
                                <label className="form-label">Brand Name</label>
                                <input type="text" className="form-input" placeholder="Type brand name here"/>
                            </div>

                            <div className="form-section">
                                <div className="form-row">
                                    <div>
                                        <label className="form-label">SKU</label>
                                        <input type="text" className="form-input" placeholder="Fox-3983"/>
                                    </div>
                                    <div>
                                        <label className="form-label">Stock Quantity</label>
                                        <input
                                            type="number"
                                            className={`form-input ${errors.stock ? 'is-invalid' : ''}`}
                                            name="stock"
                                            value={formData.stock}
                                            onChange={handleChange}
                                            placeholder="0"
                                        />
                                        {errors.stock && (
                                            <div className="invalid-feedback">{errors.stock}</div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <div className="form-row">
                                    <div>
                                        <label className="form-label">Regular Price</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className={`form-input ${errors.price ? 'is-invalid' : ''}`}
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            placeholder="0.00"
                                        />
                                        {errors.price && (
                                            <div className="invalid-feedback">{errors.price}</div>
                                        )}
                                    </div>
                                    <div>
                                        <label className="form-label">Sale Price</label>
                                        <input type="text" className="form-input" placeholder="$450"/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <div className="form-row">
                                    <div>
                                        <label className="form-label">Featured Product</label>
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            name="feature"
                                            checked={formData.feature === 1}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section">
                                <label className="form-label">Tag</label>
                                <div className="tag-container">
                                    <span className="tag-item">
                                        Adidas
                                        <span className="tag-remove">×</span>
                                    </span>
                                    <span className="tag-item">
                                        Shoes
                                        <span className="tag-remove">×</span>
                                    </span>
                                    <span className="tag-item">
                                        Sneakers
                                        <span className="tag-remove">×</span>
                                    </span>
                                    <span className="tag-item">
                                        Ultraboost
                                        <span className="tag-remove">×</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="form-container">
                            {imagePreview && (
                                <div className="product-preview">
                                    <img src={imagePreview} alt="Product Preview"/>
                                </div>
                            )}

                            <div className="gallery-section">
                                <label className="form-label">Product Gallery</label>
                                
                                <label htmlFor='imageInput' className="upload-zone w-100" id="uploadZone">
                                    <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                    <input
                                        id='imageInput'
                                        type="file"
                                        className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                                        accept="image/*"
                                        style={{display: "none"}}
                                        onChange={handleImageChange}
                                        />
                                        {errors.image && (
                                        <div className="invalid-feedback">{errors.image}</div>
                                    )}
                                    <div className="upload-text">
                                        Drop your imager here, or browse<br/>
                                        Max file size: 5MB. Supported formats: JPEG, PNG, WebP
                                    </div>
                                    <input type="file" id="fileInput" style={{display: "none"}} multiple accept="image/*"/>
                                </label>

                                {/* <div className="gallery-list">
                                    <div className="gallery-item">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="gallery-thumb" alt="Product"/>
                                        <div className="gallery-info">
                                            <div className="gallery-name">Product thumbnail.png</div>
                                            <div className="gallery-progress">
                                                <div className="gallery-progress-bar" style={{width: "100%"}}></div>
                                            </div>
                                        </div>
                                        <i className="ti ti-circle-check gallery-check"></i>
                                    </div>

                                    <div className="gallery-item">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="gallery-thumb" alt="Product"/>
                                        <div className="gallery-info">
                                            <div className="gallery-name">Product thumbnail.png</div>
                                            <div className="gallery-progress">
                                                <div className="gallery-progress-bar" style={{width: "100%"}}></div>
                                            </div>
                                        </div>
                                        <i className="ti ti-circle-check gallery-check"></i>
                                    </div>

                                    <div className="gallery-item">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="gallery-thumb" alt="Product"/>
                                        <div className="gallery-info">
                                            <div className="gallery-name">Product thumbnail.png</div>
                                            <div className="gallery-progress">
                                                <div className="gallery-progress-bar" style={{width: "100%"}}></div>
                                            </div>
                                        </div>
                                        <i className="ti ti-circle-check gallery-check"></i>
                                    </div>

                                    <div className="gallery-item">
                                        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100" className="gallery-thumb" alt="Product"/>
                                        <div className="gallery-info">
                                            <div className="gallery-name">Product thumbnail.png</div>
                                            <div className="gallery-progress">
                                                <div className="gallery-progress-bar" style={{width: "100%"}}></div>
                                            </div>
                                        </div>
                                        <i className="ti ti-circle-check gallery-check"></i>
                                    </div>
                                </div> */}
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
                                    className="btn btn-dark w-100 mt-3"
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
                                        {isEditMode ? 'Update Product' : 'Create Product'}
                                    </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AdminProductDetails