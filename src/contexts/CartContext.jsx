// src/contexts/CartContext.jsx
import React, { createContext, useState, useEffect } from "react";

// Create the context
export const CartContext = createContext();

// Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const newCart = [...prevItems];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  const updateCartCount = () => cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart, updateCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
