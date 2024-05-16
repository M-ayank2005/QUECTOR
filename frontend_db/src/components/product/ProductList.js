import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import SecNavbar from '../sec_navbar/SecNavbar';
function ProductList({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { slug } = useParams();


  console.log(slug);

  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/shops/${slug}`
        );
        console.log(response.data);
        setShops(response.data); // Assuming response.data is an array of shop objects
      } catch (error) {
        console.error("Error fetching shops:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/shop-products/shop/${slug}`)
      .then(response => {
        setProducts(response.data); // Set the products array
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.product.id === product.product.id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { product: product.product, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity: Math.max(0, item.quantity - 1) };
      }
      return item;
    });
    setCart(updatedCart.filter(item => item.quantity > 0));
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const goToCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div>
      <Navbar />
        <SecNavbar shopName={shops.shopName} rating={shops.ratings}/>
      <h1>{shops.shopName}</h1>

      <h1>Product List</h1>
      <ul>
        {products.map((item) => (
          <li key={item.product.id}>
            <img src={item.product.productImageLink} alt={item.product.productName} width="100" />
           <Link to={`/product-detail/${item.product.id}`}><h2>{item.product.productName}</h2></Link> 
            <p>{item.product.description}</p>
            <p>${item.product.price}</p>
            <p>Quantity: {cart.find(cartItem => cartItem.product.id === item.product.id)?.quantity || 0}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => decreaseQuantity(item.product.id)}>Decrease Quantity</button>
            <button onClick={() => increaseQuantity(item.product.id)}>Increase Quantity</button>
          </li>
        ))}
      </ul>
      <button onClick={goToCheckout}>Checkout</button>
    </div>
  );
}

export default ProductList;
