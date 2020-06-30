export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  CLEAR_CART: 'CLEAR_CART',
  REMOVE_ITEM: 'REMOVE_ITEM',
};

export const addToCart = payload => ({
  type: actionTypes.ADD_TO_CART,
  payload,
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART,
});

export const removeItem = payload => ({
  type: actionTypes.REMOVE_ITEM,
  payload,
});
