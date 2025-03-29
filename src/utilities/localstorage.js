const getLocalStorage = () => {
  const cartString = localStorage.getItem('cart');
  return cartString ? JSON.parse(cartString) : [];
};

const saveLocalStorage = cart => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const setLocalStorage = id => {
  const cart = getLocalStorage();
  cart.push(id);

  saveLocalStorage(cart);
};

const removeLocalStorage = id => {
  const carts = getLocalStorage();
  const remainingCart = carts.filter(cartId => cartId !== id);

  saveLocalStorage(remainingCart);
};

export { getLocalStorage, setLocalStorage, removeLocalStorage };
