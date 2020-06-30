import React, {useState} from 'react';
import {Input, Button} from 'react-native-elements';
import {View, ToastAndroid, SafeAreaView, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';

const EditItems = ({route, navigation}) => {
  const {item} = route.params;

  const [itemObj, setItemObj] = useState({
    id: item.id,
    image: item.image,
    price: item.price,
    type: item.type,
    brand: item.brand,
    weight: item.weight,
    unit: item.unit,
    name: item.name,
  });
  const handleText = name => text => {
    setItemObj(prevItems => ({...prevItems, [name]: text}));
  };

  const addData = () => {
    firestore()
      .collection('entities')
      .doc('items')
      .update({[itemObj.id]: itemObj})
      .then(() => {
        ToastAndroid.show('Done', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.warn(err);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Input
          labelStyle={styles.labelStyle}
          label="Name"
          onChangeText={handleText('name')}
          value={itemObj.name}
          placeholder="Name"
        />
        <View style={styles.flexRow}>
          <View style={{flex: 1}}>
            <Input
              labelStyle={styles.labelStyle}
              label="Brand"
              onChangeText={handleText('brand')}
              value={itemObj.brand}
              placeholder="Brand"
            />
          </View>
          <View style={{flex: 1}}>
            <Input
              labelStyle={styles.labelStyle}
              label="Id"
              onChangeText={handleText('id')}
              value={itemObj.id}
              placeholder="id"
            />
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={{flex: 1}}>
            <Input
              labelStyle={styles.labelStyle}
              label="type"
              onChangeText={handleText('type')}
              value={itemObj.type}
              placeholder="type"
            />
          </View>
          <View style={{flex: 1}}>
            <Input
              labelStyle={styles.labelStyle}
              label="Price"
              onChangeText={handleText('price')}
              value={itemObj.price}
              placeholder="price"
            />
          </View>
        </View>

        <Input
          labelStyle={styles.labelStyle}
          label="Image"
          onChangeText={handleText('image')}
          value={itemObj.image}
          placeholder="image"
        />
        <View style={styles.flexRow}>
          <View style={{flex: 1}}>
            <Input
              labelStyle={styles.labelStyle}
              label="unit"
              onChangeText={handleText('unit')}
              value={itemObj.unit}
              placeholder="unit"
            />
          </View>
          <View style={{flex: 1}}>
            <Input
              labelStyle={styles.labelStyle}
              label="weight"
              onChangeText={handleText('weight')}
              value={itemObj.weight}
              placeholder="weight"
            />
          </View>
        </View>
        <Button onPress={addData} title="add" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
  },
  flexRow: {
    flexDirection: 'row',
  },
});

export default EditItems;
