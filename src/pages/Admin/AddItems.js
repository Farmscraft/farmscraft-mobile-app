import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';

const AddItems = ({navigation, route}) => {
  const [items, addItems] = useState(['']);
  const {key, currentItems, shopName} = route.params;

  const handleAdd = index => text => {
    addItems(Object.assign([], items, {[index]: text}));
  };

  const handleAddRow = () => {
    addItems(prevItems => [...prevItems, '']);
  };

  const handleAddItems = () => {
    firestore()
      .collection('shops')
      .doc(shopName)
      .set({[key]: [...currentItems, ...items]}, {merge: true})
      .then(querySnapshot => {
        console.warn(querySnapshot);
      })
      .catch(err => {
        console.warn(err);
      });
  };

  return (
    <View style={{flex: 1}}>
      {items.map((item, index) => (
        <View key={index} style={{flexDirection: 'row'}}>
          <Input
            containerStyle={{flex: 1}}
            onChangeText={handleAdd(index)}
            value={item}
            placeholder="INPUT WITH ICON"
            rightIcon={
              <Icon
                name="add-circle-outline"
                onPress={handleAddRow}
                size={24}
              />
            }
          />
        </View>
      ))}
      <Button onPress={handleAddItems} title="add" />
    </View>
  );
};

export default AddItems;
