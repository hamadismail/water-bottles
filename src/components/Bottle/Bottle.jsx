import React from 'react';
import './bottle.css';

const Bottle = ({ bottle, cartItems }) => {
  const { name, img, price } = bottle;

  return (
    <div className="card">
      <img height="300px" width="300px" src={img}></img>
      <h4>{name}</h4>
      <h5>Price: ${price}</h5>
      <button onClick={() => cartItems(bottle)}>Add to Cart</button>
    </div>
  );
};

export default Bottle;
