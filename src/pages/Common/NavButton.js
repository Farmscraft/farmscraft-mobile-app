import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './styles';

const NavButton = React.memo(({title, onPressHandler, disabled}) => {
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={styles.navContainer}
      disabled={disabled}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});

export default NavButton;
