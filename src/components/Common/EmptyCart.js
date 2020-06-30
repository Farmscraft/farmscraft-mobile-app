import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {HOME, API_STATUS} from '../../constants/constant';

const EmptyCart = ({navigation, apiStatus}) => (
  <View style={styles.container}>
    {apiStatus === API_STATUS.FETCHING ? (
      <ActivityIndicator size="large" color="red" />
    ) : (
      <>
        <View style={styles.textWrapper}>
          <Text>No Orders</Text>
        </View>
        <Button onPress={() => navigation.navigate(HOME)} title="Go Home" />
      </>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    marginVertical: 20,
    width: '100%',
    flex: 1,
  },
  textWrapper: {alignSelf: 'center', marginVertical: 10},
});

export default EmptyCart;
