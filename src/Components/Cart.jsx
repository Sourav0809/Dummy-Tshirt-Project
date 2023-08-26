/* eslint-disable react/prop-types */
const Cart = (props) => {
  console.log(props);
  return (
    <div className=" flex px-4 py-2 justify-between items-center text-black text-2xl font-normal">
      <h1>{props.productName}</h1>
      <h1>{props.productText} </h1>
      <h1> {props.productSize}</h1>
      <h1> ${props.productPrice}</h1>
    </div>
  );
};

export default Cart;
