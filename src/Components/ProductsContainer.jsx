import { useContext } from "react";
import Products from "./Products";
import cartContext from "./Store/productContext";
import Card from "./UI/Card";
const ProductsContainer = () => {
  const { products } = useContext(cartContext);

  return (
    <Card>
      {products.map((item) => {
        return (
          <Products
            key={item.productId}
            productName={item.productName}
            productText={item.productText}
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
