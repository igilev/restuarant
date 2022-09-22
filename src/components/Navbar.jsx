import React from 'react';
import { BsFillCartCheckFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
function Navbar( {cart, cartOpener} ) {

   


    return (
        <div className='navbar'>
                <a href="#menu">Menu</a>
            <div className='cart-icon' onClick={cartOpener}>
              {cart.length > 0 ? <BsFillCartCheckFill size={35}/> :  <BsFillCartFill  size={35}/> } 
                
            </div>
            {cart.length > 0 && <p className='cart-amount'>{cart.length}</p>}
            
            
        </div>
    );
}

export default Navbar;