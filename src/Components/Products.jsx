import { useContext } from "react";
import productContext from "./Store/productContext";
import axios from "axios";

/* eslint-disable react/prop-types */
const Products = (props) => {
  const productCtx = useContext(productContext);

  // when user buy medium size
  const buySmallSizeHandeler = () => {
    const purchasedItem = {
      productName: props.productName,
      productId: props.productId,
      productPrice: props.productPrice,
      productText: props.productText,
      productSize: "S",
      productQuantity: 1,
    };

    // update into server function if the user buy something we need to decrease item's stock

    const updateServer = async () => {
      try {
        const { data } = await axios.get(
          `https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/products.json/`
        );

        let itemId = "";
        Object.keys(data).forEach((key) => {
          if (data[key].productName === props.productName) {
            itemId = key;
          }
        });

        if (itemId) {
          const updateRes = await axios.patch(
            `https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/products/${itemId}.json`,
            { smallSizeQuantity: props.smallSizeQuantity - 1 }
          );
          console.log(updateRes);
        }

        // updating the decrasing quantity into UI

        productCtx.setProducts((products) => {
          const newProducts = products.map((item) => {
            if (item.productId === props.productId) {
              item.smallSizeQuantity--;
            }
            return item;
          });

          return newProducts;
        });
      } catch (error) {
        console.log(error);
      }
    };
    updateServer();
  };

  // when user buy medium size
  const buyMediumSizeHandeler = () => {
    const purchasedItem = {
      productName: props.productName,
      productId: props.productId,
      productPrice: props.productPrice,
      productText: props.productText,
      productSize: "M",
      productQuantity: 1,
    };

    // update into server function if the user buy something we need to decrease item's stock
    const updateServer = async () => {
      try {
        const { data } = await axios.get(
          `https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/products.json/`
        );

        let itemId = "";
        Object.keys(data).forEach((key) => {
          if (data[key].productName === props.productName) {
            itemId = key;
          }
        });

        if (itemId) {
          const updateRes = await axios.patch(
            `https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/products/${itemId}.json`,
            { mediumSizeQuantity: props.mediumSizeQuantity - 1 }
          );
          console.log(updateRes);
        }

        // updating the decrasing quantity into ui
        productCtx.setProducts((products) => {
          const newProducts = products.map((item) => {
            if (item.productId === props.productId) {
              item.mediumSizeQuantity--;
            }
            return item;
          });

          return newProducts;
        });
      } catch (error) {
        console.log(error);
      }
    };
    updateServer();
  };

  const buyLargeSizeHandeler = () => {
    const purchasedItem = {
      productName: props.productName,
      productId: props.productId,
      productPrice: props.productPrice,
      productText: props.productText,
      productSize: "L",
      productQuantity: 1,
    };
    console.log(purchasedItem);

    // update into server function if the user buy something we need to decrease item's stock
    const updateServer = async () => {
      try {
        const { data } = await axios.get(
          `https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/products.json/`
        );

        let itemId = "";
        Object.keys(data).forEach((key) => {
          if (data[key].productName === props.productName) {
            itemId = key;
          }
        });

        if (itemId) {
          const updateRes = await axios.patch(
            `https://dummy-tshirt-project-default-rtdb.asia-southeast1.firebasedatabase.app/products/${itemId}.json`,
            { largeSizeQuantity: props.largeSizeQuantity - 1 }
          );
          console.log(updateRes);
        }

        // updating the decrasing quantity into ui
        productCtx.setProducts((products) => {
          const newProducts = products.map((item) => {
            if (item.productId === props.productId) {
              item.largeSizeQuantity--;
            }
            return item;
          });

          return newProducts;
        });
      } catch (error) {
        console.log(error);
      }
    };
    updateServer();
  };

  return (
    <div className=" bg-blue-950 w-[60rem] p-4 mt-1 flex gap-8 justify-center item-center text-white ">
      <h1>{props.productName}</h1>
      <h1>{props.productText} </h1>
      <h1> {props.productPrice} </h1>
      <button
        className="  bg-white text-black font-semibold p-2"
        onClick={buySmallSizeHandeler}
      >
        {`Buy Small ( ${props.smallSizeQuantity} ) `}
      </button>
      <button
        className="  bg-white text-black font-semibold p-2"
        onClick={buyMediumSizeHandeler}
      >
        {`Buy Medium ( ${props.mediumSizeQuantity} ) `}
      </button>
      <button
        className="  bg-white text-black font-semibold py-1 px-2"
        onClick={buyLargeSizeHandeler}
      >
        {`Buy Large ( ${props.largeSizeQuantity} ) `}
      </button>
    </div>
  );
};

export default Products;
