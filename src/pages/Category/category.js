import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import CategoryContainer from '../Common/categoryContainer';

import {getHomeData} from '../../firebase/firebase';

const Category = props => {
  const [state, setState] = useState({});
  useEffect(() => {
    getHomeData()
      .then(snapshot => {
        const response = {};
        snapshot.forEach(snap => {
          if (snap.id !== 'banners') {
            response[snap.id] = snap.data();
          }
        });
        setState(response);
      })
      .catch(err => {});
  }, []);

  const onPressItemHandler = item => {
    props.navigation.navigate('productList', {subCatItem: item});
  };

  const renderItem = ({item, index}) => {
    return (
      <CategoryContainer
        category={item}
        onPressItem={onPressItemHandler}
        key={index}
      />
    );
  };

  if (!Object.values(state).length) {
    return <ActivityIndicator size="large" color="#00ff00" />;
  }

  return (
    <View>
      <FlatList
        data={Object.values(state)}
        renderItem={renderItem}
        keyExtractor={item => String(item.categoryID)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Category;
