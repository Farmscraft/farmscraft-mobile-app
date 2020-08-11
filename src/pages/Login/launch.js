import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import logo from '../../Images/ic_launcher.png';

const Launch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={logo} resizeMode={'contain'} />
      </View>
    </View>
  );
};

export default Launch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageContainer: {
    height: 250,
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 100,
    width: 100,
  },
});
