export const actionTypes = {
  ADD_ACTIVE_ORDERS: 'ADD_ACTIVE_ORDERS',
  ADD_TO_WISHLIST: 'ADD_ACTIVE_ORDERS',
};

export const addOrders = payload => ({
  type: actionTypes.ADD_ACTIVE_ORDERS,
  payload,
});

export function addToWishlist(item) {
  return {
    type: actionTypes.ADD_TO_WISHLIST,
    payload: {
      item: item,
    },
  };
}
