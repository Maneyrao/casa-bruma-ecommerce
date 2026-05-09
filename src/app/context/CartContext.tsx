import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { Product, ProductVariant } from '../data/products';
import {
  buildCartItemKey,
  calculateCartSubtotal,
  calculateShipping,
  getDefaultVariant,
  getDisplayPrice,
} from '../lib/commerce.js';

export interface CartItem {
  id: string;
  product: Product;
  name: string;
  slug: string;
  image: string;
  price: number;
  quantity: number;
  variant?: ProductVariant;
  packs?: Product['packs'];
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, variant?: ProductVariant) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  getShipping: () => { cost: number; isFree: boolean; remainingForFree: number; label: string };
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const readStoredCart = (): CartItem[] => {
  try {
    const saved = localStorage.getItem('cart');
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem('cart');
    return [];
  }
};

const toCartItem = (product: Product, quantity = 1, variant?: ProductVariant): CartItem => {
  const selectedVariant = variant || getDefaultVariant(product);
  const itemId = buildCartItemKey(product.id, selectedVariant?.id);

  return {
    id: itemId,
    product,
    name: product.name,
    slug: product.slug,
    image: product.image,
    price: getDisplayPrice(product, selectedVariant),
    quantity: Math.max(1, quantity),
    variant: selectedVariant,
    packs: product.packs,
  };
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(readStoredCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity = 1, variant?: ProductVariant) => {
    const newItem = toCartItem(product, quantity, variant);

    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === newItem.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }

      return [...prevItems, newItem];
    });
  };

  const removeFromCart = (itemId: string) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId && item.product.id !== itemId)
    );
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId || item.product.id === itemId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getCartTotal = () => calculateCartSubtotal(items);

  const getCartCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  const getShipping = () => calculateShipping(getCartTotal());

  const value = useMemo(
    () => ({
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getCartCount,
      getShipping,
    }),
    [items]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
