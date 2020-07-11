import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../Common/CartItem/CartItem';
import CheckOutButton from '../Common/CartItem/CheckOutButton';
import {addToCart, removeFromCart} from '../../redux/actions/cart';
import {isNull} from '../../helpers/helpers';
import _ from 'lodash';

const CartScreen = ({navigation, route}) => {
  const {carts} = useSelector(state => state.CartReducer);
  const dispatch = useDispatch();

  const handleOnSubstract = (item, value) => {
    item['orderQuantity'] = value - 1;
    if (item['orderQuantity'] > 0) {
      dispatch(addToCart(item));
    }
    if (item['orderQuantity'] == 0) {
      dispatch(removeFromCart(item));
    }
  };

  const handleOnAdd = (item, value = 0) => {
    item['orderQuantity'] = value + 1;
    dispatch(addToCart(item));
  };

  const getAggregatedPrices = () => {
    let prices = {
      totalFCPrice: 0,
      savedAmount: 0,
      totalMRPPrice: 0,
    };
    const values = Object.values(carts);
    if (!isNull(values)) {
      _.forEach(values, item => {
        prices.totalFCPrice =
          prices.totalFCPrice +
          parseInt(item['fcPrice']) * parseInt(item['orderQuantity']);
        prices.totalMRPPrice =
          prices.totalMRPPrice +
          parseInt(item['mrpPrice']) * parseInt(item['orderQuantity']);
      });
    }
    if (!isNull(values)) {
      prices.savedAmount = prices.totalMRPPrice - prices.totalFCPrice;
    }

    return prices;
  };

  const onPressHandler = item => {};

  const handleCheckout = () => {};

  const {totalFCPrice, savedAmount, totalMRPPrice} = getAggregatedPrices();

  return (
    <View style={{flex: 1}}>
      <FlatList
        ListEmptyComponent={() => (
          <ActivityIndicator size="large" color="red" />
        )}
        data={Object.values(carts)}
        renderItem={({item, index}) => (
          <CartItem
            item={item}
            index={index}
            handleOnSubstract={handleOnSubstract}
            handleOnAdd={handleOnAdd}
            onPress={onPressHandler}
            key={item.variadID}
          />
        )}
        keyExtractor={item => String(item.variantID)}
      />
      <CheckOutButton
        totalAmount={totalFCPrice}
        savedAmount={savedAmount}
        onPress={handleCheckout}
      />
    </View>
  );
};

export default CartScreen;
