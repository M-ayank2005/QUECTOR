import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Thanks = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
        <div className="card w-full max-w-lg bg-white shadow-xl rounded-lg p-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4 animate-slide-in-left">
            Thank You for Your Order!
          </h1>
          <p className="text-center text-gray-600 mb-6 animate-slide-in-right">
            Your order has been placed successfully. We appreciate your business!
          </p>
          <div className="text-gray-600 mb-6">
            <p className="mb-2"><strong>Order Number:</strong> #123456</p>
            <p><strong>Estimated Delivery:</strong> 15-20 Minutes</p>
          </div>
          <div className="flex justify-center">
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
