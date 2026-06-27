import { useState, useEffect } from "react";

const STORAGE_KEY = "agrostore-cart";

let cartItemCounter = 0;

const loadCart = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const useCart = () => {
  const [cart, setCart] = useState(loadCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const cartItem = {
      ...item,
      cartItemId: ++cartItemCounter,
    };
    setCart((prev) => [...prev, cartItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
};

export default useCart;
