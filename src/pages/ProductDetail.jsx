import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/productSlice";
import { addToCart } from "../redux/cartSlice";
import { StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const { currentProduct, loading, error } = useSelector(
    (state) => state.products
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (!user) {
      toast.error("Please login to add items to cart");
      navigate("/login");
      return;
    }

    dispatch(
      addToCart({
        productId: currentProduct._id,
        quantity: quantity,
      })
    );
    toast.success("Product added to cart!");
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} className="h-5 w-5 text-yellow-400" />);
      } else {
        stars.push(
          <StarOutlineIcon key={i} className="h-5 w-5 text-gray-300" />
        );
      }
    }
    return stars;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-gray-300 h-96 rounded-lg"></div>
              <div className="space-y-4">
                <div className="bg-gray-300 h-8 rounded w-3/4"></div>
                <div className="bg-gray-300 h-6 rounded w-1/2"></div>
                <div className="bg-gray-300 h-4 rounded w-full"></div>
                <div className="bg-gray-300 h-4 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-red-600">Error: {error}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-4 bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  if (!currentProduct) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <button
                onClick={() => navigate("/")}
                className="hover:text-orange-600"
              >
                Home
              </button>
            </li>
            <li>/</li>
            <li>{currentProduct.category}</li>
            <li>/</li>
            <li className="text-gray-900 font-medium">{currentProduct.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img
                src={
                  currentProduct.images?.[selectedImage] ||
                  "/placeholder-image.jpg"
                }
                alt={currentProduct.name}
                className="w-full h-96 object-contain"
              />
            </div>

            {currentProduct.images && currentProduct.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {currentProduct.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImage === index
                        ? "border-orange-500"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${currentProduct.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {currentProduct.name}
              </h1>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {renderStars(currentProduct.ratings?.average || 0)}
                </div>
                <span className="text-sm text-gray-600">
                  ({currentProduct.ratings?.count || 0} reviews)
                </span>
              </div>

              <p className="text-3xl font-bold text-orange-600 mb-4">
                ${currentProduct.price}
              </p>

              <p className="text-gray-700 mb-6">{currentProduct.description}</p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {currentProduct.stock > 0 ? (
                <p className="text-green-600 font-medium">
                  ✓ In Stock ({currentProduct.stock} available)
                </p>
              ) : (
                <p className="text-red-600 font-medium">✗ Out of Stock</p>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            {currentProduct.stock > 0 && (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-medium">Quantity:</label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    {[...Array(Math.min(currentProduct.stock, 10))].map(
                      (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      )
                    )}
                  </select>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCartIcon className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            )}

            {/* Product Details */}
            <div className="border-t pt-6">
              <h3 className="font-medium text-gray-900 mb-2">
                Product Details
              </h3>
              <dl className="space-y-2 text-sm">
                <div className="flex">
                  <dt className="font-medium text-gray-600 w-24">Category:</dt>
                  <dd className="text-gray-900">{currentProduct.category}</dd>
                </div>
                <div className="flex">
                  <dt className="font-medium text-gray-600 w-24">Seller:</dt>
                  <dd className="text-gray-900">
                    {currentProduct.seller?.name || "Amazon Clone"}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
