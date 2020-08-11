export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  CLEAR_CART: 'CLEAR_CART',
  REMOVE_ITEM: 'REMOVE_ITEM',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
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

export function addToWishlist(item) {
  return {
    type: actionTypes.ADD_TO_WISHLIST,
    payload: {
      item: item,
    },
  };
}

export function removeFromWishlist(item) {
  return {
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: {
      item: item,
    },
  };
}
