// import a from "next/a";

import {
  RiInstagramFill,
  RiCopyrightLine,
  RiFacebookFill,
  RiaedinFill,
  RiTwitterFill,
  RiGooglePlayLine,
  RiAppleLine,
} from "@remixicon/react";


export function Element() {
  return (
    <div className="w-full py-16 px-4 bg-black mt-16 flex flex-row text-white">
      <div className=" w-1/3 flex flex-col gap-3">
        <h3 className= "md:tracking-wide md:text-6xl font-bold ">QUECTO</h3>

        <div className="hidden md:display:block  md:flex flex-row gap-5 mt-4">
          <a href={"/"}>
            {" "}
            <RiInstagramFill size={36} />{" "}
          </a>
          <a href={"/"}>
            {" "}
            <RiTwitterFill size={36} />{" "}
          </a>
          <a href={"/"}>
            {" "}
            <RiFacebookFill size={36} />{" "}
          </a>
          <a href={"/"}>
            {" "}
            {/* <RiaedinFill size={36} />{" "} */}
          </a>
        </div>
        <div className="flex flex-row gap-2 justify-start items-center">
          <RiCopyrightLine />
          <h3 className=" text-xxs md:text-md lg:text-lg"> Quecto Technologies Private Limited</h3>
        </div>
      </div>
      <div className="w-1/3 flex pl-3 md:pl-0  flex-row lg:gap-0 gap-3 text-white justify-between ">
        <div className="flex flex-col lg:gap-6 gap-3 font-medium md:text-lg lg:pl-0 md:pl-6 text-xxs ">
          <a href={"/"} className="hover:scale-105">Home</a>
          <a href={"/"} className="hover:scale-105">Delivery Areas</a>
          <a href={"/"} className="hover:scale-105">Careers</a>
          <a href={"/"} className="hover:scale-105">Customer Support</a>
        </div>
        <div className="flex flex-col lg:gap-6 gap-3 font-medium md:text-lg text-xxs">
          <a href={"/"} className="hover:scale-105">Privacy Policy</a>
          <a href={"/"} className="hover:scale-105">Terms of Use</a>
          <a href={"/"} className="hover:scale-105" >Press</a>
          <a href={"/"} className="hover:scale-105">About us</a>
        </div>
      </div>
      <div className="w-1/3 flex flex-col pl-4 md:pl-28 lg:pl-32 lg:pr-4 md:gap-5 gap-3">
        <h3 className="lg:mb-2 lg:text-xl text-xs">Download App</h3>
        <button className="border border-white lg:text-md lg:py-3 flex lg:text-lg text-xxs flex-row lg:px-3 justify-center items-center gap-2 rounded-lg hover:bg-white hover:text-black duration-300">
          {" "}
          <RiGooglePlayLine />
          Get it on play store
        </button>
        <button className="border border-white lg:text-md lg:py-3 flex lg:text-lg text-xxs flex-row lg:px-3 justify-center items-center gap-2 rounded-lg  hover:bg-white hover:text-black duration-300">
          {" "}
          <RiAppleLine /> Get it on app store
        </button>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <>
      <Element />
    </>
  );
};

export default Footer;
