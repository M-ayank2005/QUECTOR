import React from 'react'
import ShopLayer from "../components/ShopLayer/ShopLayer"
import Layer  from "../components/ShopLayer/Layer"
import ShopAd from "../components/ShopLayer/ShopAd"
import Cheader from  "../components/ShopLayer/Cheader"
import Footer from "../components/Footer"
import FeatureShop from "../components/ShopLayer/FeatureShop"
export default function MainPage() {
  
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
  
}
