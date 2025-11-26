import api from './api';

export const cartService = {

  getCart: async () => {
    return await api.get('/api/cart');
  },

  addToCart: async (productId, quantity) => {
    return await api.post('/api/cart', {
      product_id: productId,
      quantity: quantity,
    });
  },

  updateQuantity: async (cartId, quantity) => {
    return await api.put(`/api/cart/${cartId}`, { quantity });
  },

  removeItem: async (cartId) => {
    return await api.delete(`/api/cart/${cartId}`);
  },

  clearCart: async () => {
    return await api.delete('/api/cart');
  },
};