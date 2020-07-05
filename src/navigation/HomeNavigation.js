import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// common header
import Header from '../components/header/header';

// all tabs
import HomeScreen from '../pages/Home/Home';
import CategoryScreen from '../pages/Category/category';
import CartScreen from '../pages/Cart/Cart';
import UserAccountScreen from '../pages/Account/Account';
import WishlistScreen from '../pages/Offers/Offers';

// other screen

import ProductList from '../pages/Product/ProductList';
import EditProfile from '../pages/Account/EditProfile';
import Address from '../pages/Address/AddressDetails';

import {
  BOTTOM_TABS,
  HOME,
  CATEGORIES,
  CART,
  WISHLIST,
  ACCOUNT,
  EDIT_PROFILE,
  MAP_ADDRESS,
} from '../constants/constant';

const ICON = {
  [HOME]: 'home',
  [CATEGORIES]: 'dashboard',
  [CART]: 'shopping-cart',
  [WISHLIST]: 'favorite',
  [ACCOUNT]: 'account-circle',
};

const ROUTES = {
  [HOME]: HomeScreen,
  [CATEGORIES]: CategoryScreen,
  [CART]: CartScreen,
  [WISHLIST]: WishlistScreen,
  [ACCOUNT]: UserAccountScreen,
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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
    </Tab.Navigator>
  );
};

function getHeader(props) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator

  const {route} = props;
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Home';

  switch (routeName) {
    case 'Home':
      return (
        <Header title={'Home'} backIcon={false} searchIcon={false} {...props} />
      );

    case 'Categories':
      return (
        <Header
          title={'Categories'}
          backIcon={false}
          searchIcon={false}
          {...props}
        />
      );
    case 'Cart':
      return (
        <Header
          title={'My Cart'}
          backIcon={false}
          searchIcon={false}
          {...props}
        />
      );

    case 'Wishlist':
      return (
        <Header
          title={'My Wishlist'}
          backIcon={false}
          searchIcon={false}
          {...props}
        />
      );
    case 'Account':
      return (
        <Header
          title={'My Account'}
          backIcon={false}
          searchIcon={false}
          {...props}
        />
      );
  }
}

function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={BottomNavigation}
        options={props => ({
          header: () => getHeader(props),
        })}
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

      <Stack.Screen
        name={EDIT_PROFILE}
        component={EditProfile}
        options={{
          header: props => (
            <Header
              title={'Edit Profile'}
              backIcon={true}
              searchIcon={false}
              {...props}
            />
          ),
        }}
      />

      <Stack.Screen
        name={MAP_ADDRESS}
        component={Address}
        options={{
          header: props => (
            <Header
              title={'Address'}
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

export default HomeNavigation;
