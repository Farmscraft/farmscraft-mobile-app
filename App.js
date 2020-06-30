import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {initStore} from './src/redux/store';
import codePush from 'react-native-code-push';
import Navigation from './src/navigation/Navigation';
import {colors} from './src/constants/constant';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};

const store = initStore();

const App = () => {
  return (
    <Provider store={store}>
      <View
        style={{
          height: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        }}>
        <StatusBar
          backgroundColor={colors.STATUS_BAR_COLOR}
          barStyle={Platform.OS === 'ios' ? 'default' : 'light-content'}
          translucent
        />
      </View>
      <Navigation />
    </Provider>
  );
};

export default codePush(codePushOptions)(App);
