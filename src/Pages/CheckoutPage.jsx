import React, { useContext } from "react";
import data from "../DummyData/data";
import { ShopContext } from "../context/shop-context";
import CartItem from "../Components/CartItem";

export const CheckoutPage = () => {
  let products = JSON.parse(localStorage.getItem("products"));
  let cart = JSON.parse(localStorage.getItem("cartCookie"));
  const { cartItems, setCartItems, getDefaultCart, getTotalPrice } = useContext(ShopContext);

  return (
    <div className="checkoutPage">
      <div>
        <h1 className="text-3xl text-center p-8">Your Cart Items</h1>
      </div>
      <div className="cart-items border-b border-t border-teal-300">
        {data.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>
      <div className="disclaimers-and-info flex flex-col">
        <div className="empty-cart flex justify-end p-4 ">
          <button className="text-base underline underline-offset-4" onClick={() => setCartItems(getDefaultCart)}>
            Empty Cart
          </button>
        </div>
        <p className="text-sm text-gray-500 underline underline-offset-4 p-4">Prices are estimated, and may not include tax.</p>
        <p className="text-sm text-gray-500 underline underline-offset-4 mb-48 p-4">Customer Agreement Terms</p>
      </div>
      <div className="checkout-footer sticky bottom-0 flex flex-col justify-center items-center gap-4 bg-white p-10">
        <div className="checkout-footer-top-row text-3xl">
          <p>Subtotal: &nbsp;${getTotalPrice().toFixed(2)}</p>
        </div>
        <div className="checkout-footer-bottom-row text-4xl">
          <button className="checkout-button">Select Delivery Time</button>
        </div>
      </div>
    </div>
  );
};
