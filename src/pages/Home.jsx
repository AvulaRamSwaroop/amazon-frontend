import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/productSlice";
import ProductCard from "../components/ProductCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Electronics", "Fashion", "Home", "Books", "Sports"];

  useEffect(() => {
    dispatch(
      fetchProducts({ keyword: searchTerm, category: selectedCategory })
    );
  }, [dispatch, searchTerm, selectedCategory]);

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(
      fetchProducts({ keyword: searchTerm, category: selectedCategory })
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Amazon Clone
          </h1>
          <p className="text-xl mb-8">
            Find everything you need at great prices
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-4 py-3 text-gray-900 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
              />
              <button
                type="submit"
                className="bg-orange-700 px-6 py-3 rounded-r-lg hover:bg-orange-800 transition-colors"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`p-4 rounded-lg text-center transition-colors ${
                selectedCategory === category
                  ? "bg-orange-500 text-white"
                  : "bg-white hover:bg-orange-50 border border-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          {selectedCategory && (
            <button
              onClick={() => setSelectedCategory("")}
              className="text-orange-600 hover:text-orange-800"
            >
              Clear Filter
            </button>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow animate-pulse"
              >
                <div className="bg-gray-300 h-48 rounded mb-4"></div>
                <div className="bg-gray-300 h-4 rounded mb-2"></div>
                <div className="bg-gray-300 h-4 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-600">Error loading products: {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}

        {products.length === 0 && !loading && (
          <div className="text-center py-8">
            <p className="text-gray-600">No products found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
