import {actionTypes} from '../actions/user';

const initState = {
  address: {},
  activeShop: '',
  mode: null,
};

const user = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case actionTypes.ADD_ADDRESS: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case actionTypes.ADD_ACTIVE_SHOP: {
      return {
        ...state,
        address: {
          ...state.address,
          ...action.payload.address,
        },
      };
    }
    case actionTypes.SET_ACTIVE_ROLE: {
      return {
        ...state,
        mode: action.payload.activeRole,
      };
    }
    case actionTypes.ADD_INFO: {
      return {
        ...state,
        info: action.payload,
      };
    }
    default:
      return state;
  }
};

export default user;
