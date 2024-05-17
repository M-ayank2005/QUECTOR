import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AddShopProduct = () => {
  const [shopData, setShopData] = useState({
    shop: '',
    product: '',
    price: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShopData({
      ...shopData,
      [name]: value
    });
    // Clear error message when user starts typing again
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!shopData.shop) {
      setErrors({
        ...errors,
        shop: 'Shop id is required'
      });
      return;
    }

    if (!shopData.product) {
      setErrors({
        ...errors,
        product: 'Product id is required'
      });
      return;
    }

    if (!shopData.price) {
      setErrors({
        ...errors,
        price: 'Price is required'
      });
      return;
    }

    // Form data is valid, submit the data
    axios.post('http://ec2-user@ec2-3-110-94-120.ap-south-1.compute.amazonaws.com:8080/api/shop-products', {
      shop: { id: shopData.shop },
      product: { id: shopData.product },
      price: parseFloat(shopData.price) // Ensure price is converted to a number
    })
      .then(response => {
        console.log('Shop added successfully:', response.data);
        // Clear form after successful submission
        setShopData({
          shop: '',
          product: '',
          price: ''
        });
        setErrors({});
        // Show success toast
        toast.success('Shop added successfully!');
      })
      .catch(error => {
        console.error('Error adding shop:', error);
        // Show error toast
        toast.error('Error adding shop. Please try again later.');
      });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="shop" className="block mb-1">Shop ID </label>
          <input type="text" id="shop" name="shop" value={shopData.shop} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          {errors.shop && <div className="text-red-500 mt-1">{errors.shop}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="product" className="block mb-1">Product ID</label>
          <input type="text" id="product" name="product" value={shopData.product} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          {errors.product && <div className="text-red-500 mt-1">{errors.product}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-1">Price</label>
          <input type="text" id="price" name="price" value={shopData.price} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          {errors.price && <div className="text-red-500 mt-1">{errors.price}</div>}
        </div>
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
    </>
  );
}

export default AddShopProduct;
