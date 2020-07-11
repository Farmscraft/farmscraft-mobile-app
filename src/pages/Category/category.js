import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Text,
} from 'react-native';

import {getHomeData} from '../../firebase/firebase';

const CategoryItem = ({item, onPress}) => {
  const {categoryID, title, catImage} = item;
  return (
    <TouchableOpacity
      style={styles.item}
      key={categoryID}
      onPress={() => onPress(item)}>
      <ImageBackground source={{uri: catImage}} style={styles.image} />
    </TouchableOpacity>
  );
};

const Category = props => {
  const [banners, setCategoryBanner] = useState([]);

  const onPressHandler = item => {
    props.navigation.navigate('home', {category: item});
  };

  useEffect(() => {
    getHomeData()
      .then(snapshot => {
        const response = [];
        snapshot.forEach(snap => {
          if (snap.id !== 'banners') {
            const {catImage, categoryID, title} = snap.data();
            response.push({catImage, categoryID, title});
          }
        });
        setCategoryBanner(response);
      })
      .catch(err => {});
  }, []);

  return (
    <ScrollView>
      {banners.length ? (
        <View style={styles.scrollView}>
          {banners.map(item => (
            <CategoryItem
              item={item}
              onPress={onPressHandler}
              key={item['categoryID']}
            />
          ))}
        </View>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 170,
    width: '100%',
    marginBottom: 20,
  },

  scrollView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Category;
