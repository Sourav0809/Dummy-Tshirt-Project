import { useContext, useState } from "react";
import cartContext from "./Store/cartContext";
const AddProductsForm = () => {
  const cartCtx = useContext(cartContext);
  const [productName, setProductName] = useState("");
  const [productText, setProductText] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [smallSizeQuantity, setSmallSizeQuantity] = useState(0);
  const [mediumSizeQuantity, setMediumSizeQuantity] = useState(0);
  const [largeSizeQuantity, setLargeSizeQuantity] = useState(0);

  const onProductNameChange = (e) => {
    setProductName(e.target.value);
  };
  const onProductTextChange = (e) => {
    setProductText(e.target.value);
  };
  const onProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };
  const smallQunatityChange = (e) => {
    setSmallSizeQuantity(e.target.value);
  };
  const mediumQunatityChange = (e) => {
    setMediumSizeQuantity(e.target.value);
  };
  const largeQunatityChange = (e) => {
    setLargeSizeQuantity(e.target.value);
  };

  const submitedFormHandeler = (e) => {
    e.preventDefault();

    const submitedProduct = {
      productName: productName,
      productText: productText,
      productPrice: productPrice,
      productId: Math.random(),
      smallSizeQuantity: smallSizeQuantity,
      mediumSizeQuantity: mediumSizeQuantity,
      largeSizeQuantity: largeSizeQuantity,
    };

    console.log(submitedProduct);

    cartCtx.addToCart(submitedProduct);
  };

  return (
    <form
      className=" mt-10 p-4 w-[60rem] m-auto bg-blue-950 text-white flex flex-col justify-center items-center gap-2 "
      onSubmit={submitedFormHandeler}
    >
      <div className=" flex justify-center items-center gap-4">
        <div className=" flex justify-center items-center gap-2">
          <label htmlFor="productName"> ProductName:</label>
          <input
            type=" text"
            placeholder="Enter Product Name "
            className=" text-black"
            onChange={onProductNameChange}
          />
        </div>
        <div className=" flex justify-center items-center gap-2">
          <label htmlFor="productName"> ProductText:</label>
          <input
            type=" text"
            placeholder="Enter Product Des.. "
            className=" text-black"
            onChange={onProductTextChange}
          />
        </div>
        <div className=" flex justify-center items-center gap-2">
          <label htmlFor="productName"> ProductPrice:</label>
          <input
            type="number"
            placeholder="Enter Product Price "
            className=" text-black"
            onChange={onProductPriceChange}
          />
        </div>
      </div>

      <div>
        <div className=" flex justify-center items-center gap-2">
          <label htmlFor="productName"> Quantity:</label>
          <label htmlFor=" Quantity size">S:</label>
          <input
            type="number"
            className=" text-black w-[16%]"
            onChange={smallQunatityChange}
          />
          <label htmlFor=" Quantity size">M:</label>
          <input
            type="number"
            className=" text-black w-[16%]"
            onChange={mediumQunatityChange}
          />
          <label htmlFor=" Quantity size">L:</label>
          <input
            type="number"
            className=" text-black w-[16%]"
            onChange={largeQunatityChange}
          />
          <button className=" bg-white text-black font-semibold p-2 ">
            Add Product
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddProductsForm;
