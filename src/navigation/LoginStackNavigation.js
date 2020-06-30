import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginHome from '../pages/Login/LoginButtons';
import EmailLogin from '../pages/Login/EmailLogin';
import Phone from '../pages/Login/PhoneLogin';

const Stack = createStackNavigator();

function LoginNavigation({navigation, route}) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Phone"
          component={Phone}
        />
        <Stack.Screen
          name="Email"
          component={EmailLogin}
          options={{headerShown: false}}
        />
        {/*<Stack.Screen
          name="Phone"
          component={Phone}
          options={{headerShown: false}}
        />*/}
      </Stack.Navigator>
    </>
  );
}

export default LoginNavigation;
