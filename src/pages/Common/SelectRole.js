import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {MERCHANT, MERCHANT_ORDERS
} from '../../constants/constant';

const SelectRole = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <View style={{padding: 20}}>
        <Button
          title={MERCHANT}
          onPress={() => navigation.navigate(MERCHANT_ORDERS)}
          containerStyle={{marginVertical: 20}}
        />
        <Button
          onPress={() => navigation.navigate('Shop Type')}
          title="Consumer"
          containerStyle={{marginVertical: 20}}
        />
      </View>
    </View>
  );
};

export default SelectRole;
