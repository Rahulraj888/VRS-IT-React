import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  // Load initial cart items from localStorage (or use an empty array)
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Whenever cartItems change, update localStorage
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add a product to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Remove a product from the cart by its index
  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const newCart = [...prevItems];
      newCart.splice(index, 1);
      return newCart;
    });
  };

  // The cart count is just the length of cartItems
  const updateCartCount = () => cartItems.length;
  
  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart, updateCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
