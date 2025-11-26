import api from './api';

export const blogService = {
  getBlogs: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return await api.get(`/api/blogs?${queryString}`);
  },

  getBlog: async (id) => {
    return await api.get(`/api/blogs/${id}`);
  },

  createBlog: async (blogData) => {
    return await api.post('/api/admin/blogs', blogData);
  },

  updateBlog: async (id, blogData) => {
    return await api.put(`/api/admin/blogs/${id}`, blogData);
  },

  deleteBlog: async (id) => {
    return await api.delete(`/api/admin/blogs/${id}`);
  },
};