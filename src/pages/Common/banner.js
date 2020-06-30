import React from 'react';
import {View} from 'react-native';
import Swiper from 'react-native-swiper';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import groceryImage1 from '../../Images/abc.jpg';
import groceryImage2 from '../../Images/landing.png';

export const Slide = React.memo(
  ({image, imageStyle, container, resizeMode}) => {
    return (
      <View style={[styles.slideIconContainer, container]}>
        <FastImage
          style={[styles.slideIconSize, imageStyle]}
          source={image}
          resizeMode={'stretch'}
        />
      </View>
    );
  },
);

const Banner = React.memo(({logos, setRef, imageStyle}) => {
  const options = logos || [groceryImage1, groceryImage2];
  return (
    <View style={styles.sliderContainer}>
      <Swiper
        style={styles.wrapper}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        paginationStyle={{
          bottom: 0,
        }}
        loop={true}
        // index={0}
        ref={setRef}
        autoplay={true}
        autoplayTimeout={3}>
        {options.map((item, index) => {
          return (
            <Slide
              image={item}
              key={index.toString()}
              imageStyle={imageStyle}
            />
          );
        })}
      </Swiper>
    </View>
  );
});

export default Banner;
