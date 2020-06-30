import React from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import VirtualizedListExample from '../../components/VirtualizedList/List';
import Banner from '../Common/banner';
import CategoryContainer from '../Common/categoryContainer';

const data = [
  {
    categoryID: 123,
    title: 'Lifestyle',
    catImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
    subCategory: [
      {
        subCatID: 'kitchen',
        title: 'Kitchen Tools',
        subTitle: 'For perfect meal',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
      {
        subCatID: 'gift',
        title: 'Gift',
        subTitle: 'For your loved ones',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
      {
        subCatID: 'beauty',
        title: 'Beauty',
        subTitle: 'Prep for festival',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
      {
        subCatID: 'kids',
        title: 'Your kids',
        subTitle: 'Always with you ',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
    ],
  },

  {
    categoryID: 125,
    title: 'Fashion',
    catImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
    subCategory: [
      {
        subCatID: 'apparel',
        title: 'Apparel',
        subTitle: 'Essential Additions',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
      {
        subCatID: 'jeweley',
        title: 'Jeweley',
        subTitle: 'Essential Additions',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
      {
        subCatID: 'footwear',
        title: 'Footwear',
        subTitle: 'comfy kicks',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
      {
        subCatID: 'bags',
        title: 'Bags',
        subTitle: 'Be execise ready',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
    ],
  },

  {
    categoryID: 126,
    title: 'Grocery',
    catImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
    subCategory: [
      {
        subCatID: 'fruits',
        title: 'Fruit & Vegetable',
        subTitle: 'Health Essential',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
      {
        subCatID: 'tea',
        title: 'Tea & Coffee',
        subTitle: 'Essential Additions',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
      {
        subCatID: 'herbs',
        title: 'Herbs Essential',
        subTitle: 'Herbs Essential',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
      {
        subCatID: 'foods',
        title: 'Snacks & Branded Foods',
        subTitle: 'Be execise ready',
        subCatImage: 'https://dummyimage.com/80x80/000/fff&text=No+Image',
      },
    ],
  },
];

const Home = props => {
  const onPressItemHandler = item => {
    props.navigation.navigate('productList', {item: item});
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

  return (
    <ScrollView>
      <View style={styles.bannerWrapper}>
        <Banner imageStyle={{height: 150}} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.categoryID)}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bannerWrapper: {
    height: 170,
    margin: 10,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default Home;
