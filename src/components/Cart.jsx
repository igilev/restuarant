import React from "react";
import Rating from "./Rating";

function Cart({
  cart,
  cartToShow,
  removeAll,
  removeSingle,
  addToCart,
  minusOne,
}) {
  function findDuplicates(obj, arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === obj) {
        newArr.push(obj);
      }
    }
    return newArr.length;
  }

  const totalAmount = cart.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);

  return (
    <div className="header">
      <div className="Cart-Container">
        <div className="Header">
          <h3 className="Heading">Shopping Cart</h3>
          <h5 className="Action" onClick={() => removeAll()}>
            Remove all
          </h5>
        </div>
        <div className="shoppingBag">
          {cartToShow.map((product) => (
            <div className="Cart-Items" key={product.id}>
              <div className="image-box">
                <img
                  src={`${process.env.PUBLIC_URL}${product.img}`}
                  alt={product.title}
                  className="photo"
                />
          
              </div>

              <div className="about">
                <h5 className="subtitle">{product.category}</h5>
                <h4 className="title-cart">{product.title}</h4>
              </div>
              <div className="counter">
                <div className="btnCount" onClick={() => addToCart(product)}>
                  +
                </div>
                <div className="count">{findDuplicates(product, cart)}</div>
                <div className="btnCount" onClick={() => minusOne(product)}>
                  -
                </div>
              </div>
              <div className="price">
                <div className="amount">
                  <h4>${product.price}</h4>
                  </div>
                <div
                  className="remove"
                  onClick={() => removeSingle(product.id)}
                >
                  <u>Remove</u>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="checkout">
          <div className="total">
            <div>
              <div className="Subtotal">Sub-Total</div>
              <div className="items">Items: {cart.length}</div>
            </div>
            <div className="total-amount">
              <h3>${totalAmount.toFixed(2)}</h3></div>
          </div>
          <button className="button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
