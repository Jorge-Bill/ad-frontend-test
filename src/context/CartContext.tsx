'use client';

import React, { createContext, useState, useEffect } from 'react';
import { getFromSession, saveInSession } from '@/services/session';
import { Game } from '@/types/game';

type CartContextType = {
  cart: Game[];
  setCart: React.Dispatch<React.SetStateAction<Game[]>>;
  notification: boolean;
  setNotification: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  addToCart: (game: Game) => void;
  removeFromCart: (game: Game) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {},
  notification: false,
  setNotification: () => {},
  message: '',
  setMessage: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Game[]>([]);
  const [notification, setNotification] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const stored = getFromSession('cart');
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    saveInSession('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (game: Game) => {
    if (cart.filter(stored => stored.id === game.id).length > 0) {
      setMessage(`Already added ${game.name} to cart.`);
      setNotification(true);
      return;
    }
    setCart(cart => [...cart, game]);
    setMessage(`Added ${game.name} to cart.`);
    setNotification(true);
  };

  const removeFromCart = (game: Game) => {
    setCart(cart => [...cart.filter(stored => stored.id !== game.id)]);
    setMessage(`Removed ${game.name} from cart.`);
    setNotification(true);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        notification,
        setNotification,
        message,
        setMessage,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
