import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Header from '../components/header/header';
import EditProfile from '../pages/Account/EditProfile';
import Accounts from '../pages/Account/Account';
import Address from '../pages/Address/AddressDetails';
import {EDIT_PROFILE, MAP_ADDRESS} from '../constants/constant';

const Stack = createStackNavigator();

function ProfileStackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Account'}
        component={Accounts}
        options={{
          header: props => (
            <Header
              title={'Account'}
              backIcon={false}
              searchIcon={false}
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

export default ProfileStackNavigation;
