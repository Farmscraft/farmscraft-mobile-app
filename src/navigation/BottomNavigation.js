import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import homeStackNavigator from './homeStackNavigator';
import categoryStackNavigator from './categoryStackNavigator';
import cartStackNavigator from './cartStackNavigator';
import accountStackNavigator from './accountStackNavigator';
import wishlistStackNavigator from './wishlistStackNavigator';

import {
  BOTTOM_TABS,
  HOME,
  CATEGORIES,
  CART,
  WISHLIST,
  ACCOUNT,
} from '../constants/constant';

const Tab = createBottomTabNavigator();

const ICON = {
  [HOME]: 'home',
  [CATEGORIES]: 'dashboard',
  [CART]: 'shopping-cart',
  [WISHLIST]: 'favorite',
  [ACCOUNT]: 'account-circle',
};

const ROUTES = {
  [HOME]: homeStackNavigator,
  [CATEGORIES]: categoryStackNavigator,
  [CART]: cartStackNavigator,
  [WISHLIST]: wishlistStackNavigator,
  [ACCOUNT]: accountStackNavigator,
};

const BottomNavigation = ({navigation, route}) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#00a0a0',
        inactiveTintColor: '#b0b6c4',
        keyboardHidesTabBar: true,
        style: styles.tabs,
      }}>
      {BOTTOM_TABS.map(el => (
        <Tab.Screen
          key={el}
          options={{
            tabBarLabel: el,
            tabBarIcon: ({color, size}) => (
              <Icon name={ICON[el]} size={size} color={color} />
            ),
          }}
          name={el}
          component={ROUTES[el]}
        />
      ))}

      {/* <Tab.Screen
          options={{tabBarButton: () => null}}
          name={MAP_ADDRESS}
          component={ROUTES[MAP_ADDRESS]}
        /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabs: {
    height: 56,
    paddingBottom: 5,
    borderTopWidth: 1,
    backgroundColor: '#ffffff',
  },
  tabItem: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIcon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
});

export default BottomNavigation;
