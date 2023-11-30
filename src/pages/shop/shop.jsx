import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [searchInput, setSearchInput] = useState("");

  const filteredProducts = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Cougar Deals</h1>
      </div>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
