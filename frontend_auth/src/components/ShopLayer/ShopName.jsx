import React from "react";

const ShopName = (props) => {
  return (
    <>
      <div className="w-72 bg-yellow-300 h-96 flex border border-black rounded-xl flex-col cursor-pointer hover:scale-102 duration-300">
        <div className="h-3/4 w-full bg-blue-200 rounded-t-xl object-cover overflow-hidden  ">
          <img src={props.img} alt="" className=" object-cover object-center" />
        </div>
        <div className="h-1/4 w-full bg-black  rounded-b-xl p-4 flex flex-col gap-1 justify-between ">
          <div className=" text-md font-semibold text-white">
            <h1>{props.name}</h1>
          </div>
          <div className=" text-white font-normal text-md ">
            <h2>Rating : -----</h2>
            <h2>Delivery in : -----</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopName;
