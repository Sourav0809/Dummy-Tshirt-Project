const Products = () => {
  return (
    <div className=" bg-blue-950 w-[60rem] m-auto p-4 mt-4 flex gap-8 justify-center item-center text-white ">
      <h1>ProductName</h1>
      <h1>Product Text is here </h1>
      <h1> Product Price </h1>
      <button className="  bg-white text-black font-semibold p-2">
        Buy Small
      </button>
      <button className="  bg-white text-black font-semibold p-2">
        Buy Medium
      </button>
      <button className="  bg-white text-black font-semibold py-1 px-2">
        Buy Large
      </button>
    </div>
  );
};

export default Products;
