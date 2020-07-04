import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import plusIcon from '../../Images/plus.png';
import minusIcon from '../../Images/minus.png';
import styles from './styles';

const CounterComponent = ({value, handleOnSubstract, handleOnAdd}) => {
  return (
    <View style={styles.counter_container}>
      <View style={styles.counter_control_container}>
        <TouchableOpacity
          style={styles.counter_control_icon_container}
          onPress={() => handleOnSubstract(value)}>
          <FastImage
            source={minusIcon}
            resizeMode={FastImage.resizeMode.center}
            style={styles.icon_style}
          />
        </TouchableOpacity>
        <View style={styles.counter_control_labe_container}>
          <Text style={{color: '#263254', fontSize: 16}}>
            {value === 0 ? '0' : value && String(value)}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.counter_control_icon_container}
          onPress={() => handleOnAdd(value)}>
          <FastImage
            source={plusIcon}
            resizeMode={FastImage.resizeMode.center}
            style={styles.plus_icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CounterComponent;
