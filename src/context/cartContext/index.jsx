import React, { useState } from "react";

export const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id
            ? { ...exist, contador: exist.contador + item.contador }
            : x
        )
      );
    } else {
      setCart((state) => {
        return [...state, item];
      });
    }
  };

  const removeCart =(id)=>{                     
    const remove = cart.filter(item => item.id !== id);
    setCart(remove)         
  }

  const clearCart = () => setCart([])

  const totalCost = () => {           
    const cost = cart.reduce((acu,item) =>acu + item.price * item.contador,0)
    return cost;  
  }

  const itemCost = (item) => item.price * item.contador;

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, clearCart, itemCost, totalCost}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;