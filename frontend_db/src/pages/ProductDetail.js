import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import SecNavbar from "../components/sec_navbar/SecNavbar";
import Footer from "../components/footer/Footer";

const ProductDetail = () => {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://3.110.94.120:8080/api/products/${slug}`
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
      
      <div className="h-100 flex justify-center items-center ">
        <div className="container h-5/6 flex justify-center items-center mx-auto p-4 ">
          <div className="flex flex-row w-full h-full gap-4">
            <div className="h-full w-3/6  overflow-hidden ">
              <img src={product.productImageLink} alt={product.product?.productName} width={100} height={100} className="h-16 w-16 md:h-auto rounded-lg md:w-auto overflow-hidden" />
            </div>
            <div className="h-full w-3/6 border shadow-md">
              <div className="p-4">
                <h2 className="text-4xl my-3 font-bold underline-offset-0 uppercase">{product.productName}</h2>
                <p className="text-lg text-gray-400 ml-2 uppercase">{product.description}</p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
