import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigation from './TopTabNavigation';
import {ItemList} from '../components';
import Account from '../pages/Account/Account';
import Cart from '../pages/Cart/Cart';
import Phone from '../pages/Login/PhoneLogin';
import EditItem from '../pages/Admin/EditItems';
import Orders from '../pages/Orders/Orders';
import Address from '../pages/Address/Address';
import BottomBar from '../components/BottomBar/BottomBar';
import {ACCOUNT, ORDERS, ADDRESS, CART, HOME} from '../constants/constant';
import TopTapProvider from '../context/toptab';

const Stack = createStackNavigator();

const getComponent = screen => {
  switch (screen) {
    case HOME:
      return TabNavigation;
    case ACCOUNT:
      return Account;
    case ADDRESS:
      return Address;
    case ORDERS:
      return Orders;
    default:
      return null;
  }
};

function StackNavigation({navigation, route}) {
  return (
    <TopTapProvider>
      <Stack.Navigator>
        <Stack.Screen name={route.name} component={getComponent(route.name)} />
        <Stack.Screen name={CART} component={Cart} />
      </Stack.Navigator>
    </TopTapProvider>
  );
}

export default StackNavigation;
