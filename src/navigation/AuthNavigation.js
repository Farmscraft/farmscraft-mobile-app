import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SelectShop from '../pages/Shop/SelectShop';
import ShopType from '../pages/Shop/ShopType';
import EditProfile from '../pages/Account/EditProfile';
import AdminNavigation from '../navigation/AdminStack';
import BottomNavigation from '../navigation/BottomNavigation';
import MerchantNavigation from '../navigation/MerchantNavigation';
import SelectRole from '../pages/Common/SelectRole';
import Address from '../pages/Address/AddressDetails';
import Header from '../components/header/header';

import CustomDrawerContent from './drawerContent';
import ShopStackNavigator from './shopStackNavigator';
import OrderStackNavigator from './orderStackNavigator';

import {View, Text} from 'react-native';
import {
  EDIT_PROFILE,
  MAP_ADDRESS,
  MERCHANT_ORDERS,
} from '../constants/constant';

const Drawer = createDrawerNavigator();

function AppNavigator({shop}) {
  return (
    <Drawer.Navigator
      initialRouteName="home"
      backBehavior="initialRoute"
      openByDefault={false}
      keyboardDismissMode="on-drag"
      lazy={true}
      drawerContentOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 30},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="home" component={BottomNavigation} />
      <Drawer.Screen name="shops" component={ShopStackNavigator} />
      <Drawer.Screen name="orders" component={OrderStackNavigator} />
      <Drawer.Screen name="AdminNavigation" component={AdminNavigation} />
      <Drawer.Screen name={MAP_ADDRESS} component={Address} />
    </Drawer.Navigator>
  );
}

const HeaderComponent = ({route}) => (
  <View>
    <Text style={{fontWeight: 'bold', fontSize: 16, color: '#fff'}}>
      {route.state ? route.state.routeNames[route.state.index] : 'Home'}
    </Text>
  </View>
);

const Stack = createStackNavigator();

function AuthNavigation({shop}) {
  return (
    <Stack.Navigator initialRouteName={'shop_type'}>
      {shop && <Stack.Screen name="SelectRole" component={SelectRole} />}

      <Stack.Screen name="Shop Type" component={ShopType} />
      <Stack.Screen
        name="Select Shop"
        component={SelectShop}
        options={{
          header: props => (
            <Header
              title={'Select Shop'}
              backIcon={true}
              searchIcon={true}
              {...props}
            />
          ),
        }}
      />
      <Stack.Screen
        name="home"
        component={BottomNavigation}
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

      <Stack.Screen name={MERCHANT_ORDERS} component={MerchantNavigation} />
      <Stack.Screen name={EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={MAP_ADDRESS} component={Address} />
      <Stack.Screen name="AdminNavigation" component={AdminNavigation} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
