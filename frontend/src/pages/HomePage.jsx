// "use client";
import React, { useState } from "react";
// import Image from "next/image";
// import Footer from "@/components/Footer/page";
// import CaretDownIcon from "@/components/Icons/icon";
// import SignIn from "@/components/Buttons/SignIn";
// import { useRouter } from "next/router";
// Common styling values
import Footer from "../components/Footer";
const containerPadding = "px-4";
const largeScreenPadding = "lg:px-32";
const mediumScreenPadding = "md:px-28";

// Button styling
const buttonBase =
  "text-xs px-2 py-1 rounded-md md:text-md md:font-bold border border-black ";
const signInButton = `${buttonBase} md:px-5 md:py-2 md:w-24 md:rounded-lg bg-green-400 hover:bg-black hover:text-white duration-300 hover:scale-105 `;
const signUpButton = `${buttonBase} md:px-5 md:py-2 md:w-24 md:rounded-lg  hover:bg-black hover:text-white  duration-300 hover:scale-105`;
const searchButton = `${buttonBase} md:px-8 md:py-2 md:w-36 md:rounded-lg  md:text-lg md:font-light bg-blue-300 hover:bg-blue-400 duration-300 hover:scale-105`;

//Header Section
export function Htop() {
  // const router = useRouter();
  const handleSignInClick = (e) => {
    e.preventDefault();
    // router.push("/auth/login");
  };
  return (
    <div
      className={`w-full flex flex-col ${containerPadding} ${mediumScreenPadding} ${largeScreenPadding} overflow-hidden`}
    >
      <div className="w-full flex flex-row justify-between py-8">
        <div className="text-4xl md:text-4xl font-bold md:tracking-wide">
          QUECTO
        </div>
        <div className="flex flex-row gap-2 lg:gap-5">
          {/* <SignIn handleClick={handleSignInClick} /> */}
          <button className={signUpButton}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

//Main Heading Section starts here

export function Mtop() {
  return (
    <div className="py-48 w-full h-auto md:px-32 flex flex-col justify-between items-center md:py-28 md:pb-32 ">
      <div className="w-full flex flex-col justify-between items-center">
        <h1 className="text-4xl md:text-5xl font-bold lg:text-7xl md:w-4/5 text-center md:font-semibold">
          Discover the best <br />
          local stores{" "}
        </h1>
        <div className="w-5/6 h-auto flex justify-center gap-4 mt-12 md:mt-16">
          <input
            type="search"
            placeholder="Enter your location"
            className="py-1 px-2 text-sm w-5/6 md:w-3/6 md:h-12 border rounded-lg outline-none border-black all:initial"
          />
          <button className={searchButton}>Search</button>
        </div>
      </div>
    </div>
  );
}

//Dropdown Logic goes and starts here

// Dropdown Logic goes and starts here
export function Dropdown(props) {
  const [isDropdownOpen, setDropdownOpen] = useState(true);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const maxDropdownHeight = isDropdownOpen ? "1000px" : "0";

  return (
    <>
      <div
        className={`w-full  ${containerPadding} ${mediumScreenPadding} ${largeScreenPadding}`}
      >
        <div className="flex flex-row justify-between border-b border-t border-opacity-30 border-black">
          <h2 className="text-lg md:text-2xl py-8 font-extrabold">
            {props.name}
          </h2>
          {/* <button onClick={toggleDropdown}><CaretDownIcon /></button> */}
        </div>
      </div>

      <div
        style={{
          maxHeight: maxDropdownHeight,
          transition: "max-height 0.75s ease-in-out",
          overflow: "hidden",
        }}
      >
        {props.comp}
      </div>
    </>
  );
}

//HOW IT WORKS SECTION
export function HowItWorks() {
  return (
    <>
      <div
        className={`${containerPadding} ${largeScreenPadding} ${mediumScreenPadding}`}
      >
        <div className=" w-full py-2 flex flex-row">
          <div className="w-1/3 p-2  lg:p-6">
            <div className=" w-full flex flex-col items-center gap-4 ">
              <img src="/img9.png" width={200}></img>
              <div className="w-full flex flex-col gap-2 lg:gap-4">
                <h3 className=" text-xxs md:text-xl font-semibold">Step 1</h3>
                <p className="text-xxs md:text-base">
                  Enter your location. Type in your address or enable location
                  services to find stores near you
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/3 p-2 lg:p-6 border-l border-r border-black border-opacity-30">
            <div className=" w-full flex flex-col items-center gap-4">
              <img src="/img1.png" width={200}></img>
              <div className="w-full flex flex-col gap-2 lg:gap-4">
                <h3 className="text-xxs md:text-xl font-semibold">Step 2</h3>
                <p className="text-xxs md:text-base">
                  Discover nearby shopsand explore a wide range of products.
                  Find exactly what you need
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/3 p-2 lg:p-6">
            <div className=" w-full flex flex-col items-center gap-4 ">
              <img src="/img2.png" width={200}></img>
              <div className="w-full flex flex-col gap-2 lg:gap-4">
                <h3 className="text-xxs md:text-xl font-semibold">Step 3</h3>
                <p className="text-xxs md:text-base">
                  Place your order in one tap. Sit back and relax while we
                  prepare your order and make it ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

//Become a User section starts here

export function BUser() {
  return (
    <>
      <div
        className={`${containerPadding} ${largeScreenPadding} ${mediumScreenPadding}`}
      >
        <div className="w-full flex flex-col ">
          <div className="h-1/3  flex flex-row border-b border-black border-opacity-30">

            <div className=" w-1/2 md:w-3/5 flex justify-center items-center">
              <img src="/img3.png" width={300} height={500}></img>
            </div>

            <div className="w-1/2 md:w-2/5 p-4 md:p-8  flex flex-col gap-3 md:gap-6 items-left justify-center">
              <h1 className=" text-sm md:text-3xl font-bold">As a customer</h1>
              <p className="text-xxs md:text-lg">Enjoy the convenience of shopping from local stores. All you need is a device and our app</p>
              <button className="border border-black w-3/4 md:p-2 rounded-md md:rounded-lg text-xxs md:text-base font-semibold duration-300 hover:bg-black hover:text-white">Shop now</button>
            </div>

          </div>

          <div className="h-1/3 flex flex-row border-b border-black border-opacity-30">
          <div className=" w-1/2 md:w-3/5 flex justify-center items-center">
              <img src="/img4.png" width={300} height={500}></img>
            </div>

            <div className="w-1/2 md:w-2/5 p-4 md:p-8  flex flex-col gap-3 md:gap-6 items-left justify-center">
              <h1 className=" text-sm md:text-3xl font-bold">As a store owner</h1>
              <p className="text-xxs md:text-lg">Grow your business with Quecto. Reach more customers and expand your business through our platform</p>
              <button className="border border-black w-3/4 md:p-2 rounded-md md:rounded-lg text-xxs md:text-base font-semibold duration-300 hover:bg-black hover:text-white  ">Partner wtih us</button>
            </div>
          </div>

          <div className="h-1/3 flex flex-row ">
          <div className=" w-1/2 md:w-3/5 flex justify-center items-center">
              <img src="/img5.png" width={300} height={500}></img>
            </div>

            <div className="w-1/2 md:w-2/5 p-4 md:p-8  flex flex-col gap-3 md:gap-6 items-left justify-center">
              <h1 className=" text-sm md:text-3xl font-bold">As a team</h1>
              <p className="text-xxs md:text-lg">Join our team and contribute to building a top notch online platform to support the local businesses of India</p>
              <button className="border border-black w-3/4 md:p-2 rounded-md md:rounded-lg text-xxs md:text-base font-semibold duration-300 hover:bg-black hover:text-white">Work with us</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function DownloadApp() {
  return (
    <>
      <div
        className={` ${containerPadding} ${mediumScreenPadding} ${largeScreenPadding}`}
      >
        <div className="w-full flex flex-row  h-auto py-2 md:py-0 ">
          <div className=" w-4/6 gap-3 pt-4 md:w-1/2 flex flex-col md:gap-8 jutify-center md:py-16">
            <h2 className=" text-sm md:text-3xl font-bold">Shop with ease</h2>
            <p className=" text-xxs md:text-xl">
              Discover and order the best products <br></br> from local stores
              with Quecto. <br></br>Our platform offers variety of items{" "}
              <br></br> available in your local neighbour
            </p>
            <button className=" w-2/6 text-xxs md:text-sm md:w-2/6 border border-black md:py-2 md::mt-2 md:px-4 md:rounded-lg hover:bg-black hover:text-white duration-300 scale-105">
              Download
            </button>
          </div>
          <div className=" w-2/6 md:w-1/2 object-cover flex justify-center ">
            <img src="/img6.png" className=""></img>
          </div>
        </div>
      </div>
    </>
  );
}

const HomePage= () => (
  <>
    <Htop />
    <Mtop />
    <Dropdown name="How it works" comp={<HowItWorks />} />
    <Dropdown name="Become a Quecto User" comp={<BUser />} />
    <Dropdown name="Download our app" comp={<DownloadApp />} />
    <Footer />
  </>
);

export default HomePage;
