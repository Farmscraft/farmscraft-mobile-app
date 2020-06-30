import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const ShopManager = ({navigation}) => {
  const [state, setStatae] = useState({});
  useEffect(() => {
    firestore()
      .collection('shops')
      .get()
      .then(snapshot => {
        snapshot.docs.map(docs => {
          setStatae(prevState => ({
            ...prevState,
            [docs.id]: docs.data(),
          }));
        });
      });
  }, []);

  const handleNavigation = item => () => {
    navigation.navigate('ManageShop', {
      item: state[item],
      name: item,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(state)}
        renderItem={({item}) => (
          <ListItem
            onPress={handleNavigation(item)}
            bottomDivider
            title={item}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default ShopManager;
