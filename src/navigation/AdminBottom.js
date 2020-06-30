import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import List from '../pages/Admin/Admin';
import ShopManager from '../pages/Admin/ShopManager';

const Tab = createBottomTabNavigator();

const BOTTOM_TABS = {
  List: List,
  Shop: ShopManager,
};

const AdminBottom = () => {
  return (
    <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true}}>
      {Object.entries(BOTTOM_TABS).map(([name, component]) => (
        <Tab.Screen
          key={name}
          options={{
            tabBarLabel: name,
          }}
          name={name}
          component={component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default AdminBottom;
