import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

function CartContextProvider( {children} ) {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;