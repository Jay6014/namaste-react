import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { MEDIA_ASSETS_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";



const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const handleClearCart = () => {
    dispatch(clearCart());
  };

   // ✅ calculate total price (per item.quantity)
  const totalPrice = cartItems.reduce((acc, item) => {
    const { price, defaultPrice, finalPrice } = item.card.info;
    const basePrice = (price ?? defaultPrice) / 100;
    const discountedPrice = finalPrice ? finalPrice / 100 : basePrice;
    return acc + discountedPrice * item.quantity;
  }, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate(-1)} // Go back to previous page
        className="mb-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-semibold transition cursor-pointer"
      >
        ← Back
      </button>

      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
        {cartItems.length > 0 && (
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition cursor-pointer"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Empty Cart Message */}
      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-500">
            Looks like you haven’t added anything yet.
          </p>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-xl p-4">
          {/* Cart Items */}
          {cartItems.map((item) => {
            const { name, price, defaultPrice, finalPrice, imageId } = item.card.info;
            const basePrice = (price ?? defaultPrice) / 100;
            const discountedPrice = finalPrice ? finalPrice / 100 : basePrice;

            return (
              <div
                key={item.card.info.id}
                className="flex justify-between items-center border-b py-3"
              >
                <div className="flex items-center gap-4">
                  {imageId && (
                    <img
                      src={MEDIA_ASSETS_URL + imageId}
                      alt={name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-800">{name}</p>
                    <p className="text-gray-600">₹{discountedPrice}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-lg font-semibold text-gray-700">
                    Qty: {item.quantity}
                  </span>
                  <span className="text-lg font-bold text-gray-800">
                    ₹{(discountedPrice * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Total Section */}
          <div className="flex justify-between items-center mt-6 pt-4">
            <span className="text-xl font-bold text-gray-800">
              Total Items: {cartItems.length}
            </span>
            <span className="text-xl font-bold text-gray-800">
              Total: ₹{totalPrice.toFixed(2)}
            </span>
          </div>

          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-bold transition">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
