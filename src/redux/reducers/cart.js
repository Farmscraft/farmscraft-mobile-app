import {actionTypes} from '../actions/cart';
import {addItem, removeItem} from '../../helpers/helpers';

const initState = {
  carts: {},
  wishList: {},
};

const cart = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let carts = addItem(state.carts, action.payload.item);
      return {
        ...state,
        carts: carts,
      };
    }

    case actionTypes.REMOVE_FROM_CART: {
      let carts = removeItem(state.carts, action.payload.item);
      return {
        ...state,
        carts: carts,
      };
    }
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        carts: {},
      };

    case actionTypes.ADD_TO_WISHLIST: {
      let wishList = addItem(state.wishList, action.payload.item);
      return {
        ...state,
        wishList: wishList,
      };
    }

    case actionTypes.REMOVE_FROM_WISHLIST: {
      let wishList = removeItem(state.wishList, action.payload.item);
      return {
        ...state,
        wishList: wishList,
      };
    }

    default:
      return state;
  }
};

export default cart;
