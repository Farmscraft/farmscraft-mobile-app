import React, {useEffect} from 'react';
import {View, BackHandler, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../Common/CartItem/CartItem';
import CheckOutButton from '../Common/CartItem/CheckOutButton';
import {addToCart, removeFromCart} from '../../redux/actions/cart';
import {isNull} from '../../helpers/helpers';
import _ from 'lodash';
import {placeOrder} from '../../firebase/firebase';

const SuccessScreen = ({message}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'green', fontSize: 14, textAlign: 'center'}}>
        {message}{' '}
      </Text>
    </View>
  );
};

const FailedScreen = ({message}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'green', fontSize: 14, textAlign: 'center'}}>
        {message}
      </Text>
    </View>
  );
};

function useBackHandler(handler) {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handler);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [handler]);
}

const Confirmation = ({navigation, route}) => {
  const {orders, status, message} = route.params;
  const handleBackPress = () => {
    if (status === 'success') {
      navigation.navigate('Home');
    } else {
      navigation.navigate('Cart');
    }
  };

  useBackHandler(handleBackPress);

  if (status === 'failed') {
    return <FailedScreen message={message} />;
  }

  if (status === 'success') {
    return <SuccessScreen message={message} />;
  }
  return <View style={{flex: 1}} />;
};

export default Confirmation;
