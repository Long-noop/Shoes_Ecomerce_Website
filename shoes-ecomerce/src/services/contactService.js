import api from './api';

export const contactService = {
  submitContact: async (contactData) => {
    return await api.post('/api/contacts', contactData);
  },

  getContacts: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return await api.get(`/api/admin/contacts?${queryString}`);
  },

  getContact: async (id) => {
    return await api.get(`/api/admin/contacts/${id}`);
  },

  updateStatus: async (id, status) => {
    return await api.put(`/api/admin/contacts/${id}/status`, { status });
  },

  deleteContact: async (id) => {
    return await api.delete(`/api/admin/contacts/${id}`);
  },
};