import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const ShopCard = ({shop})=>{
  return(
    <>
     <>
      <div className="card w-40 bg-base-100 shadow-xl">
        <figure>
          <img
            src={shop.imageLink}
            alt="Shoes"
          />
        </figure>
        <div className="card-body p-1">
          <h2 className="card-title text-base">{shop.shopName}</h2>
          <p className="text-xs">
            {shop.shopDesc}
          </p>
          <div className="card-actions justify-end p-1">
            <button className="w-full bg-[#8EE586] border border-black text-black p-1 text-xs rounded-md font-bold">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
    </>
  )
}




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
   <div className="container flex flex-row gap-10">
          {shops.map((shop) => (
            <ShopCard
              key={shop.id}
              shop={shop}
              
            />
          ))}
        </div>
   </>
  );
};

export default Card;
