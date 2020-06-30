import React from 'react';
import {View} from 'react-native';
import VirtualizedListExample from '../../components/VirtualizedList/List';

const data = [
  {
    id: 120,
    name: 'ABC',
    image: '',
    mrpPrice: 120,
    salePrice: 100,
    discount: '10%',
    weight: '100',
    unit: 'gram',
    price: 100,
  },
  {
    id: 121,
    name: 'ABC',
    image: '',
    mrpPrice: 120,
    salePrice: 100,
    discount: '10%',
    weight: '100',
    unit: 'gram',
    price: 100,
  },
  {
    id: 122,
    name: 'ABC',
    image: '',
    mrpPrice: 120,
    salePrice: 100,
    discount: '10%',
    weight: '100',
    unit: 'gram',
    price: 100,
  },
  {
    id: 123,
    name: 'ABC',
    image: '',
    mrpPrice: 120,
    salePrice: 100,
    discount: '10%',
    weight: '100',
    unit: 'gram',
    price: 100,
  },
];



function ProductItem(){
  return(
    
  )

}





const ProductList = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <VirtualizedListExample items={data} />
    </View>
  );
};

export default ProductList;
