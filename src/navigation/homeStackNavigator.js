import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Header from '../components/header/header';
import HomeScreen from '../pages/Home/Home';
import ProductList from '../pages/Product/ProductList';

import {
  EDIT_PROFILE,
  MAP_ADDRESS,
  MERCHANT_ORDERS,
} from '../constants/constant';

const Stack = createStackNavigator();

function HomeStackNavigation() {
  return (
    <Stack.Navigator initialRouteName={'home'}>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          header: props => (
            <Header
              title={'Home'}
              backIcon={false}
              searchIcon={false}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="productList"
        component={ProductList}
        options={{
          header: props => (
            <Header
              title={'Product'}
              backIcon={true}
              searchIcon={true}
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStackNavigation;
