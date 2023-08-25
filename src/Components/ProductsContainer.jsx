import { useContext } from "react";
import Products from "./Products";
import cartContext from "./Store/cartContext";
import Card from "./UI/Card";
const ProductsContainer = () => {
  const { cartItems } = useContext(cartContext);
  return (
    <Card>
      {cartItems.map((item) => {
        return (
          <Products
            key={item.productId}
            productName={item.productName}
            productPrice={item.productPrice}
            productId={item.productId}
            smallSizeQuantity={item.smallSizeQuantity}
            mediumSizeQuantity={item.mediumSizeQuantity}
            largeSizeQuantity={item.largeSizeQuantity}
          />
        );
      })}
    </Card>
  );
};

export default ProductsContainer;
