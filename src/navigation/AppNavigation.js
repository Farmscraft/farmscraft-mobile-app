import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AdminNavigation from '../navigation/AdminStack';
import HomeNavigation from '../navigation/HomeNavigation';
import CustomDrawerContent from './drawerContent';
import ShopStackNavigator from './shopStackNavigator';
import OrderStackNavigator from './orderStackNavigator';

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
      <Drawer.Screen name="home" component={HomeNavigation} />
      <Drawer.Screen name="shops" component={ShopStackNavigator} />
      <Drawer.Screen name="orders" component={OrderStackNavigator} />
      <Drawer.Screen name="AdminNavigation" component={AdminNavigation} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
