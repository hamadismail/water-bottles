import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveCart }) => {
  return (
    <div className="cart">
      {cart.map(bottle => (
        <div key={bottle.id}>
          <img width="100px" src={bottle.img} /> <br />
          <button onClick={() => handleRemoveCart(bottle.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
