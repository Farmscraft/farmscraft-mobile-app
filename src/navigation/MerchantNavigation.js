import React, {useEffect} from 'react';
import Order from '../pages/Orders/Orders.js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {setActiveRole} from '../redux/actions/user.js';
import {useDispatch} from 'react-redux';
import {MERCHANT} from '../constants/constant';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const MerchantNavigation = ({navigation, route}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRole(MERCHANT));
  }, []);

  return (
    <Tab.Navigator tabBarOptions={{keyboardHidesTabBar: true}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="format-list-bulleted" size={size} color={color} />
          ),
        }}
        name="MerchantOrder"
        component={Order}
      />
    </Tab.Navigator>
  );
};

export default MerchantNavigation;
