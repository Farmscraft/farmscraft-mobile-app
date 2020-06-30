import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header/header';
import Cart from '../pages/Cart/Cart';

const Stack = createStackNavigator();

function CartStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'cart'}
        component={Cart}
        options={{
          header: props => (
            <Header
              title={'My Cart'}
              backIcon={false}
              searchIcon={false}
              {...props}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default CartStackNavigation;
