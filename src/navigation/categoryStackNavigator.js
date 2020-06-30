import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header/header';
import CategoryScreen from '../pages/Category/category';

const Stack = createStackNavigator();

function CategoryStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'categories'}
        component={CategoryScreen}
        options={{
          header: props => (
            <Header
              title={'Categories'}
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

export default CategoryStackNavigation;
