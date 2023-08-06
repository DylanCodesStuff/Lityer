import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export default function Card({ img, title, description, price, id }) {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  return (
    <>
      <div className="card-wrapper flex justify-center mb-4">
        <div className="card-container">
          <div className="card-img-container">
            <img className="card-img" src={img} />
          </div>
          <div className="card-bottom-container">
            <h2 className="card-title text-xl">{title}</h2>
            <h3 className="card-description">{description}</h3>
            <p className="card-price">${price}</p>
            <button className="add-to-cart-btn mt-auto" onClick={() => addToCart(id)}>
              Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
