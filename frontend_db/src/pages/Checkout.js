import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Checkout({ cart }) {
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  };

  const goBack = () => {
    navigate("/");
  };

  const taxes = getTotal() * 0.1;
  const deliveryCharges = 5.00;
  const grandTotal = getTotal() + taxes + deliveryCharges;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* Items Section */}
        <div className="w-full lg:w-3/5 bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
          <ul className="mb-4">
            {cart.map((item, index) => (
              <li key={index} className="mb-2">
                {item.product.productName} - ${item.product.price.toFixed(2)} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-semibold">Total: ${getTotal().toFixed(2)}</h2>
          <button 
            onClick={goBack} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            Go Back
          </button>
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-2/5 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="mb-2">
            <span className="font-semibold">Subtotal:</span> ${getTotal().toFixed(2)}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Taxes (10%):</span> ${taxes.toFixed(2)}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Delivery Charges:</span> ${deliveryCharges.toFixed(2)}
          </div>
          <div className="font-bold text-xl mb-4">
            <span className="font-semibold">Grand Total:</span> ${grandTotal.toFixed(2)}
          </div>
          <h2 className="text-xl font-semibold mb-2">Delivery Details</h2>
          <form className="flex flex-col gap-2">
            <input 
              type="text" 
              placeholder="From Address" 
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="text" 
              placeholder="To Address" 
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Confirm Order
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;