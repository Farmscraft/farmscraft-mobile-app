import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  checkoutButtonContainer: {
    height: 60,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#121316',
    width: '100%',
  },
  priceWrapper: {
    width: '50%',
    height: 40,
    marginHorizontal: 10,
  },
  totalpriceText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'left',
    paddingLeft: 10,
  },
  savedText: {
    color: '#009900',
    fontSize: 14,
    textAlign: 'left',
    paddingLeft: 10,
  },

  checkoutButton: {
    width: '40%',
    height: 40,
    marginEnd: 20,
    borderColor: '#008080',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#008080',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const CheckOutButton = ({totalAmount = 100, savedAmount = 50, onPress}) => {
  return (
    <View style={styles.checkoutButtonContainer}>
      <View style={styles.priceWrapper}>
        <Text style={styles.totalpriceText}>{`Rs ${totalAmount}`}</Text>
        <Text style={styles.savedText}>{`Saved ${savedAmount}`}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={onPress}>
        <Text style={styles.checkoutText}>{'CHECKOUT'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckOutButton;
