import React from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart }) {
  const navigate = useNavigate();

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.product.productName} - ${item.product.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <h2>Total: ${getTotal()}</h2>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default Checkout;
