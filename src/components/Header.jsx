import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { items } = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");

  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-400">vendora</span>
            {/* <span className="text-sm">.clone</span> */}
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-8">
            <div className="flex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-2 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600 transition-colors"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>
            </div>
          </form>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <p className="text-gray-300">Hello, {user.name}</p>
                  <p className="font-medium">Account & Lists</p>
                </div>
                {user && (
                  <Link
                    to="/profile"
                    className="text-sm hover:text-orange-400 transition-colors"
                  >
                    Orders
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Sign Out
                </button>
                {user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="text-sm hover:text-orange-400 transition-colors"
                  >
                    Admin
                  </Link>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="flex items-center space-x-1 hover:text-orange-400 transition-colors"
                >
                  <UserIcon className="h-5 w-5" />
                  <span className="text-sm">Sign In</span>
                </Link>
                <Link
                  to="/register"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  Register
                </Link>
              </div>
            )}

            {/* Cart */}
            <Link
              to="/cart"
              className="flex items-center space-x-1 hover:text-orange-400 transition-colors relative"
            >
              <ShoppingCartIcon className="h-6 w-6" />
              <span className="text-sm">Cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
