import React from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from '../Common/CartItem/CartItem';
import CheckOutButton from '../Common/CartItem/CheckOutButton';
import {addToCart, removeFromCart, clearCart} from '../../redux/actions/cart';
import {isNull} from '../../helpers/helpers';
import _ from 'lodash';
import {placeOrder} from '../../firebase/firebase';

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

  const handleCheckout = () => {
    const values = Object.values(carts);
    if (!isNull(values)) {
      placeOrder(values)
        .then(snapshot => {
          navigation.navigate('confirmation', {
            orders: values,
            status: 'success',
            message: 'Order Place successfully. Thank you ',
          });
          dispatch(clearCart());
        })
        .catch(err => {
          navigation.navigate('confirmation', {
            orders: values,
            status: 'failed',
            message: err,
          });
        });
    }
  };

  const {totalFCPrice, savedAmount, totalMRPPrice} = getAggregatedPrices();

  return (
    <View style={{flex: 1}}>
      {Object.values(carts).length ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginHorizontal: 15,
          }}>
          <Text style={{fontSize: 14, color: 'black', lineHeight: 18}}>
            Cart is empty. Add some item from product liting page
          </Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
