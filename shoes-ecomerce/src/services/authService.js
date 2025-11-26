import api from "./api"

export const authService = {
    register: async (UserData) => {
        const response = await api.post('/api/auth/register', UserData)
        if(response.success && response.data.token){
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response
    },

    login: async (email, password) => {
        const response = await api.post('/api/auth/login', { email, password });
        if (response.success && response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        }
        return response;
    },

    logout: async () => {
        try {
        await api.post('/api/auth/logout');
        } finally {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        }
    },

    getCurrentUser: async () => {
        return await api.get('/api/auth/me');
    },

    changePassword: async (currentPassword, newPassword) => {
        return await api.post('/api/auth/change-password', {
        current_password: currentPassword,
        new_password: newPassword,
        });
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    },

    getUser: () => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    isAdmin: () => {
        const user = authService.getUser();
        return user?.role === 'admin';
    },
}
