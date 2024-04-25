import React from "react";
import { useState } from "react";
import Cheader from "../components/customHeader/Cheader";
import Layer from "../components/ShopLayer/Layer";
import ShopLayer from "../components/ShopLayer/ShopLayer";
import Footer from "../components/Footer/Footer";
import ShopAd from "../components/ShopLayer/ShopAd";
import FeatureShop from "../components/ShopLayer/FeatureShop";
const Shop = () => {
  return (
    <>
      <Cheader />
      <Layer name="Latest Shops" />
      <ShopLayer />
      <Layer name="Popular Shops" />
      <ShopLayer />
      <Layer name=" QVerified Shops" />
      <ShopLayer />
      <Layer name="Featured Stores" />
      <FeatureShop />
      <Layer name="We have something special for you !!" />
      <ShopAd />
      <Footer />
    </>
  );
};

export default Shop;
