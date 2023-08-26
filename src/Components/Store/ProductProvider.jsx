import { useState } from "react";
import cartContext from "./productContext";
import axios from "axios";

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addToProductList = async (newItems) => {
    console.log(newItems.productId);
    try {
      const sumbitRes = await axios.post(
        `https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`,
        newItems
      );
      console.log(sumbitRes);

      setProducts((prev) => {
        return [...prev, newItems];
      });
    } catch (error) {
      console.log(error);
    }
  };

  const productProviderValues = {
    products: products,
    setProducts: setProducts,
    addToProductList: addToProductList,
  };

  return (
    <cartContext.Provider value={productProviderValues}>
      {props.children}
    </cartContext.Provider>
  );
};

export default ProductProvider;
