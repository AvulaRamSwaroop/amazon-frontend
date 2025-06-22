import axios from "axios";

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with error status
      const { status, data } = error.response;

      if (status === 401) {
        // Unauthorized - clear user data and redirect to login
        localStorage.removeItem("user");
        window.location.href = "/login";
      }

      return Promise.reject(data.message || "An error occurred");
    } else if (error.request) {
      // Network error
      return Promise.reject("Network error. Please check your connection.");
    } else {
      // Other error
      return Promise.reject("An unexpected error occurred");
    }
  }
);

// Auth API calls
export const authAPI = {
  register: (userData) => api.post("/auth/register", userData),
  login: (userData) => api.post("/auth/login", userData),
  getProfile: () => api.get("/auth/profile"),
  updateProfile: (formData) =>
    api.put("/auth/profile", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

// Products API calls
export const productsAPI = {
  getProducts: (params) => api.get("/products", { params }),
  getProductById: (id) => api.get(`/products/${id}`),
  createProduct: (formData) =>
    api.post("/products", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  updateProduct: (id, formData) =>
    api.put(`/products/${id}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
  deleteProduct: (id) => api.delete(`/products/${id}`),
};

// Cart API calls
export const cartAPI = {
  getCart: () => api.get("/cart"),
  addToCart: (data) => api.post("/cart/add", data),
  updateCartItem: (productId, data) =>
    api.put(`/cart/update/${productId}`, data),
  removeFromCart: (productId) => api.delete(`/cart/remove/${productId}`),
  clearCart: () => api.delete("/cart/clear"),
};

// Orders API calls
export const ordersAPI = {
  createOrder: (orderData) => api.post("/orders", orderData),
  getOrders: () => api.get("/orders"),
  getOrderById: (id) => api.get(`/orders/${id}`),
  updateOrderStatus: (id, status) =>
    api.put(`/orders/${id}/status`, { status }),
};

// Admin API calls
export const adminAPI = {
  getDashboardStats: () => api.get("/admin/stats"),
  getAllUsers: () => api.get("/admin/users"),
  getAllProducts: () => api.get("/admin/products"),
  getAllOrders: () => api.get("/admin/orders"),
  deleteUser: (id) => api.delete(`/admin/users/${id}`),
};

export default api;
