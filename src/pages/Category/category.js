import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const data = [
  {
    categoryID: 120,
    title: 'Lifestyle',
    catImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
  },
  {
    categoryID: 121,
    title: 'Fashion',
    catImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
  },
  {
    categoryID: 122,
    title: 'Grocery',
    catImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
  },
];

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
  const onPressHandler = item => {
    props.navigation.navigate('home', {category: item});
  };
  return (
    <ScrollView>
      <View style={styles.scrollView}>
        {data.map(item => (
          <CategoryItem
            item={item}
            onPress={onPressHandler}
            key={item['categoryID']}
          />
        ))}
      </View>
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
