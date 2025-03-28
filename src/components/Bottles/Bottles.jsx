import React, { use, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';

const Bottles = ({ bottlesData }) => {
  const bottles = use(bottlesData);
  const [carts, setCarts] = useState([]);

  const cartItems = bottle => {
    const isExsits = carts.find(item => item.id === bottle.id);

    if (!isExsits) {
      const newCarts = [...carts, bottle];
      setCarts(newCarts);
    }
  };

  return (
    <>
      <h2>Carts: {carts.length}</h2>
      <div className="container">
        {bottles.map(bottle => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            cartItems={cartItems}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
