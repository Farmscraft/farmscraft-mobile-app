import {actionTypes} from '../actions/cart';

const initState = {
  carts: {},
};

const addToCart = (prevCart = {}, currentItem) => {
  prevCart[currentItem.variantID] = {...currentItem};
  return prevCart;
};

const removeFromCart = (prevCart = {}, currentItem) => {
  delete prevCart[currentItem.variantID];
  return prevCart;
};

const cart = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      let carts = addToCart(state.carts, action.payload.item);
      return {
        ...state,
        carts: carts,
      };
    }

    case actionTypes.REMOVE_FROM_CART: {
      let carts = removeFromCart(state.carts, action.payload.item);
      return {
        ...state,
        carts: carts,
      };
    }

    case actionTypes.CLEAR_CART:
      return initState;
    default:
      return state;
  }
};

export default cart;
