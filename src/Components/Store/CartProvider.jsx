import { useState } from "react";
import cartContext from "./cartContext";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (newItems) => {
    setCartItems((prev) => {
      return [...prev, newItems];
    });
  };

  const cartProviderValues = {
    cartItems: cartItems,
    setCartItems: setCartItems,
    addToCart: addToCart,
  };
  return (
    <cartContext.Provider value={cartProviderValues}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
