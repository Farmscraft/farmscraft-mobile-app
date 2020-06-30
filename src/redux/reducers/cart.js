import {actionTypes} from '../actions/cart';

const initState = {};

const cart = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case actionTypes.REMOVE_ITEM: {
      const {[action.payload.id]: removedValue, ...remainingState} = state;
      return {
        ...remainingState,
      };
    }
    case actionTypes.CLEAR_CART:
      return initState;
    default:
      return state;
  }
};

export default cart;
