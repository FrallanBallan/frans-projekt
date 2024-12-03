import { createContext, ReactNode, useContext, useState } from 'react';
import { IUnit } from '../models/IUnit';

interface CartContextInterface {
  cart: IUnit[];
  addToCart: (product: IUnit) => void;
  removeFromCart: (index: number) => void;
}

const CartContext = createContext<CartContextInterface | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<IUnit[]>([]);

  const addToCart = (product: IUnit) => {
    setCart((prevCart) => [...prevCart, product]); // Tar min tidigare array av Cart, spreadar och lägger till i min nya array cart
  };

  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be within CartProvider');
  }
  return context;
};
