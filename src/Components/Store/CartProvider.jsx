import { useState } from "react";
import cartContext from "./cartContext";
import axios from "axios";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (newItems) => {
    const upadteIntoServer = async (newItems) => {
      try {
        const updateServer = await axios.post(
          `https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/Cart.json`,
          newItems
        );

        console.log(updateServer);

        setCartItems((prev) => {
          return [...prev, newItems];
        });
      } catch (error) {
        console.log(error);
      }
    };
    upadteIntoServer(newItems);
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
