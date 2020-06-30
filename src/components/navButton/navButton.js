import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

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

const styles = StyleSheet.create({
  navContainer: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a0a0',
    borderRadius: 4,
    width: '100%',
  },
  buttonText: {
    fontSize: 12,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default NavButton;
