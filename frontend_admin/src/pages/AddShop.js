import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const AddShopForm = () => {
  const [shopData, setShopData] = useState({
    shopName: '',
    shopDesc: '',
    imageLink: '',
    ratings: ''
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
    if (!shopData.shopName) {
      setErrors({
        ...errors,
        shopName: 'Shop name is required'
      });
      return;
    }

    if (!shopData.shopDesc) {
      setErrors({
        ...errors,
        shopDesc: 'Shop description is required'
      });
      return;
    }

    if (!shopData.imageLink) {
      setErrors({
        ...errors,
        imageLink: 'Image link is required'
      });
      return;
    }

    if (!shopData.ratings) {
      setErrors({
        ...errors,
        ratings: 'Ratings are required'
      });
      toast.error('Ratings is required');
      return;
    }

    // Form data is valid, submit the data
    axios.post('http://localhost:8080/api/shops', shopData)
      .then(response => {
        console.log('Shop added successfully:', response.data);
        // Clear form after successful submission
        setShopData({
          shopName: '',
          shopDesc: '',
          imageLink: '',
          ratings: ''
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
          <label htmlFor="shopName" className="block mb-1">Shop Name</label>
          <input type="text" id="shopName" name="shopName" value={shopData.shopName} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          {errors.shopName && <div className="text-red-500 mt-1">{errors.shopName}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="shopDesc" className="block mb-1">Shop Description</label>
          <textarea id="shopDesc" name="shopDesc" value={shopData.shopDesc} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"></textarea>
          {errors.shopDesc && <div className="text-red-500 mt-1">{errors.shopDesc}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="imageLink" className="block mb-1">Image Link</label>
          <input type="text" id="imageLink" name="imageLink" value={shopData.imageLink} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          {errors.imageLink && <div className="text-red-500 mt-1">{errors.imageLink}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="ratings" className="block mb-1">Ratings</label>
          <input type="number" id="ratings" name="ratings" value={shopData.ratings} onChange={handleChange} className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" />
          {errors.ratings && <div className="text-red-500 mt-1">{errors.ratings}</div>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
      </form>
    </>
  );
};

export default AddShopForm;
