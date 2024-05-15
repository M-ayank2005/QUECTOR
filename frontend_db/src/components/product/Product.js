import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ product }) => {
  const localStorageKey = `product-${product.id}`;
  const initialQuantity = parseInt(localStorage.getItem(localStorageKey)) || 1;
  
  const [isInCart, setIsInCart] = useState(false);
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    const storedQuantity = localStorage.getItem(localStorageKey);
    if (storedQuantity) {
      setQuantity(parseInt(storedQuantity));
      setIsInCart(true);
    }
  }, [localStorageKey]);

  const handleAddToCart = () => {
    setIsInCart(true);
    localStorage.setItem(localStorageKey, quantity);
  };

  const handleIncreaseQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    localStorage.setItem(localStorageKey, newQuantity);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      localStorage.setItem(localStorageKey, newQuantity);
    }else {
      setQuantity(1);
      setIsInCart(false);
      localStorage.removeItem(localStorageKey);
    }
  };

  return (
    <div className="w-44 h-56 border border-black m-2">
      <div className="h-4/6 bg-red-200">
        <Link to={`/product-detail/${product.id}`} className="cursor-pointer">
          <img src={product.product.productImageLink} alt="Shoes" />
        </Link>
      </div>
      <div className="h-2/6 bg-yellow-200 p-2">
        <div className="flex justify-between gap-4 text-md font-bold">
          <h2>{product.product.productName}</h2>
          <div className="flex gap-1">
            <h2 className="line-through">{product.product.price}</h2>
            <h2>{product.price}</h2>
          </div>
        </div>
        <div className="flex justify-center border items-center gap-2 border-black h-8 mt-1 text-xs">
          {isInCart ? (
            <div className="flex items-center justify-between w-full">
              <button
                className="w-8 h-full text-center bg-gray-200"
                onClick={handleDecreaseQuantity}
              >
                -
              </button>
              <div className="w-16 text-center">{quantity}</div>
              <button
                className="w-8 h-full text-center bg-gray-200"
                onClick={handleIncreaseQuantity}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="w-full h-full text-center"
              onClick={handleAddToCart}
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
};


const Product = () => {
  const [products, setProducts] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async (props) => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/shop-products/shop/${slug}`
        );
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
};

export default Product;
