import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCartItem, removeFromCart } from "../redux/cartSlice";
import { TrashIcon, MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const Cart = ({ isDropdown = false }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    dispatch(updateCartItem({ productId, quantity: newQuantity }));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className={`${isDropdown ? "p-4" : "text-center py-8"}`}>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className={`${isDropdown ? "max-h-96 overflow-y-auto" : ""}`}>
      <div className="space-y-4">
        {items.map(({ product, quantity }) => (
          <div
            key={product._id}
            className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow"
          >
            <img
              src={product.images?.[0] || "/placeholder-image.jpg"}
              alt={product.name}
              className="w-16 h-16 object-contain rounded"
            />

            <div className="flex-1">
              <h3 className="font-medium text-gray-900 text-sm">
                {product.name}
              </h3>
              <p className="text-orange-600 font-bold">${product.price}</p>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(product._id, quantity - 1)}
                className="p-1 rounded-full hover:bg-gray-100"
                disabled={quantity <= 1}
              >
                <MinusIcon className="h-4 w-4" />
              </button>

              <span className="w-8 text-center">{quantity}</span>

              <button
                onClick={() => handleQuantityChange(product._id, quantity + 1)}
                className="p-1 rounded-full hover:bg-gray-100"
                disabled={quantity >= product.stock}
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={() => handleRemove(product._id)}
              className="p-2 text-red-600 hover:bg-red-50 rounded-full"
            >
              <TrashIcon className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>

      {!isDropdown && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total: ${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
