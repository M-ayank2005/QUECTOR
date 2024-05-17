import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';
const Thanks = () => {
     // eslint-disable-next-line
    const [data, setData] = useState(null);   // eslint-disable-next-line
  const [user, setUser] = useState(null);  // eslint-disable-next-line
  const [userData, setUserData] = useState(null);  // eslint-disable-next-line

  useEffect(() => {
    // Retrieve data from local storage when the component mounts
    const storedData = localStorage.getItem('userdata');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
      setUser(parsedData.username);
    
    }
  }, []);

  useEffect(() => {
    // Fetch user data from the API when the user state changes
    if (user) {
      axios.get(`http://127.0.0.1:8080/api/user/${user}`)
        .then(response => {
          setUserData(response.data);
          console.log(response);
          
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [user]);
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <div className="card w-full max-w-lg bg-white shadow-xl rounded-lg p-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 animate-slide-in-left">
            Thank You for Your Order!
          </h1>
          <p className="text-center text-gray-600 mb-6 animate-slide-in-right">
            Your order has been placed successfully. We appreciate your patience!
          </p>
          <div className="text-gray-600 mb-6 flex flex-col gap-2">
            <p className="mb-2"><strong>Order Number:</strong> #123456</p>
            <p><strong>Delivery Address:</strong> {userData?.address}</p>
            <p><strong>Estimated Delivery:</strong> 15-20 Minutes</p>
          </div>
          <div className="flex justify-center mt-2">
            <button className="btn btn-primary animate-bounce text-white">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thanks;
