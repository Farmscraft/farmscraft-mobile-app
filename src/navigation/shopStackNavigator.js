import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header/header';

import SelectShop from '../pages/Shop/SelectShop';
import ShopType from '../pages/Shop/ShopType';

import HomeScreen from '../pages/Home/Home';

import {
  EDIT_PROFILE,
  MAP_ADDRESS,
  MERCHANT_ORDERS,
} from '../constants/constant';

const Stack = createStackNavigator();

function ShopStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="shops"
        component={ShopType}
        options={{
          header: props => (
            <Header
              title={'Shops'}
              backIcon={true}
              searchIcon={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="select_shop"
        component={SelectShop}
        options={{
          header: props => (
            <Header
              title={'Select shop'}
              backIcon={true}
              searchIcon={false}
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default ShopStackNavigation;
