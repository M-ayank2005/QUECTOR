import React from "react";
import ShopName from "./ShopName";
import img0 from "../../lib/img0.jpg"

const ShopLayer = () => {
  return (
    <>
      <div className="h-auto w-100 mt-8 mb-8 mx-36 flex flex-row justify-between gap-4 items-center"> 
        <ShopName name="Rishi Retail Shop" img={img0} />
        <ShopName name="Sidharth Retail Shop " img={img0} />
        <ShopName name="Akshita  Retail Shop" img={img0}/>
        <ShopName name="Mayank Retail Shop" img={img0}/>
      </div>
    </>
  );
};

export default ShopLayer;
