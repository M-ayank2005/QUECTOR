import React from "react";

const Cheader = () => {
  return (
    <>
      <div className=" w-100 flex align-center justify-center z-20 bg-none">
        <div className="w-full h-full flex flex-row justify-between mx-4 xl:mx-36 my-10  ">
          <div className="w-1/2  flex flex-row justify-between items-center  text-xl font-medium no-underline">
            <a
              className="text-4xl lg:text-4xl  font-extrabold "
              id="quecto"
              href="/"
            >
              QUECTO
            </a>
            <a class="link no-underline">About</a>
            <a class="link no-underline">Contact</a>
            <a class="link no-underline">Explore</a>
          </div>
          <div className="w-1/2 flex flex-row justify-end items-center gap-4 text-3xl gap-8 font-medium">
          <i class="ri-search-line"></i>
          <i class="ri-shopping-cart-fill"></i>
          <i class="ri-user-fill"></i>
          </div>
        </div>
      </div>
      <div className="w-full px-36">
        <div className=" border-b-2"> </div>
      </div>
    </>
  );
};

export default Cheader;
