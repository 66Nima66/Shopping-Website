import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { useAuth } from "../../hooks/auth";

export const Product = (props) => {
  const { id, productName, description, price, retailPrice, productImage, manufacturerURL } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const { user, userStatus } = useAuth();

  const cartItemCount = cartItems[id];

  const handleAddToCart = () => {
    if (user && userStatus === 'signed-in') {
      addToCart(id);
    } else {
      alert('Please sign in to add items to the cart.');
      // Optionally, you can redirect the user to the sign-in page.
    }
  };

  const handleBuyFromManufacturer = () => {
    if (manufacturerURL) {
      window.open(manufacturerURL, "_blank");
    } else {
      console.error("Manufacturer URL is not available.");
    }
  };

  return (
    <div className="product">
      <img
        src={productImage}
        alt={productName}
        className="product-image"
      />
      <div className="description">
        <p>
          <b>{productName}</b>
          <br />
          <b className="describeProduct">{description}</b>
        </p>
        <p> Our Price: ${price.toFixed(2)}</p>
        <p> Retail Price: ${retailPrice.toFixed(2)}</p>
        <p> Saving: $ { (retailPrice - price).toFixed(2) } </p>
      </div>

      <button className="addToCartBttn" onClick={handleAddToCart}>
        Add To Cart (Buy from us) {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      <button className="addToCartBttn" onClick={handleBuyFromManufacturer}>
        Buy from Manufacturer
      </button>
    </div>
  );
};
