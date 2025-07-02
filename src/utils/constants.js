// API Configuration
export const API_BASE_URL =
  import.meta.env.VITE_APP_API_URL || "http://localhost:5000/api";

// App Configuration
export const APP_NAME = "Amazon Clone";
export const APP_VERSION = "1.0.0";

// Pagination
export const PRODUCTS_PER_PAGE = 12;
export const ORDERS_PER_PAGE = 10;
export const USERS_PER_PAGE = 20;

// Product Categories
export const PRODUCT_CATEGORIES = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Books",
  "Sports & Outdoors",
  "Health & Beauty",
  "Toys & Games",
  "Automotive",
  "Garden & Outdoor",
  "Office Products",
];

// Order Status
export const ORDER_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
};

// Order Status Colors
export const ORDER_STATUS_COLORS = {
  pending: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  shipped: "bg-purple-100 text-purple-800",
  delivered: "bg-green-100 text-green-800",
  cancelled: "bg-red-100 text-red-800",
};

// User Roles
export const USER_ROLES = {
  CUSTOMER: "customer",
  ADMIN: "admin",
};

// Payment Methods
export const PAYMENT_METHODS = [
  { value: "credit_card", label: "Credit Card" },
  { value: "debit_card", label: "Debit Card" },
  { value: "paypal", label: "PayPal" },
  { value: "stripe", label: "Stripe" },
  { value: "cod", label: "Cash on Delivery" },
];

// File Upload Limits
export const FILE_UPLOAD = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: ["image/jpeg", "image/jpg", "image/png", "image/gif"],
  MAX_FILES: 5,
};

// Validation Rules
export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 6,
  NAME_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 50,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[\+]?[1-9][\d]{0,15}$/,
  POSTAL_CODE_REGEX: /^[0-9]{5,6}$/,
};

// Toast Configuration
export const TOAST_CONFIG = {
  duration: 4000,
  position: "top-right",
  style: {
    background: "#363636",
    color: "#fff",
  },
  success: {
    iconTheme: {
      primary: "#4ade80",
      secondary: "#fff",
    },
  },
  error: {
    iconTheme: {
      primary: "#ef4444",
      secondary: "#fff",
    },
  },
};

// Local Storage Keys
export const STORAGE_KEYS = {
  USER: "user",
  CART: "cart",
  THEME: "theme",
  LANGUAGE: "language",
};

// Routes
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PRODUCT_DETAIL: "/product/:id",
  CART: "/cart",
  CHECKOUT: "/checkout",
  PROFILE: "/profile",
  ADMIN: "/admin",
  ORDERS: "/orders",
};

// Responsive Breakpoints (Tailwind CSS)
export const BREAKPOINTS = {
  SM: "640px",
  MD: "768px",
  LG: "1024px",
  XL: "1280px",
  "2XL": "1536px",
};

// Animation Durations
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 300,
  SLOW: 500,
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  UNAUTHORIZED: "You are not authorized to perform this action.",
  NOT_FOUND: "The requested resource was not found.",
  SERVER_ERROR: "Internal server error. Please try again later.",
  VALIDATION_ERROR: "Please check your input and try again.",
  LOGIN_REQUIRED: "Please login to continue.",
  INSUFFICIENT_STOCK: "Insufficient stock available.",
  CART_EMPTY: "Your cart is empty.",
  PAYMENT_FAILED: "Payment processing failed. Please try again.",
};

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: "Login successful!",
  REGISTER_SUCCESS: "Registration successful!",
  PROFILE_UPDATED: "Profile updated successfully!",
  PRODUCT_ADDED_TO_CART: "Product added to cart!",
  CART_UPDATED: "Cart updated successfully!",
  ORDER_PLACED: "Order placed successfully!",
  PRODUCT_CREATED: "Product created successfully!",
  PRODUCT_UPDATED: "Product updated successfully!",
  PRODUCT_DELETED: "Product deleted successfully!",
};
