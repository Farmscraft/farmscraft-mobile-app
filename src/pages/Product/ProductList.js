import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import _ from 'lodash';
import {useSelector, useDispatch} from 'react-redux';
import ProductItem from '../Common/ProductItem/ProductItem';
import {getSubCategoryData} from '../../firebase/firebase';

import {
  addToCart,
  removeFromCart,
  addToWishlist,
} from '../../redux/actions/cart';
import {isNull} from '../../helpers/helpers';

const ProductList = ({navigation, route}) => {
  const {subCatItem} = route.params;
  const [subCatData, setSubCatData] = useState([]);

  useEffect(() => {
    getSubCategoryData(subCatItem.subCatID)
      .then(snapshot => {
        let data = [];
        snapshot.forEach(snap => {
          data.push(snap.data());
        });

        setSubCatData(data);
      })
      .catch(err => {});
  }, [subCatItem.subCatID]);

  const dispatch = useDispatch();

  const handleOnSubstract = (item, value = 0) => {
    const findIndex = _.findIndex(subCatData, {variantID: item.variantID});
    if (findIndex !== -1 && value > 0) {
      subCatData[findIndex]['orderQuantity'] = value - 1;
      setSubCatData(subCatData);
      dispatch(addToCart(subCatData[findIndex]));
    }

    if (subCatData[findIndex]['orderQuantity'] == 0) {
      dispatch(removeFromCart(subCatData[findIndex]));
    }
  };

  const handleOnAdd = (item, value = 0) => {
    const findIndex = _.findIndex(subCatData, {variantID: item.variantID});
    if (findIndex !== -1) {
      subCatData[findIndex]['orderQuantity'] = value + 1;
      setSubCatData(subCatData);
      dispatch(addToCart(subCatData[findIndex]));
    }
  };

  const {wishList} = useSelector(state => state.CartReducer);
  const checkFavorite = item => {
    let fav = false;
    if (!isNull(wishList) && !isNull(wishList[item.variantID])) {
      fav = true;
    }
    return fav;
  };

  const onPressHandler = item => {};

  return (
    <View style={{flex: 1}}>
      <FlatList
        ListEmptyComponent={() => (
          <ActivityIndicator size="large" color="red" />
        )}
        data={subCatData}
        renderItem={({item, index}) => (
          <ProductItem
            item={item}
            index={index}
            addToWishlist={item => dispatch(addToWishlist(item))}
            handleOnSubstract={handleOnSubstract}
            handleOnAdd={handleOnAdd}
            markedFavorite={checkFavorite(item)}
            onPress={onPressHandler}
            key={item.variantID}
          />
        )}
        keyExtractor={item => String(item.variantID)}
      />
    </View>
  );
};

export default ProductList;
