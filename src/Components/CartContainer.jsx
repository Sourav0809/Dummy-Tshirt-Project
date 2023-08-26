import { useContext, useEffect } from "react";
import Cart from "./Cart";
import cartContext from "./Store/cartContext";
import axios from "axios";
const CartContainer = (props) => {
  const cartCtx = useContext(cartContext);
  useEffect(() => {
    const fetchedData = async () => {
      try {
        const { data } = await axios.get(
          "https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/Cart.json"
        );
        if (data) {
          cartCtx.setCartItems(Object.values(data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchedData();
  }, []);

  return (
    <div className=" bg-slate-300 w-[28vw] h-screen  absolute top-[3rem] right-0">
      <div
        onClick={() => {
          props.hideCartHandeler();
        }}
        className=" cursor-pointer text-5xl font-bold text-red-600 absolute top-0 right-1"
      >
        X
      </div>
      <div className=" mt-16 ">
        {cartCtx.cartItems.map((items) => {
          console.log(items);
          return (
            <Cart
              key={items.productId}
              productName={items.productName}
              productId={items.productId}
              productText={items.productText}
              productSize={items.productSize}
              productPrice={items.productPrice}
              productQuantity={items.productQuantity}
              hideCartHandeler={props.hideCartHandeler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CartContainer;
