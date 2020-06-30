import React from 'react';
import {addToCart, removeItem} from '../../redux/actions/cart';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';

const CartHandleWithIcons = ({name, brand, price, weight, id, unit, image}) => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const handleCart = (type, item) => () => {
    if (type === 'remove' && cart[id].quantity === 1) {
      dispatch(removeItem({id}));
      return;
    }
    dispatch(
      addToCart({
        [id]: {
          ...item,
          quantity: cart[id]
            ? type === 'add'
              ? cart[id].quantity + 1
              : cart[id].quantity - 1
            : 1,
        },
      }),
    );
  };

  return (
    <View style={styles.wrapper}>
      <Icon
        onPress={handleCart('remove', {
          name,
          brand,
          price,
          weight,
          id,
          unit,
          image,
        })}
        name="remove-circle-outline"
        size={28}
      />
      <Text>{cart[id].quantity}</Text>
      <Icon
        onPress={handleCart('add', {
          name,
          brand,
          price,
          weight,
          id,
          unit,
          image,
        })}
        name="add-circle-outline"
        size={28}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row', justifyContent: 'space-around', flex: 1},
});

export default CartHandleWithIcons;
