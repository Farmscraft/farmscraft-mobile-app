import React, {useContext} from 'react';
import {View} from 'react-native';
import {topTabContext} from '../../context/toptab';
import VirtualizedListExample from '../VirtualizedList/List';

const ItemList = ({navigation, route}) => {
  const items = useContext(topTabContext);
  return (
    <View style={{flex: 1}}>
      <VirtualizedListExample items={Object.values(items[route.name])} />
    </View>
  );
};

export default ItemList;
