// src/components/Cart.jsx
import React from "react";
import { FiShoppingCart, FiX, FiPlus, FiMinus } from "react-icons/fi";

const Cart = ({ 
  cartItems, 
  showCart, 
  setShowCart, 
  removeFromCart, 
  updateQuantity, 
  calculateTotal 
}) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${showCart ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`bg-white w-full max-w-md h-full overflow-y-auto p-6 transform transition-transform duration-300 ${showCart ? 'translate-x-0' : 'translate-x-full'} ml-auto`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-[#4a2600]">Your Cart</h2>
          <button 
            onClick={() => setShowCart(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <FiX />
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-10">
            <FiShoppingCart className="mx-auto text-4xl text-gray-300 mb-4" />
            <p className="text-gray-600">Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center border-b border-gray-200 pb-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium text-[#4a2600]">{item.name}</h3>
                    <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-l-md hover:bg-gray-300"
                    >
                      <FiMinus size={14} />
                    </button>
                    <span className="w-10 text-center">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-r-md hover:bg-gray-300"
                    >
                      <FiPlus size={14} />
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between mb-4 text-lg">
                <span className="font-medium">Subtotal:</span>
                <span className="font-bold">${calculateTotal()}</span>
              </div>
              <button className="w-full bg-[#8a4b27] text-white py-3 rounded-md hover:bg-[#6e3a1f] transition-colors font-medium">
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};


export default Cart;