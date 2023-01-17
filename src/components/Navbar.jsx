import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";
function Navbar({ cart, cartOpener, isCartOpen }) {
  return (
    <div className="navbar">
      <a className="nav-link" href="#menu">
        Menu
      </a>
      <div className="cart-icon" onClick={cartOpener}>
        {isCartOpen ? (
          <BsXCircle color={"white"} size={30} />
        ) : cart.length > 0 ? (
          <BsFillCartCheckFill color={"white"} size={30} />
        ) : (
          <BsFillCartFill color={"white"} size={30} />
        )}
      {cart.length > 0 && <p className="cart-amount">{cart.length}</p>}
      </div>
    </div>
  );
}

export default Navbar;
