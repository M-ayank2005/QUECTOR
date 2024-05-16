import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import SecNavbar from "../sec_navbar/SecNavbar";
import Footer from "../footer/Footer";

function ProductList({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();
  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/shops/${slug}`
        );
        setShops(response.data);
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
    fetchData();
  }, [slug]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/shop-products/shop/${slug}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [slug]);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.product.id === product.product.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product: product.product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity: Math.max(0, item.quantity - 1) };
      }
      return item;
    });
    setCart(updatedCart.filter((item) => item.quantity > 0));
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) => {
      if (item.product.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <Navbar />
      <SecNavbar shopName={shops.shopName} rating={shops.ratings} />
      <div className="w-full h-full">
        <div className="flex flex-row flex-wrap gap-6 m-6 overflow-hidden min-h-[32rem]">
          {products.map((item) => (
            <div
              key={item.product.id}
              className="border  border-gray-200 rounded-lg overflow-hidden bg-white shadow-md w-56 h-72 transition duration-300 hover:shadow-xl hover:scale-105"
            >
              <img
                src={item.product.productImageLink}
                alt={item.product.productName}
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <div className="flex flex-row justify-between">
                  <Link to={`/product-detail/${item.product.id}`}>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.product.productName}
                    </h2>
                  </Link>
                  <div className="flex flex-row gap-2">
                    <p className="text-gray-800 font-semibold line-through text-lg">
                      {item.product.price}
                    </p>
                    <p className="text-gray-800 font-semibold text-lg">
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center">
                    <button
                      onClick={() => decreaseQuantity(item.product.id)}
                      className="btn btn-square btn-sm btn-outline hover:bg-white hover:text-black"
                    >
                      -
                    </button>
                    <p className="mx-2">
                      {cart.find(
                        (cartItem) =>
                          cartItem.product.id === item.product.id
                      )?.quantity || 0}
                    </p>
                    <button
                      onClick={() => increaseQuantity(item.product.id)}
                      className="btn btn-square btn-sm btn-outline hover:bg-white hover:text-black"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="btn btn-sm bg-black text-white hover:bg-black"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goToCheckout}
          className="fixed bottom-6 right-6 px-6 py-3 btn btn-md btn-neutral hover:bg-text-white hover:bg-black"
        >
          Checkout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default ProductList;
