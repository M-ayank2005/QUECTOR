import React from "react";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
function Checkout({ cart }) {
  const datas = cart;
  console.log(datas);
  const getTotal = () => {
    return cart.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );
  };

  const taxes = getTotal() * 0.1;
  const deliveryCharges = 5.0;
  const grandTotal = getTotal() + taxes + deliveryCharges;

  return (
    <div>
      <Navbar />
      <div className="flex flex-col bg-slate-100  lg:flex-row gap-4 p-4">
        {/* Items Section */}
        <div className="w-full lg:w-3/5 p-6 bg-white hover:scale-101 max-h-96 duration-300 rounded-lg shadow-xl">
          <h1 className="text-2xl font-semibold mb-4">ORDER DETAILS</h1>
          <ul className="mb-4  h-80  overflow-y-auto">
            {cart.map((item, index) => (
              <li
                key={index}
                className="border btn bg-white flex flex-row justify-between hover:bg-white hover:border-black border-black my-2 w-full h-16"
              >
                <div className="flex flex-row items-center text-lg gap-2">
                  <div className="border border-black w-12 h-12 object-cover">
                    <img src={item.product.productImageLink} alt={"img"}></img>
                  </div>
                  <div> {item.product.productName}</div>
                </div>

                <div className="text-lg ">
                  {" "}
                  <span>Price:</span> Rs {item.product.price.toFixed(2)}{" "}
                  Quantity: {item.quantity}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-2/5 bg-white p-6 rounded-lg shadow-xl flex flex-col justify-between">

          <h2 className="text-3xl uppercase font-bold font-semibold mb-4">Order Summary</h2>
          <div>
          <div className="mb-2">
            <span className="font-semibold">Subtotal:</span> Rs
            {getTotal().toFixed(2)}
          </div>
          <div className="mb-2">
            <span className="font-semibold">GST (10%):</span> Rs
            {taxes.toFixed(2)}
          </div>
          <div className="mb-2">
            <span className="font-semibold">Delivery Charges:</span> Rs
            {deliveryCharges.toFixed(2)}
          </div>
          <div className="font-bold text-xl mb-4">
            <span className="font-semibold">Grand Total:</span> Rs
            {grandTotal.toFixed(2)}
          </div>
          </div>
          
         
          
            <Link to={"/thanks"}>
              <button
                type="submit"
                className="mt-4 px-4 py-2 btn btn-block btn-neutral bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
              >
                PAY WITH CASH
              </button>
            </Link>
         
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
