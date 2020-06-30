export const actionTypes = {
  ADD_ACTIVE_ORDERS: 'ADD_ACTIVE_ORDERS',
};

export const addOrders = payload => ({
  type: actionTypes.ADD_ACTIVE_ORDERS,
  payload,
});
