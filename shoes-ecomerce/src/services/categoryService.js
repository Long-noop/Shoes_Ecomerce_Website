import api from './api';

export const categoryService = {
  getCategories: async (withProducts = false) => {
    return await api.get(`/api/categories?with_products=${withProducts}`);
  },

  getCategory: async (id, withProducts = false) => {
    return await api.get(`/api/categories/${id}?with_products=${withProducts}`);
  },

  createCategory: async (categoryData) => {
    return await api.post('/api/admin/categories', categoryData);
  },

  updateCategory: async (id, categoryData) => {
    return await api.put(`/api/admin/categories/${id}`, categoryData);
  },

  deleteCategory: async (id) => {
    return await api.delete(`/api/admin/categories/${id}`);
  },
};
