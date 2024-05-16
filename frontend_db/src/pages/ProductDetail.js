import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import SecNavbar from "../components/sec_navbar/SecNavbar";

const ProductDetail = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/shop-products/${slug}`
        );
        setProduct(response.data);
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
      <div className="h-screen flex justify-center items-center bg-gray-100">
        <div className="container h-5/6 flex justify-center items-center mx-auto p-4 bg-white rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-full w-full md:h-auto md:w-auto">
              <img src={product.product.imageLink} alt={product.product?.productName} className="h-full w-full md:h-auto rounded-lg md:w-auto" />
            </div>
            <div className="h-full w-full md:h-auto md:w-auto">
              <div className="p-4">
                <h2 className="text-5xl my-3 font-bold">{product.product?.productName}</h2>
                <div className="description-container border border-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex-col items-center mt-2">
                    <p className="text-2xl text-black">Description : </p>
                    <p className="text-xl text-gray-400 ml-2">{product.product.description}</p>
                  </div>
                </div>
                <div className="mt-10">
                  <div className="flex items-center mt-2">
                    <p className="text-sm text-gray-300">Selling Price: </p>
                    <p className="text-xl text-gray-500 line-through ml-2">${product.product.price}</p>
                    <p className="text-sm text-green-500 ml-2">${product.product.price - product.price} off</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <p className="text-xl text-gray-300">Offer Price: </p>
                    <p className="text-xl text-black ml-2">${product.price}</p>
                  </div>
                  <div className="flex mt-8">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mr-2 rounded">Add to Cart</button>
                    <button className="bg-yellow-300 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
