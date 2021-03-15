import React, { useState } from "react";

export const CartContext = React.createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCart = (item) => {
    const exist = cart.find((x) => x.categoryId === item.categoryId);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.categoryId === item.categoryId
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

  const removeCart =(categoryId)=>{                     
    const remove = cart.filter(item => item.categoryId !== categoryId);
    setCart(remove)         
  }

  const clearCart = () => setCart([])

  const totalCost = () => {           
    const cost = cart.reduce((acu,item) =>acu + item.price * item.contador, 0)
    return cost;  
  }

  const quantItem = cart.reduce((acumulador,item) =>acumulador + item.contador,0)

  const itemCost = (item) => item.price * item.contador;


  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, clearCart, itemCost, totalCost, quantItem}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;