import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Image, Button, ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ItemCard = ({item}) => (
  <View>
    <Text>Id: {item.id}</Text>
    <Text>Price: {item.price}</Text>
    <Text>name: {item.name}</Text>
    <Text>brand: {item.brand}</Text>
    <Text>Type {item.type}</Text>
    <Text>
      Weight: {item.weight} {item.unit}
    </Text>
  </View>
);

const Admin = ({navigation}) => {
  const [state, setState] = useState({});

  useEffect(() => {
    firestore()
      .collection('entities')
      .doc('items')
      .get()
      .then(querySnapshot => {
        setState(querySnapshot.data());
      })
      .catch(err => {
        console.warn(err);
      });
  }, []);

  const keyExtractor = (item, index) => item.id + index;

  const handleEdit = item => () => {
    navigation.navigate('Edit', {item});
  };

  const handleDelete = id => () => {
    const itemsRef = firestore()
      .collection('entities')
      .doc('items');

    itemsRef
      .update({
        [id]: firestore.FieldValue.delete(),
      })
      .then(() => {
        const {[id]: value, ...withoutDeletedId} = state;
        setState(withoutDeletedId);
      });
  };

  const Item = ({item}) => {
    return (
      <ListItem
        onPress={handleEdit(item)}
        rightAvatar={{avatarStyle: {flex: 1}, source: {uri: item.image}}}
        leftIcon={
          <Icon
            style={{alignSelf: 'flex-end'}}
            onPress={handleDelete(item.id)}
            name="remove-circle-outline"
            size={28}
          />
        }
        leftElement={() => <ItemCard item={item} />}
        bottomDivider
      />
    );
  };

  const Seprator = () => <View style={styles.separator} />;

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Button
          onPress={handleEdit({
            name: '',
            price: '',
            brand: '',
            image: '',
            id: '',
          })}
          title="Add New"
        />
        <FlatList
          ItemSeparatorComponent={Seprator}
          keyExtractor={keyExtractor}
          data={Object.values(state)}
          ListEmptyComponent={() => (
            <View>
              <Text>No Items</Text>
            </View>
          )}
          renderItem={Item}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemStyle: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  imageStyle: {flex: 1, height: 100, width: 100},
  seprator: {height: 0.5, width: '100%', backgroundColor: '#C8C8C8'},
});

export default Admin;
