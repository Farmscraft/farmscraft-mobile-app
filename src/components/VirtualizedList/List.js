import React from 'react';

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from '../../redux/actions/cart';
import CartHandleWithIcons from '../Common/HandleCart';
import {Image} from 'react-native-elements';
import NavButton from '../../components/navButton/navButton';

function Item({id, name, brand, price, image, weight, unit}) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);

  const handleCart = (type, item) => () => {
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
    <View style={styles.item}>
      <View style={styles.center}>
        <Image
          style={styles.tinyLogo}
          PlaceholderContent={<ActivityIndicator />}
          source={{uri: image}}
        />
      </View>
      <View style={styles.mt10}>
        <Text style={styles.mutedText}>{brand}</Text>
        <Text>{name}</Text>
      </View>
      <View style={styles.mt10}>
        <Text style={styles.mutedText}>
          {weight} {unit}
        </Text>
        <Text>MRP: {price}</Text>
      </View>
      <View style={[styles.mt10, {paddingBottom: 10}]}>
        {cart[id] && cart[id].quantity ? (
          <CartHandleWithIcons
            name={name}
            brand={brand}
            price={price}
            weight={weight}
            id={id}
            image={image}
            unit={unit}
          />
        ) : (
          <NavButton
            onPressHandler={handleCart('add', {
              name,
              brand,
              price,
              weight,
              unit,
              id,
              image,
            })}
            title="Buy now"
          />
        )}
      </View>
    </View>
  );
}

export default function App({items}) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListEmptyComponent={() => (
          <ActivityIndicator size="large" color="red" />
        )}
        numColumns={2}
        data={items}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mt10: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  mutedText: {
    color: '#A9A9A9',
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 8,
    flex: 1,
    borderWidth: 0.5,
    borderColor: '#e4e3e3',
    borderRadius: 4,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e4e3e3',
    paddingVertical: 2,
  },
  tinyLogo: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 32,
    padding: 10,
  },
  touchable: {
    flex: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  text: {alignSelf: 'center', color: '#ed5a6a', fontWeight: 'bold'},
});
