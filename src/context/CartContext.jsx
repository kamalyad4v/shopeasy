import { createContext, useContext, useState } from "react";

// 1. Create Context
const CartContext = createContext();

// 2. Create Provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Add item or increase qty if already exists
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity
  const updateQty = (id, qty) => {
    if (qty < 1) return removeFromCart(id);
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };

  // Derived values
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQty, total, count }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 3. Custom hook for easy access
export function useCart() {
  return useContext(CartContext);
}
