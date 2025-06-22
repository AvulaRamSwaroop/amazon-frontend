import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarOutlineIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast.error("Please login to add items to cart");
      return;
    }

    dispatch(
      addToCart({
        productId: product._id,
        quantity: 1,
      })
    );
    toast.success("Product added to cart!");
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} className="h-4 w-4 text-yellow-400" />);
      } else {
        stars.push(
          <StarOutlineIcon key={i} className="h-4 w-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <Link to={`/product/${product._id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Product Image */}
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-200">
          <img
            src={product.images?.[0] || "/placeholder-image.jpg"}
            alt={product.name}
            className="h-48 w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {renderStars(product.ratings?.average || 0)}
            </div>
            <span className="text-xs text-gray-600">
              ({product.ratings?.count || 0})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-bold text-orange-600">
              ${product.price}
            </span>
            {product.stock > 0 ? (
              <span className="text-xs text-green-600 font-medium">
                In Stock
              </span>
            ) : (
              <span className="text-xs text-red-600 font-medium">
                Out of Stock
              </span>
            )}
          </div>

          {/* Category */}
          <p className="text-xs text-gray-500 mb-3">{product.category}</p>

          {/* Add to Cart Button */}
          {product.stock > 0 && (
            <button
              onClick={handleAddToCart}
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-orange-600 transition-colors duration-200"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
