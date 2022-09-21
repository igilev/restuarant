import React from "react";
import Rating from "./Rating";

function Product({ data, addToCart }) {
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const UpperCase = (str) => {
    return str.toUpperCase();
  };
  return (
    <div key={data.title} className="product">
      <img src={`${process.env.PUBLIC_URL}${data.img}`} alt={data.title} />
      <Rating />
      <h2>{UpperCase(data.title)}</h2>
      <h2>{capitalizeFirst(data.category)}</h2>
      <h2>${data.price}</h2>
      <p>{data.desc}</p>
      <button onClick={() => addToCart(data)}>Add to Cart</button>
    </div>
  );
}

export default Product;
