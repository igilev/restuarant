import React from 'react';

function Cart( {cart, cartToShow, removeAll, removeSingle, addToCart, minusOne } ) {
    function findDuplicates(obj, arr){
         let newArr = [];
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === obj){
               newArr.push(obj) 
            } 
        }
         return newArr.length
     }

     const totalAmount = cart.reduce((acc, curr) => {
        return acc + curr.price },0)
    
    return (
        <div className='header'>
            <div className='Cart-Container'>
              <div className='Header'>
                    <h3 className='Heading'>Shopping Cart</h3>
                    <h5 className='Action' onClick={() => removeAll()}>Remove all</h5>
              </div>
              <div>
              {
            cartToShow.map(product =>
                <div className='Cart-Items' key={product.id}>
                    <div className='image-box'>
                        <img src={`${process.env.PUBLIC_URL}${product.img}` }  alt={product.title}className='img-cart' />
                    </div>
                    <div className='about'>
                        <h3 className='subtitle'>{product.category}</h3>
                        <h1 className='title'>{product.title}</h1>
                    </div>
                    <div className='counter'>
                            <div className='btn' onClick={() => addToCart(product)}>+</div>
                            <div className='count'>{findDuplicates(product, cart)}</div>
                            <div className='btn' onClick={()=> minusOne(product)}>-</div>
                     </div>
                      <div className='prices'>
                            <div className='amount'>${product.price}</div>
                            <div className='remove' onClick={() => removeSingle(product.id)}><u>Remove</u></div>
                      </div>
                      
                 </div>
                 
                 
              
            )
            

          }


          </div>

                <div className='checkout'>
                    <div className='total'>
                        <div>
                            <div className='Subtotal'>Sub-Total</div>
                            <div className='items'>Items: {cart.length}</div>
                        </div>
                        <div className='total-amount'>${totalAmount.toFixed(1)}</div>
                    </div>
                    <button className='button'>Checkout</button>
                </div> 
                
              
            </div>

            
              
                
            
        </div>
    );
}

export default Cart;