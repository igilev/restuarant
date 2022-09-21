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
      <div key={data.title} className="menu-item">
      <div>
      <img className="photo" src={`${process.env.PUBLIC_URL}${data.img}`} alt={data.title} />
      <Rating />

      </div>
      
      <div className="item-info">
      <header>
      <h4>{UpperCase(data.title)}</h4>
      {/* <h4>{capitalizeFirst(data.category)}</h4> */}
      <h4 className="price">${data.price}</h4>

      </header>
      
      <p className="item-text">{data.desc}</p>
      <button className="card-btn" onClick={() => addToCart(data)}>Add to Cart</button>

      </div>
      
    </div>

    
  );
}

export default Product;
