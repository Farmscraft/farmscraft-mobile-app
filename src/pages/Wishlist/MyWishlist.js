import React from 'react';
import {View, FlatList, ActivityIndicator, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import WishListCard from './WishListCard';

import {removeFromWishlist, clearWishlist} from '../../redux/actions/cart';
import {isNull} from '../../helpers/helpers';
import _ from 'lodash';

const MyWishlist = ({navigation, route}) => {
  const {wishList} = useSelector(state => state.CartReducer);
  const dispatch = useDispatch();

  const removeWishlistItem = item => {
    dispatch(removeFromWishlist(item));
  };

  const clearWishlist = () => {
    dispatch(clearWishlist());
  };

  const onPressHandler = item => {};

  const handleCheckout = () => {};

  return (
    <View style={{flex: 1}}>
      {Object.values(wishList).length ? (
        <FlatList
          ListEmptyComponent={() => (
            <ActivityIndicator size="large" color="red" />
          )}
          data={Object.values(wishList)}
          renderItem={({item, index}) => (
            <WishListCard
              item={item}
              index={index}
              removeItem={removeWishlistItem}
              onPress={onPressHandler}
              key={item.variadID}
            />
          )}
          keyExtractor={item => String(item.variantID)}
        />
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
            Your favourite items will display here. Add some item from product
            liting page
          </Text>
        </View>
      )}
    </View>
  );
};

export default MyWishlist;
