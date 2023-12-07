import { createContext, useState } from "react";
import Cart from "../Component/Cart";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [item, setItem] = useState([]);
  return (
    <CartContext.Provider value={{ item, setItem }}>
      {props.children}
    </CartContext.Provider>
  );
};
