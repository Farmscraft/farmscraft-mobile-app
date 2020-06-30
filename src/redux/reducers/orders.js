import {actionTypes} from '../actions/orders';

const initState = {
  activeOrders: {},
};

const Orders = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ACTIVE_ORDERS: {
      return {
        ...state,
        activeOrders: {
          ...state.activeOrders,
          [action.payload.orderId]: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default Orders;
