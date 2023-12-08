import React from "react";
import { useCart } from "../Context/Cart";

const Item = (props) => {
  const cart = useCart();
  console.log(cart);
  return (
    <div className="ietm-card">
      <h4>{props.name}</h4>
      <p>price: ${props.price}</p>
      <button
        onClick={() =>
          cart.setItem([...cart.item, { name: props.name, price: props.price }])
        }
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
