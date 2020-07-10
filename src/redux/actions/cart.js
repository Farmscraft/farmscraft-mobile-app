export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  CLEAR_CART: 'CLEAR_CART',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
};

export const addToCart = item => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    item,
  },
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
});

export const removeFromCart = item => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {item},
});
