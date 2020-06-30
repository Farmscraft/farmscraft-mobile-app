import {actionTypes} from '../actions/shop';

const initState = {
  id: null,
  shopType: null,
};

const Orders = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SHOP: {
      return {
        ...state,
        id: action.id,
        shopType: action.shopType,
      };
    }
    default:
      return state;
  }
};

export default Orders;
