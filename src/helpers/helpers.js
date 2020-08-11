import {Platform, Linking, Alert} from 'react-native';

export const callNumber = phone => {
  let phoneNumber = phone;
  if (Platform.OS !== 'android') {
    phoneNumber = `telprompt:${phone}`;
  } else {
    phoneNumber = `tel:${phone}`;
  }
  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(err => console.log(err));
};

/*
 * validation for null/empty value;
 */

export const isNull = value => {
  switch (typeof value) {
    case 'object':
      if (!Array.isArray(value)) {
        if (value === null || Object.keys(value).length === 0) {
          return true;
        }
        if (Object.keys(value).length) {
          return false;
        }
      } else {
        if (value.length) {
          return false;
        }
        return true;
      }
      break;
    case 'string':
    case 'number':
      if (value.toString().length) {
        return false;
      } else {
        return true;
      }
    case 'boolean':
      return value;
    case 'undefined':
      return true;
    default:
      return false;
  }
};

export const addItem = (prevCart = {}, currentItem) => {
  prevCart[currentItem.variantID] = {...currentItem};
  return prevCart;
};

export const removeItem = (prevCart = {}, currentItem) => {
  delete prevCart[currentItem.variantID];
  return prevCart;
};
