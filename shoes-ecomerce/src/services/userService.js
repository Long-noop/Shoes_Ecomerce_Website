import api from './api';

export const userService = {
  getUsers: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return await api.get(`/api/admin/users?${queryString}`);
  },

  getUser: async (id) => {
    return await api.get(`/api/admin/users/${id}`);
  },

  updateProfile: async (id, userData) => {
    return await api.put(`/api/admin/users/${id}`, userData);
  },

  banUser: async (id) => {
    return await api.post(`/api/admin/users/${id}/ban`);
  },

  activateUser: async (id) => {
    return await api.post(`/api/admin/users/${id}/activate`);
  },

  deleteUser: async (id) => {
    return await api.delete(`/api/admin/users/${id}`);
  },
};
