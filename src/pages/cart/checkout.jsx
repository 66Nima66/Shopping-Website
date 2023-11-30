// checkout.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./cart.css";
import PurchaseConfirmation from "./PurchaseConfirmation";

const Checkout = () => {
  const { totalAmount } = useLocation().state;
  const [creditCardInfo, setCreditCardInfo] = useState({
    name: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
    shippingAddress: "",
  });

  const navigate = useNavigate();

  const handleCreditCardChange = (e) => {
    const { name, value } = e.target;
    setCreditCardInfo({
      ...creditCardInfo,
      [name]: value,
    });
  };

  const handlePurchase = () => {
    // Basic validation
    if (!creditCardInfo.name || !creditCardInfo.cardNumber || !creditCardInfo.expirationMonth || !creditCardInfo.expirationYear || !creditCardInfo.cvv || !creditCardInfo.shippingAddress) {
      alert("Please fill in all fields.");
      return;
    }


    navigate("/PurchaseConfirmation", { state: { totalAmount } });
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="credit-card-form">
        <label>Name on Card:</label>
        <input
          type="text"
          name="name"
          value={creditCardInfo.name}
          onChange={handleCreditCardChange}
        />

        <label>Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={creditCardInfo.cardNumber}
          onChange={handleCreditCardChange}
          placeholder="1234 5678 9012 3456"
        />

        <label>Expiration Date:</label>
        <div className="expiration-date">
          <input
            type="text"
            name="expirationMonth"
            value={creditCardInfo.expirationMonth}
            onChange={handleCreditCardChange}
            placeholder="MM"
            maxLength="2"
          />
          /
          <input
            type="text"
            name="expirationYear"
            value={creditCardInfo.expirationYear}
            onChange={handleCreditCardChange}
            placeholder="YYYY"
            maxLength="4"
          />
        </div>

        <label>CVV:</label>
        <input
          type="text"
          name="cvv"
          value={creditCardInfo.cvv}
          onChange={handleCreditCardChange}
          placeholder="123"
        />

        <label>Shipping Address:</label>
        <textarea
          name="shippingAddress"
          value={creditCardInfo.shippingAddress}
          onChange={handleCreditCardChange}
        />
      </div>
      <p>Total Amount: ${totalAmount}</p>
      <button onClick={handlePurchase}>Purchase</button>
    </div>
  );
};

export default Checkout;
