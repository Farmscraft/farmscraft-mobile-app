import React, {useContext} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ItemList} from '../components';
import {ActivityIndicator, View} from 'react-native';
import {topTabContext} from '../context/toptab';
import BottomBar from '../components/BottomBar/BottomBar';

const Tab = createMaterialTopTabNavigator();

function TabNavigation({navigation, route}) {
  const items = useContext(topTabContext);

  if (!Object.keys(items).length) {
    return <View style={{flex: 1, backgroundColor: 'red'}} />;
    // return <ActivityIndicator size="large" color="red" />;
  }

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
        }}>
        {Object.entries(items).map(([tab]) => (
          <Tab.Screen key={tab} name={tab} component={ItemList} />
        ))}
      </Tab.Navigator>
      <BottomBar navigation={navigation} route={route} />
    </>
  );
}

export default TabNavigation;
