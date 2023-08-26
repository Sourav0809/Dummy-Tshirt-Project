/* eslint-disable react/prop-types */

const Header = (props) => {
  return (
    <div className="p-4  h-12 flex justify-around items-center text-2xl bg-blue-950 text-white">
      <h1 className="cursor-pointer  font-serif"> Fashion World</h1>
      <h1
        className="cursor-pointer"
        onClick={() => {
          props.setViewCartHandeler();
        }}
      >
        Cart
        <span className=" bg-blue-800 text-white p-2 rounded-md ">0</span>
      </h1>
    </div>
  );
};

export default Header;
