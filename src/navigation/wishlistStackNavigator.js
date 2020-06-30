import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header/header';
import OfferScreen from '../pages/Offers/Offers';

const Stack = createStackNavigator();

function WishlistStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'wishlist'}
        component={OfferScreen}
        options={{
          header: props => (
            <Header
              title={'My Wishlist'}
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

export default WishlistStackNavigation;
