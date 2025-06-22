import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateCartItem, removeFromCart, clearCart } from "../redux/cartSlice";
import { TrashIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    dispatch(updateCartItem({ productId, quantity }));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
    toast.success("Item removed from cart");
  };

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (!user) {
      toast.error("Please login to proceed to checkout");
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16">
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
        <Link to="/" className="text-orange-600 hover:text-orange-800">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {items.map(({ product, quantity }) => (
              <div
                key={product._id}
                className="flex items-center bg-white rounded-lg shadow p-4 mb-4"
              >
                <img
                  src={product.images?.[0] || "/placeholder-image.jpg"}
                  alt={product.name}
                  className="w-24 h-24 object-contain rounded"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {product.name}
                  </h2>
                  <p className="text-orange-600 font-bold">${product.price}</p>
                  <div className="mt-2 flex items-center space-x-4">
                    <label
                      htmlFor={`quantity-${product._id}`}
                      className="sr-only"
                    >
                      Quantity
                    </label>
                    <input
                      id={`quantity-${product._id}`}
                      type="number"
                      min="1"
                      max={product.stock}
                      value={quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          product._id,
                          Number(e.target.value)
                        )
                      }
                      className="w-16 border border-gray-300 rounded px-2 py-1"
                    />
                    <button
                      onClick={() => handleRemove(product._id)}
                      className="text-red-600 hover:text-red-800"
                      aria-label="Remove item"
                    >
                      <TrashIcon className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={handleClearCart}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Clear Cart
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <p className="text-lg font-bold mb-4">
              Total: ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={handleCheckout}
              className="w-full bg-orange-600 text-white py-3 rounded hover:bg-orange-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
