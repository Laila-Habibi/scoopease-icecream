'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export interface CartProduct {
  image: string;
  name: string;
  price: number;
}

interface CartItem extends CartProduct {
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  total: number;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  addItem: (product: CartProduct) => void;
  decreaseItem: (name: string) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('scoopease-cart');
    if (saved) {
      try { setItems(JSON.parse(saved)); } catch { window.localStorage.removeItem('scoopease-cart'); }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem('scoopease-cart', JSON.stringify(items));
  }, [items, hydrated]);

  const addItem = (product: CartProduct) => {
    setItems((current) => {
      const existing = current.find((item) => item.name === product.name);
      return existing
        ? current.map((item) => item.name === product.name ? {...item, quantity: item.quantity + 1} : item)
        : [...current, {...product, quantity: 1}];
    });
  };

  const decreaseItem = (name: string) => setItems((current) =>
    current.flatMap((item) => item.name !== name ? [item] : item.quantity > 1 ? [{...item, quantity: item.quantity - 1}] : [])
  );

  const removeItem = (name: string) => setItems((current) => current.filter((item) => item.name !== name));
  const clearCart = () => setItems([]);

  const value = useMemo(() => ({
    items,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    total: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    isOpen, setIsOpen, addItem, decreaseItem, removeItem, clearCart,
  }), [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used inside CartProvider');
  return context;
};
