import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";

const PurchaseConfirmation = () => {
  const { purchasedItems } = useLocation().state;
  const { clearCart } = useContext(ShopContext);

  // Clear the cart when navigating back to the home page
  const handleBackToHome = () => {
    clearCart(); // Assuming clearCart is a function in your ShopContext
  };

  return (
    <div className="checkout-page purchase-confirmation">
      <h1>Congratulations!</h1>
      <p>Your purchase was successful.</p>
      <p>Thank you for shopping with us.</p>
      <p>An email confirmation has been sent to your email address.</p>

      {purchasedItems && purchasedItems.length > 0 && (
        <div>
          <p>You purchased:</p>
          <ul>
            {purchasedItems.map((item) => (
              <li key={item.id}>{item.productName}</li>
            ))}
          </ul>
        </div>
      )}

      <Link to="/" onClick={handleBackToHome}>
        Back to Home
      </Link>
    </div>
  );
};

export default PurchaseConfirmation;
