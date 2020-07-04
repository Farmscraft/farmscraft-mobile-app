import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import ProductItem from '../Common/ProductItem/ProductItem';

import {addToWishlist} from '../../redux/actions/orders';

const data = [
  {
    variantID: 1234,
    productID: 100,
    isActive: true,
    defImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
    images: [
      {
        imageID: 143,
        imageUrl: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
    ],

    // base detail
    title: 'Title',
    subTitle: 'SubTitle',
    brandName: '',
    category: 'Women',
    subCategory: '',
    style: '',
    availabeVariant: 2,

    // rating
    rating: '3.5',
    ratedBy: 10,
    reviews: [{date: '10/04/2020', name: 'abc', rating: 5, description: ''}],

    // moq

    moq: 1, // 500 grams //500 pcs
    unit: 'pcs', // kg//grams
    moqType: 'text', // dropdown
    moqOptions: [
      {
        moq: 10,
        price: 1000,
        label: '10',
      },
    ], // may be in future

    // pricing
    mrpPrice: 199,
    sellerPrice: 72,
    fcPrice: 75,

    //dynamic property
    orderQuantity: 1,
  },
];

const ProductList = ({navigation, route}) => {
  const dispatch = useDispatch();

  const handleOnSubstract = (item, value) => {};

  const handleOnAdd = (item, value) => {};

  const checkFavorite = item => {};

  const onPressHandler = item => {};

  return (
    <View style={{flex: 1}}>
      <FlatList
        ListEmptyComponent={() => (
          <ActivityIndicator size="large" color="red" />
        )}
        data={data}
        renderItem={({item, index}) => (
          <ProductItem
            item={item}
            index={index}
            addToWishlist={item => dispatch(addToWishlist(item))}
            handleOnSubstract={handleOnSubstract}
            handleOnAdd={handleOnAdd}
            markedFavorite={checkFavorite(item)}
            onPress={onPressHandler}
          />
        )}
        keyExtractor={item => item.variadID}
      />
    </View>
  );
};

export default ProductList;
