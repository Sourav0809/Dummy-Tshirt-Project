/* eslint-disable react/prop-types */
const Cart = (props) => {
  return (
    <div className=" bg-slate-300 w-[28vw] h-[calc(100vh-3rem)] absolute top-[3rem] right-0">
      <div
        onClick={() => {
          props.hideCartHandeler();
        }}
        className=" cursor-pointer text-5xl font-bold text-red-600 absolute top-0 right-1"
      >
        X
      </div>
      <div className=" mt-16 ">
        <div className=" flex px-4 py-2 justify-between items-center text-black text-2xl font-normal">
          <h1>ProductName</h1>
          <h1>Navy Blue </h1>
          <h1> S</h1>
          <h1> $200</h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
