// src/pages/Menu.jsx
import React, { useState } from "react";
import Header from "../components/Header";
import Cart from "../components/Cart";
import TargetCursor from "../components/TargetCursor";

import coffeeBg from "../assets/coffee-bg.jpg";
import coldCoffeeImg from "../assets/cold-coffee.jpg";
import chocolateImg from "../assets/chocolate.jpg";
import americanoImg from "../assets/americano.jpg";
import masalaChaiImg from "../assets/masala-chai.jpg";
import cappuccinoImg from "../assets/cappuccino.jpg";
import latteImg from "../assets/latte.jpg";
import espressoImg from "../assets/espresso.jpg";
import mochaImg from "../assets/mocha.jpg";

import StarBorder from "../components/StarBorder";

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const menuItems = [
    { id: 1, name: "Cold Coffee", image: coldCoffeeImg, price: 4.0, description: "Refreshing iced coffee with creamy texture" },
    { id: 2, name: "Chocolate", image: chocolateImg, price: 4.5, description: "Rich and creamy hot chocolate" },
    { id: 3, name: "Americano", image: americanoImg, price: 3.5, description: "Classic espresso with hot water" },
    { id: 4, name: "Masala Chai", image: masalaChaiImg, price: 3.0, description: "Traditional Indian spiced tea" },
    { id: 5, name: "Cappuccino", image: cappuccinoImg, price: 4.25, description: "Espresso with steamed milk foam" },
    { id: 6, name: "Latte", image: latteImg, price: 4.5, description: "Smooth espresso with steamed milk" },
    { id: 7, name: "Espresso", image: espressoImg, price: 3.0, description: "Strong concentrated coffee shot" },
    { id: 8, name: "Mocha", image: mochaImg, price: 4.75, description: "Chocolate-flavored coffee delight" }
  ];

  const handleAddToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      return existingItem
        ? prevItems.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...prevItems, { ...item, quantity: 1 }];
    });
    setShowCart(true);
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen font-sans flex flex-col relative">
      {/* Custom cursor added */}
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <Header 
        cartItemCount={cartItemCount} 
        onCartClick={() => setShowCart(!showCart)} 
      />
      
      <main className="flex-1 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={coffeeBg} 
            alt="Coffee background"
            className="w-full h-full object-cover brightness-[0.7] scale-110" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
        
        <div className="relative py-12 px-6 sm:px-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white uppercase tracking-wider">
                Our Menu
              </h1>
            </div>
            
            <Cart
              cartItems={cartItems}
              showCart={showCart}
              setShowCart={setShowCart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
              calculateTotal={calculateTotal}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {menuItems.map((item) => (
                <div 
                  key={item.id} 
                  className="group bg-white bg-opacity-90 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-bold text-[#4a2600] group-hover:text-[#6e3a1f] transition-colors duration-300">
                        {item.name}
                      </h2>
                      <span className="text-[#8a4b27] font-bold group-hover:text-[#6e3a1f] transition-colors duration-300">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>  
                    
                    <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">
                      {item.description}
                    </p>
                    
                    <StarBorder
                      as="button"
                      onClick={() => handleAddToCart(item)}
                      className="w-full py-2 cursor-target"
                      color="cyan"
                      speed="5s"
                    >
                      Add to Cart
                    </StarBorder>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Menu;
