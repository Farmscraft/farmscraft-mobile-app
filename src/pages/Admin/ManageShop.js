import React, {useState} from 'react';
import {StyleSheet, Text, View, SafeAreaView, SectionList} from 'react-native';
import {Button, Input} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';

const formatData = (data = {}) => {
  const formatted = [];
  Object.entries(data).forEach(([title, values], index) => {
    formatted.push({
      title: title,
      data: [...values, `add:more:${title}`],
    });
  });
  return formatted;
};

const ShopManager = ({route, navigation}) => {
  const {item, name} = route.params;
  const [category, setCategory] = useState('');

  const handleAddMore = title => () => {
    const key = title.split(':')[2];
    navigation.navigate('AddItems', {
      key: key,
      currentItems: item[key],
      shopName: name,
    });
  };

  const addCategories = text => {
    firestore()
      .collection('shops')
      .doc(name)
      .set({[category]: []}, {merge: true})
      .then(() => {})
      .catch(err => {
        console.warn(err);
      });
  };
  const Item = ({title}) =>
    title.startsWith('add:more') ? (
      <Button onPress={handleAddMore(title)} title="Add More" />
    ) : (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      <Input onChangeText={text => setCategory(text)} value={category} />
      <Button title="add category" onPress={addCategories} />
      <SectionList
        sections={formatData(item)}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Item title={item} />}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};

export default ShopManager;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
});
