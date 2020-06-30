import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Picker, ScrollView, ToastAndroid} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {ACTIVE_CITIES, API_STATUS} from '../../constants/constant';
import {useSelector, useDispatch} from 'react-redux';
import {addAddress} from '../../firebase/firebase';
import {addAddress as addressAction} from '../../redux/actions/user';
import {PERMISSIONS, request} from 'react-native-permissions';
import {Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

const initState = {
  houseNo: '',
  street: '',
  landmark: '',
  area: '',
  city: 1,
  pincode: '',
  coords: {},
};

export default ({navigation, route}) => {
  const dispatch = useDispatch();
  const {id, address} = route.params;
  const {uid} = useSelector(state => state.user);
  const [state, setState] = useState(initState);
  const [apiStatus, setApiStatus] = useState(API_STATUS.IDEAL);

  useEffect(() => {
    if (address) {
      setState(address);
    }
    return () => {
      setState(initState);
    };
  }, [address]);

  useEffect(() => {
    request(
      Platform.select({
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
      }),
    );

    Geolocation.getCurrentPosition(info => {
      setState(prevState => ({
        ...prevState,
        coords: info.coords,
      }));
    });
  }, []);

  const handleSelectCity = a => {
    setState(prevState => ({
      ...prevState,
      city: a,
    }));
  };

  const handleText = name => text => {
    setState(prevState => ({
      ...prevState,
      [name]: text,
    }));
  };

  const handleSave = () => {
    setApiStatus(API_STATUS.FETCHING);
    addAddress({address: state, uid, addressId: id})
      .then(res => {
        setApiStatus(API_STATUS.IDEAL);
        ToastAndroid.show('Address Saved', ToastAndroid.SHORT);
        dispatch(addressAction({address: state}));
        navigation.goBack();
      })
      .catch(err => {
        setApiStatus(API_STATUS.ERROR);
        console.warn(err);
        ToastAndroid.show(
          'Unable to save address please try again',
          ToastAndroid.SHORT,
        );
      });
  };

  return (
    <>
      <ScrollView style={styles.wrapper}>
        <Input
          onChangeText={handleText('houseNo')}
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputStyle}
          label="House no."
          value={state.houseNo}
        />
        <Input
          onChangeText={handleText('street')}
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputStyle}
          label="Street details to locate you."
          value={state.street}
        />

        <Input
          onChangeText={handleText('landmark')}
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputStyle}
          label="Landmark for easy reach out"
          value={state.landmark}
        />
        <Input
          onChangeText={handleText('area')}
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputStyle}
          label="Area Details"
          value={state.area}
        />
        <View style={styles.flexRow}>
          <Picker
            style={styles.fullFlex}
            selectedValue={state.city}
            onValueChange={handleSelectCity}>
            {Object.entries(ACTIVE_CITIES).map(([id, name]) => (
              <Picker.Item label={name} value={id} key={id} />
            ))}
          </Picker>
          <View style={styles.fullFlex}>
            <Input
              keyboardType="numeric"
              maxLength={6}
              onChangeText={handleText('pincode')}
              inputContainerStyle={styles.inputStyle}
              labelStyle={styles.labelStyle}
              label="Pincode"
              value={state.pincode}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={handleSave}
          disabled={
            Object.values(state).filter(Boolean).length !==
              Object.values(state).length || apiStatus === API_STATUS.FETCHING
          }
          loading={apiStatus === API_STATUS.FETCHING}
          title="Save"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  fullFlex: {flex: 1},
  labelStyle: {fontSize: 12, marginVertical: 10},
  inputStyle: {fontSize: 14, height: 20},
  wrapper: {padding: 10},
  flexRow: {flexDirection: 'row'},
  buttonWrapper: {
    alignSelf: 'flex-end',
    width: '100%',
  },
});
