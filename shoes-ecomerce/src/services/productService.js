import api from './api';

export const productService = {

    getProducts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return await api.get(`/api/products?${queryString}`);
    },

    getProduct: async (id) => {
    return await api.get(`/api/products/${id}`);
    },

    getFeaturedProducts: async (limit = 10) => {
    return await api.get(`/api/products/featured?limit=${limit}`);
    },

    createProduct: async (productData) => {
    return await api.post('/api/admin/products', productData);
    },

    updateProduct: async (id, productData) => {
    return await api.put(`/api/admin/products/${id}`, productData);
    },

    deleteProduct: async (id) => {
    return await api.delete(`/api/admin/products/${id}`);
    },
};
