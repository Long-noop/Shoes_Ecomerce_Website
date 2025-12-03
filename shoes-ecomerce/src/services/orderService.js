import api from './api';

export const orderService = {
  getOrders: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    return await api.get(`/api/orders?${queryString}`);
  },

  getOrder: async (id) => {
    return await api.get(`/api/orders/${id}`);
  },

  createOrder: async (orderData) => {
    return await api.post('/api/orders', orderData);
  },

  updateOrderStatus: async (id, status) => {
    return await api.put(`/api/orders/${id}/status`, { status });
  },

  getStatistics: async () => {
    return await api.get(`/api/admin/orders/statistics`);
  }
};
