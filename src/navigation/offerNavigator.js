import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header/header';
import OfferScreen from '../pages/Offers/Offers';

const Stack = createStackNavigator();

function OffersStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Offers'}
        component={OfferScreen}
        options={{
          header: props => (
            <Header
              title={'Offers'}
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

export default OffersStackNavigation;
