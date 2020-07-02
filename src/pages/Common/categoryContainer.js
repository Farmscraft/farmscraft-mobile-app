import React from 'react';
import {
  View,
  ActivityIndicator,
  FlatList,
  StyleSheet,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
// import styles from './styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catHeader: {
    height: 200,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  catHeaderImage: {
    height: 140,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: 'green',
  },
  item: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 8,
    borderWidth: 0.5,
    borderColor: '#e4e3e3',
    borderRadius: 4,
    height: 150,
  },

  subCateTextContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  catTitle: {
    color: 'black',
    fontSize: 16,
    paddingTop: 5,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },

  title: {
    color: 'white',
    fontSize: 14,
    paddingBottom: 5,
    fontFamily: 'roboto',
  },
  subTitle: {
    color: 'white',
    fontSize: 12,
    paddingBottom: 5,
    fontFamily: 'roboto',
  },
});

const SubCategory = ({item, index, onPressItem}) => {
  const {subCatID, title, subTitle, subCatImage} = item;

  return (
    <TouchableOpacity
      style={styles.item}
      key={subCatID}
      onPress={() => onPressItem(item)}>
      <ImageBackground source={{uri: subCatImage}} style={styles.image}>
        <View style={styles.subCateTextContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const Summary = ({catImage}) => {
  return (
    <View style={styles.catHeaderImage}>
      <ImageBackground source={{uri: catImage}} style={styles.image} />
    </View>
  );
};

const ListHeader = React.memo(props => {
  const {category, onPressItem} = props;
  const {categoryID, title, catImage} = category;
  return (
    <View
      style={styles.catHeader}
      key={categoryID}
      onPress={() => {
        console.log('view more');
      }}>
      <View style={{height: 20, marginHorizontal: 10}}>
        <Text style={styles.catTitle}> {title} </Text>
      </View>
      <Summary catImage={catImage} />
    </View>
  );
});

const ListFooter = React.memo(({isLoading}) => {
  if (!isLoading) {
    return null;
  }

  return (
    <View style={styles.loading_view}>
      <ActivityIndicator size="large" color="rgb(0,151,235)" />
    </View>
  );
});

const CategoryContainer = React.memo(props => {
  const {category, onPressItem} = props;

  const renderItem = ({item, index}) => {
    return <SubCategory item={item} index={index} onPressItem={onPressItem} />;
  };

  const renderHeader = () => {
    return <ListHeader {...props} />;
  };

  const renderFooter = () => {
    return <ListFooter {...props} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={category['subCategory']}
        renderItem={renderItem}
        numColumns={2}
        keyExtractor={item => String(item.subCatID)}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
});

export default CategoryContainer;
