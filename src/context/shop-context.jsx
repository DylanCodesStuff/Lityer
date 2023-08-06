import React, { createContext, useState } from "react";
import data from "../DummyData/data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < data.length; i++) {
    cart[i] = 0;
  }

  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };
  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
      total += cartItems[i] * data[i].price;
    }
    return total;
  };

  const contextValue = { cartItems, addToCart, removeFromCart, setCartItems, getDefaultCart, getTotalPrice };
  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
