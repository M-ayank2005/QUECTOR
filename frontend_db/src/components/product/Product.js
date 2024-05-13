import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'

const ProductCard = ({ product }) => {
    
    console.log(product)
    return (
      // <div className="card w-32 bg-base-100 shadow-lg shadow-gray-300 h-48 border border-black overflow-hidden ">
      //   <figure>
      //     <img src={shop.imageLink} alt="Shoes" />
      //   </figure>
      //   <div className="carrd-body py-1 px-2  bg-gray-900 text-white">
      //     <div className="h-1/2 ">
      //       <h2 className="card-title text-xs">{shop.shopName} <span>{shop.ratings}</span></h2>
      //     </div>
  
      //     <div className="card-actions justify-end p-1 h-1/2">
      //       <button className="hover:scale-105 duratiom-300  w-full bg-[#8EE586] border border-black text-black p-1 text-xs rounded-md font-bold">
      //         <Link to={`/shop/${shop.id}`}>Explore</Link>
      //       </button>
      //     </div>
      //   </div>
      // </div>
      <>
      <div className='flex flex-col'>
      <div>{product.id}</div>
      <div>{product.price}</div>
      <div>{product.product.productName}</div>
      <div>{product.product.description}</div>
      <div>{product.product.price}</div>
      {/* <div>{product.product.productImageLink}</div> */}

      </div>
      
      </>
    );
  };

const Product = () => {
    const [products, setProducts] = useState([]);
    const { slug } = useParams();
   
    
    useEffect(() => {
      const fetchData = async (props) => {
        try {
          const response = await axios.get(`http://localhost:8080/api/shop-products/shop/${slug}`);
          setProducts(response.data); // Assuming response.data is an array of shop objects
        
        } catch (error) {
          console.error("Error fetching shops:", error);
        }
      };
      fetchData();
    }, []);
    return (
      <>
        <div className="container flex flex-row gap-x-4 gap-y-5 flex-wrap  overflow-x-hidden overflow-y-auto ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </>
    );
}

export default Product