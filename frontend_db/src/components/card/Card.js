import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const ShopCard = ({ shop }) => {
  return (
    <div className="card w-32 bg-base-100 shadow-lg shadow-gray-300 h-48 border border-black overflow-hidden ">
      <figure>
        <img src={shop.imageLink} alt="Shoes" />
      </figure>
      <div className="card-body py-1 px-2  bg-gray-900 text-white">
        <div className="h-1/2 ">
          <h2 className="card-title text-xs">{shop.shopName} <span>{shop.ratings}</span></h2>
        </div>

        <div className="card-actions justify-end p-1 h-1/2">
          <button className="hover:scale-105 duratiom-300  w-full bg-[#8EE586] border border-black text-black p-1 text-xs rounded-md font-bold">
            <Link to={`/shop/${shop.id}`}>Explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/shops");
        setShops(response.data); // Assuming response.data is an array of shop objects
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container flex flex-row gap-x-8 gap-y-5 flex-wrap  overflow-x-hidden overflow-y-auto ">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </>
  );
};

export default Card;
