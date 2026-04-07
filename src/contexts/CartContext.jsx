import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext();

function CartContextProvider( {children} ) {

  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, isLoggedIn, setIsLoggedIn }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;