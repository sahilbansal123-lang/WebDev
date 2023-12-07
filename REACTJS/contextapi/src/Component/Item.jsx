import React from "react";

const Item = (props) => {
  return (
    <div className="ietm-card">
      <h4>{props.name}</h4>
      <p>price: ${props.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Item;
