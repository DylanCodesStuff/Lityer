import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

const CartItem = (props) => {
  const { img, title, description, price, id } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-item" key={id}>
      <div className="cart-top-container gap-4">
        <img className="cart-item-img" src={img} />
        <div className="cart-top-text">
          <p className="cart-item-title text-xl font-semibold">{title}</p>
          <p className="cart-item-description">{description}</p>
        </div>
      </div>
      <div className="cart-bottom-container">
        <p className="cart-item-price">${(price * cartItems[id]).toFixed(2)}</p>
        <div className="cart-counter flex gap-2">
          <button onClick={() => removeFromCart(id)}>
            <img className="w-6" src="https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/minus-25.png" />
          </button>
          <p className="cart-item-quantity text-xl">{cartItems[id]}</p>
          <button onClick={() => addToCart(id)}>
            <img className="w-6" src="https://icons.veryicon.com/png/o/commerce-shopping/online-retailers/plus-45.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
