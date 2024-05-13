import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const AddProductForm = () => {
  const [productData, setProductData] = useState({
    productName: '',
    description: '',
    price: '',
    productImageLink: '' // Added productImageLink field
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
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
    if (!productData.productName) {
      setErrors({
        ...errors,
        productName: 'Product name is required'
      });
      return;
    }

    if (!productData.description) {
      setErrors({
        ...errors,
        description: 'Product description is required'
      });
      return;
    }

    if (!productData.price) {
      setErrors({
        ...errors,
        price: 'Product price is required'
      });
      return;
    }

    // Form data is valid, submit the data
    axios.post('http://localhost:8080/api/products', productData)
      .then(response => {
        console.log('Product added successfully:', response.data);
        // Clear form after successful submission
        setProductData({
          productName: '',
          description: '',
          price: '',
          productImageLink: '' // Reset productImageLink field
        });
        setErrors({});
        // Show success toast
        toast.success('Product added successfully!');
      })
      .catch(error => {
        console.error('Error adding product:', error);
        // Show error toast
        toast.error('Error adding product. Please try again later.');
      });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="productName" className="block mb-1">Product Name</label>
          <input type="text" id="productName" name="productName" value={productData.productName} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          {errors.productName && <div className="text-red-500 mt-1">{errors.productName}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-1">Description</label>
          <textarea id="description" name="description" value={productData.description} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"></textarea>
          {errors.description && <div className="text-red-500 mt-1">{errors.description}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-1">Price</label>
          <input type="number" id="price" name="price" value={productData.price} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          {errors.price && <div className="text-red-500 mt-1">{errors.price}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="productImageLink" className="block mb-1">Product Image Link</label>
          <input type="text" id="productImageLink" name="productImageLink" value={productData.productImageLink} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          {errors.productImageLink && <div className="text-red-500 mt-1">{errors.productImageLink}</div>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
    </>
  );
};

export default AddProductForm;
