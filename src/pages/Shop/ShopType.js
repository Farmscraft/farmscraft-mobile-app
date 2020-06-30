import React, {useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Card} from 'react-native-elements';
import {setActiveRole} from '../../redux/actions/user.js';
import {useDispatch} from 'react-redux';
import {CONSUMER} from '../../constants/constant.js';

const DATA = [
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'salon',
    subtitle: '',
    image: 'https://iili.io/JeW68P.png',
  },
  {
    id: '',
    title: 'grocery',
    subtitle: 'Coming Soon',
    image: 'https://iili.io/JeVV71.jpg',
  },
];

export default function ShopType({navigation}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveRole(CONSUMER));
  }, []);

  function Item({title, image, subtitle, id}) {
    return (
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() =>
          id ? navigation.navigate('select_shop', {type: title}) : void 0
        }>
        <Card
          containerStyle={{borderRadius: 10}}
          title={title}
          image={{uri: image}}>
          <Text style={styles.comingSoon}>{subtitle}</Text>
        </Card>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
      />
      <View style={{padding: 20}}>
        <Text style={styles.comingSoon}>
          Business Related Query Email Us: grocersonlineshopping@gmail.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  comingSoon: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
