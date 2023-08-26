import { useContext, useEffect, useState } from "react";
import AddProductsForm from "./Components/AddProductsForm";
import Header from "./Components/Header";
import ProductsContainer from "./Components/ProductsContainer";
import axios from "axios";
import productContext from "./Components/Store/productContext";
import Cart from "./Components/Cart";
const App = () => {
  const ProductContext = useContext(productContext);
  const [viewCart, setViewCart] = useState(false);

  const setViewCartHandeler = () => {
    setViewCart(true);
  };
  const hideCartHandeler = () => {
    setViewCart(false);
  };

  useEffect(() => {
    const userData = async () => {
      try {
        const { data } = await axios.get(
          `https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/products.json`
        );
        if (data) {
          ProductContext.setProducts(Object.values(data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    userData();
  }, []);

  return (
    <>
      {viewCart && <Cart hideCartHandeler={hideCartHandeler} />}
      <Header setViewCartHandeler={setViewCartHandeler} />
      <AddProductsForm />
      <ProductsContainer />
    </>
  );
};

export default App;
