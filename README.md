# Vendora - E-commerce Platform

A modern, full-stack e-commerce application with clean UI and comprehensive shopping functionality.

## 🚀 Features

- **User Authentication** – Secure login/register with JWT  
- **Product Management** – Browse, search, and filter products  
- **Shopping Cart** – Add, update, remove items with real-time updates  
- **Order Processing** – Complete checkout and order tracking  
- **Admin Dashboard** – Product and order management with analytics  
- **Image Upload** – Multiple product images via Cloudinary  

## 🛠️ Tech Stack

**Frontend:** React 18, Vite, Redux Toolkit, Tailwind CSS, React Router  
**Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT  
**Tools:** Cloudinary, Multer, Heroicons, React Hot Toast  

## 🚦 Quick Start

### Backend Setup

1. Navigate to the backend directory:  
   `cd backend`  
2. Install dependencies:  
   `npm install`  
3. Create a `.env` file with the required environment variables (see below).  
4. Start the backend server:  
   `npm run dev`

### Frontend Setup

1. Navigate to the frontend directory:  
   `cd frontend`  
2. Install dependencies:  
   `npm install`  
3. Create a `.env` file with the required API URL (see below).  
4. Start the frontend development server:  
   `npm run dev`

## 📱 Usage

1. **Register/Login** to access the platform  
2. **Browse products** with search and category filters  
3. **Add items to cart** and proceed to checkout  
4. **Admin users** can manage products via `/admin`  
5. **Track orders** in user profile  

## 🔧 API Endpoints

| Method | Endpoint              | Description           |
|--------|-----------------------|-----------------------|
| POST   | `/api/auth/register`  | User registration     |
| POST   | `/api/auth/login`     | User login            |
| GET    | `/api/products`       | Get all products      |
| POST   | `/api/products`       | Create product (Admin)|
| GET    | `/api/cart`           | Get user cart         |
| POST   | `/api/cart/add`       | Add to cart           |
| POST   | `/api/orders`         | Create order          |

## 🚀 Deployment

- **Backend:** Deploy to [Render](https://amazon-backend-482v.onrender.com/) with the backend `.env` variables.
- **Frontend:** Deploy to [Vercel](https://amazon-frontend-chi-five.vercel.app/) with the production API URL in the `.env`.

## 📦 Repository Links

- **Frontend Repository:** [https://github.com/AvulaRamSwaroop/amazon-frontend](https://github.com/AvulaRamSwaroop/amazon-frontend)  
- **Backend Repository:** [https://github.com/AvulaRamSwaroop/amazon-backend](https://github.com/AvulaRamSwaroop/amazon-backend)



