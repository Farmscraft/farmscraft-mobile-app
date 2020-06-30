import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header/header';
import OrderScreen from '../pages/Orders/Orders';

const Stack = createStackNavigator();

function OrderStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Orders'}
        component={OrderScreen}
        options={{
          header: props => (
            <Header
              title={'Order'}
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

export default OrderStackNavigation;
