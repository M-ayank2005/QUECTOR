import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Shop.css";


const ShopComponent = ({ shop }) => {
  return (
    <div
      className="shop-card"
      
    >
      <img src={shop.imageLink} alt="hello" className="shop-image" />
      <div className="details">
        <h2>{shop.shopName}</h2>
        <p> {shop.ratings}</p>
      </div>
    </div>
  );
};

const ShopPage = () => {
  const [shops, setShops] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/shops");
        setShops(response.data); // Assuming response.data is an array of shop objects
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Shops</h1>

      <div className="main">
        <div className="container">
          {shops.map((shop) => (
            <ShopComponent
              key={shop.id}
              shop={shop}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
