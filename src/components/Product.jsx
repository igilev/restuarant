import React from 'react';

function Product( {data, addToCart} ) {
    return (
        <div key={data.title} className="product">
            <img src={`${process.env.PUBLIC_URL}${data.img}`} alt={data.title} />
            <h2>{data.title}</h2>
            <h2>{data.category}</h2>
            <h2>${data.price}</h2>
            <p>{data.desc}</p>
            <button onClick={() => addToCart(data)}>Add to Cart</button>
            
        </div>
    );
}

export default Product