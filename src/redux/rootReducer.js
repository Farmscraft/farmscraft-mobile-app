import {combineReducers} from 'redux';
import cart from './reducers/cart';
import user from './reducers/user';
import orders from './reducers/orders';
import shop from './reducers/shop';

export default combineReducers({
  cart,
  user,
  orders,
  shop,
});
