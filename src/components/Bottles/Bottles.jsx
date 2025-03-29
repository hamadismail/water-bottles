import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesData }) => {
  const [carts, setCarts] = useState([]);
  const bottles = use(bottlesData);

  useEffect(() => {
    const cartIds = getLocalStorage();
    const cartItem = [];

    for (const id of cartIds) {
      const cart = bottles.find(bot => bot.id === id);
      cart && cartItem.push(cart);
    }
    setCarts(cartItem);
  }, []);

  const handleAddToCart = bottle => {
    const isExsits = carts.find(item => item.id === bottle.id);

    if (!isExsits) {
      const newCarts = [...carts, bottle];
      setCarts(newCarts);

      setLocalStorage(bottle.id);
    }
  };

  const handleRemoveCart = id => {
    const remainingCart = carts.filter(c => c.id !== id);
    setCarts(remainingCart);

    removeLocalStorage(id);
  };

  return (
    <>
      <h2>Carts: {carts.length}</h2>
      <Cart cart={carts} handleRemoveCart={handleRemoveCart}></Cart>
      <div className="container">
        {bottles.map(bottle => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </>
  );
};

export default Bottles;
