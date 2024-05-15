import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import SecNavbar from "../components/sec_navbar/SecNavbar";

const ProductDetail = () => {
  const { slug } = useParams();
  console.log(slug);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/shop-products/${slug}`
        );
        console.log(response.data);
        setProduct(response.data); // Assuming response.data is the product object
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchData();
  }, [slug]);

  // Render nothing or a loading state while product data is being fetched
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
        <Navbar />
        <SecNavbar shopName={product.shop.shopName} rating={product.shop.ratings}/>
      <div>{product.product?.productName}</div>
      <div>{product.product.description}</div>
      <div>
        <img src={product.product.imageLink} alt={product.product?.productName} />
      </div>
      <div>{product.product.price}</div> 
      {/* THis is offered price */}
      <div>{product.price}</div>
      {/* This is original price */}
    </>
  );
};

export default ProductDetail;
