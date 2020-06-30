import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';
import Grocery from '../../Images/landing.png';

const LoginButtons = ({navigation}) => (
  <View style={styles.container}>
    <Image source={Grocery} style={styles.image} />
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <View style={{alignSelf: 'center'}}>
        <Button
          onPress={() => navigation.navigate('Phone')}
          buttonStyle={{
            margin: 10,
            borderRadius: 20,
            paddingHorizontal: 30,
            // backgroundColor: '#FF0266',
          }}
          title="Login With Phone"
        />
        <Button
          onPress={() => navigation.navigate('Email')}
          buttonStyle={{
            margin: 10,
            borderRadius: 20,
            paddingHorizontal: 30,
            // backgroundColor: '#FF3366',
          }}
          title="Login With Email"
        />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    justifyContent: 'center',
    height: 300,
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default LoginButtons;
