import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Shop.css";

import ReactTyped from "react-typed";
const ShopComponent = ({ shop, onShopHover }) => {
  return (
    <div
      className="shop-card"
      onMouseEnter={() => onShopHover(shop)}
      onMouseLeave={() => onShopHover(null)}
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
  const [hoveredShop, setHoveredShop] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/users");
        setShops(response.data); // Assuming response.data is an array of shop objects
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
        <div className="container2">
          {hoveredShop && (
            <div className="hovered-details">
              <h2>{hoveredShop.shopName}</h2>
              <p>{hoveredShop.shopDesc}</p>
              {/* Add more details here */}
            </div>
          )}

          {!hoveredShop && (
            <ReactTyped
            startWhenVisible
            strings={[
              "If <strong>startWhenVisible</strong> is <strong>true</strong>, will start when is visible in the dom",
            ]}
            typeSpeed={40}
          />
          )}
        </div>

        <div className="container">
          {shops.map((shop) => (
            <ShopComponent
              key={shop.id}
              shop={shop}
              onShopHover={setHoveredShop}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
