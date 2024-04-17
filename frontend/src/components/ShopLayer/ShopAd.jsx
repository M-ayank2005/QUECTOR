import React from "react";
import img0 from "../../lib/img0.jpg"
const ShopAd = () => {
  return (
    <>
      <div className="mt-12 flex flex-row h-96 mx-36 border border-black">
        <div className="h-full w-1/3 ">
          <img
            src={img0}
            className="h-96 w-full overflow-hidden object-cover"
            alt=""
          />
        </div>
        <div className="h-full w-2/3 items-center flex flex-col  justify-center p-10 ">
          <h1 className=" text-4xl font-bold">Introducing .. The all new branded shop</h1>
        </div>
      </div>
    </>
  );
};

export default ShopAd;
