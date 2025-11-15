import { useState, useEffect } from "react";
import { Book, CartItem } from "@/types/book";

const CART_STORAGE_KEY = "bookstore_cart";

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newCart));
  };

  const addToCart = (book: Book, quantity: number = 1) => {
    const existingItem = cart.find((item) => item.book.id === book.id);
    
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.book.id === book.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      saveCart(updatedCart);
    } else {
      saveCart([...cart, { book, quantity }]);
    }
  };

  const removeFromCart = (bookId: string) => {
    saveCart(cart.filter((item) => item.book.id !== bookId));
  };

  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
      return;
    }
    
    const updatedCart = cart.map((item) =>
      item.book.id === bookId ? { ...item, quantity } : item
    );
    saveCart(updatedCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.book.price * item.quantity, 0);
  };

  const getItemCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount,
  };
};
