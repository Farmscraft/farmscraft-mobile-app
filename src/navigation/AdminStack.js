import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomAdmin from '../navigation/AdminBottom';
import AdminEdit from '../pages/Admin/EditItems';
import ManageShop from '../pages/Admin/ManageShop';
import AddItems from '../pages/Admin/AddItems';

const Stack = createStackNavigator();

function AdminStack({navigation, route}) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="AdminBottom"
          component={BottomAdmin}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Edit"
          component={AdminEdit}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ManageShop"
          component={ManageShop}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddItems"
          component={AddItems}
        />
      </Stack.Navigator>
    </>
  );
}

export default AdminStack;
