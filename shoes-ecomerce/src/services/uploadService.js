// src/services/uploadService.js
import axios from 'axios';

// Cloudinary configuration (read from Vite env variables)
// Vite exposes client env vars as `import.meta.env.VITE_*` and embeds them at build time.
const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'your_cloud_name';
const CLOUDINARY_UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || 'your_upload_preset';
const CLOUDINARY_API_URL = import.meta.env.VITE_CLOUDINARY_API_URL || `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;

/**
 * Resize image before upload
 * @param {File} file - Image file to resize
 * @param {number} maxWidth - Maximum width
 * @param {number} maxHeight - Maximum height
 * @returns {Promise<Blob>} Resized image blob
 */
const resizeImage = (file, maxWidth = 1200, maxHeight = 1200) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Calculate new dimensions
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob((blob) => {
          resolve(blob);
        }, file.type, 0.9); // 0.9 quality
      };

      img.onerror = reject;
      img.src = e.target.result;
    };

    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

/**
 * Upload image to Cloudinary
 * @param {File} file - Image file to upload
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} Upload response with URL
 */
export const uploadImage = async (file, options = {}) => {
  try {
    // Validate file type
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      throw new Error('Invalid file type. Only JPEG, PNG, and WebP are allowed.');
    }

    // Validate file size (max 5MB before resize)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      throw new Error('File size too large. Maximum size is 5MB.');
    }

    // Resize image
    const resizedBlob = await resizeImage(
      file,
      options.maxWidth || 1200,
      options.maxHeight || 1200
    );

    // Runtime configuration checks
    if (!CLOUDINARY_CLOUD_NAME || CLOUDINARY_CLOUD_NAME === 'your_cloud_name') {
      throw new Error('Cloudinary cloud name is not configured. Set VITE_CLOUDINARY_CLOUD_NAME in your .env');
    }

    if (!CLOUDINARY_UPLOAD_PRESET || CLOUDINARY_UPLOAD_PRESET === 'your_upload_preset') {
      throw new Error('Cloudinary upload preset is not configured. Set VITE_CLOUDINARY_UPLOAD_PRESET in your .env');
    }

    // Create form data
    const formData = new FormData();
    formData.append('file', resizedBlob, file.name);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    
    if (options.folder) {
      formData.append('folder', options.folder);
    }

    // Upload to Cloudinary
    const response = await axios.post(CLOUDINARY_API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        if (options.onProgress) {
          options.onProgress(percentCompleted);
        }
      },
    });

    return {
      success: true,
      url: response.data.secure_url,
      publicId: response.data.public_id,
      width: response.data.width,
      height: response.data.height,
      format: response.data.format,
    };
  } catch (error) {
    console.error('Upload error:', error);
    throw new Error(error.message || 'Failed to upload image');
  }
};

/**
 * Upload multiple images
 * @param {FileList|Array} files - Image files to upload
 * @param {Object} options - Upload options
 * @returns {Promise<Array>} Array of upload responses
 */
export const uploadMultipleImages = async (files, options = {}) => {
  const uploadPromises = Array.from(files).map(file => 
    uploadImage(file, options)
  );

  try {
    const results = await Promise.all(uploadPromises);
    return results;
  } catch (error) {
    throw new Error('Failed to upload one or more images');
  }
};

/**
 * Delete image from Cloudinary
 * @param {string} publicId - Cloudinary public ID
 * @returns {Promise<Object>} Delete response
 */
export const deleteImage = async (publicId) => {
  // Note: This requires a backend endpoint as deletion needs authentication
  try {
    // Call your backend API to delete the image
    const response = await axios.delete('/api/admin/upload', {
      data: { publicId }
    });
    return response.data;
  } catch (error) {
    console.error('Delete error:', error);
    throw new Error('Failed to delete image');
  }
};

export default {
  uploadImage,
  uploadMultipleImages,
  deleteImage,
};