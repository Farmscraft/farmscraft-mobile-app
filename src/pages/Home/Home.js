import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Banner from '../Common/banner';
import CategoryContainer from '../Common/categoryContainer';
import {getHomeData} from '../../firebase/firebase';

const Home = props => {
  const [state, setState] = useState({});
  const [banner, setBanner] = useState({});

  useEffect(() => {
    getHomeData()
      .then(snapshot => {
        const response = {};
        snapshot.forEach(snap => {
          if (snap.id === 'banners') {
            setBanner(snap.data());
          } else {
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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.bannerWrapper}>
        <Banner imageStyle={{height: 150}} logos={banner.banner} />
      </View>
      <FlatList
        data={Object.values(state)}
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
