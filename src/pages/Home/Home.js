import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Banner from '../Common/banner';
import {getHomeData} from '../../firebase/firebase';

const Home = props => {
  const [banner, setBanner] = useState({});

  useEffect(() => {
    getHomeData()
      .then(snapshot => {
        snapshot.forEach(snap => {
          if (snap.id === 'banners') {
            setBanner(snap.data());
          }
        });
      })
      .catch(err => {});
  }, []);

  return (
    <View showsVerticalScrollIndicator={false}>
      <View style={styles.bannerWrapper}>
        <Banner imageStyle={{height: 150}} logos={banner.banner} />
      </View>
    </View>
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
