/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className=" m-auto  mt-10 w-[800px] flex justify-center items-center ">
      {props.children}
    </div>
  );
};

export default Card;
