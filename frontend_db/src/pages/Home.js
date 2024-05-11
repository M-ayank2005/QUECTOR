import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Carousal from "../components/carousel/Carousal";
import Card from "../components/card/Card";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-100 flex flex-row w-full ">
        <div className="mt-6 mb-6 pr-5 w-2/6 flex justify-center items-center">
          <Carousal />
        </div>
        <div className="w-4/6    flex flex-col items-center justify-between">
          <form className="flex items-center justify-center gap-2 h-1/6 w-full">
            <input
              type="search"
              placeholder="Enter your location"
              className="outline-none w-5/6 h-12 rounded-lg px-4 border border-black"
            />
            <button
              type="submit"
              className=" h-6 w-28 btn bg-[#8EE586] border border-black"
            >
              Search
            </button>
          </form>
          <div className=" overflow-auto h-5/6 w-full pt-6 pb-7 px-4  ">
              <Card />
             
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
