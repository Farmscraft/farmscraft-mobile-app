import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {addInfo} from '../../firebase/firebase';
import {useSelector, useDispatch} from 'react-redux';
import {addInfoAction} from '../../redux/actions/user';

const initState = {
  lname: '',
  fname: '',
  email: '',
};

const EditProfile = ({navigation}) => {
  const [state, setState] = useState(initState);
  const dispatch = useDispatch();
  const {uid, phoneNumber, info} = useSelector(state => state.user);

  useEffect(() => {
    if (info) {
      setState(info);
    }
  }, [info]);

  const handleTextChange = name => text => {
    setState(prevState => ({
      ...prevState,
      [name]: text,
    }));
  };

  const handleSave = () => {
    addInfo({uid, info: state}).then(() => {
      ToastAndroid.show('Info Saved', ToastAndroid.SHORT);
      dispatch(addInfoAction(state));
      navigation.goBack();
    });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.otpWrapper}>
            <Icon name="account-circle" size={28} color="#2F95D6" />
            <TextInput
              value={state.fname}
              placeholder="First Name"
              style={styles.textSize}
              onChangeText={handleTextChange('fname')}
            />
          </View>
          <View style={styles.otpWrapper}>
            <Icon name="account-circle" size={28} color="#2F95D6" />
            <TextInput
              value={state.lname}
              placeholder="Last Name"
              style={styles.textSize}
              onChangeText={handleTextChange('lname')}
            />
          </View>
          <View style={styles.otpWrapper}>
            <Icon name="account-circle" size={28} color="#2F95D6" />
            <TextInput
              value={state.email}
              placeholder="Email"
              style={styles.textSize}
              type="email"
              onChangeText={handleTextChange('email')}
            />
          </View>
          <View style={styles.otpWrapper}>
            <Icon name="account-circle" size={28} color="#2F95D6" />
            <TextInput
              value={phoneNumber}
              placeholder="Mobile"
              style={styles.textSize}
              editable={false}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonWrapper}>
        <Button
          onPress={handleSave}
          disabled={
            Object.values(state).filter(Boolean).length !==
            Object.values(state).length
          }
          title="Save"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, padding: 20},
  otpWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#D3D3D3',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  countryCode: {
    alignSelf: 'center',
    marginHorizontal: 10,
    position: 'absolute',
    borderRightWidth: 1,
    paddingRight: 10,
  },
  textSize: {
    fontSize: 20,
    width: '100%',
    paddingRight: 20,
    paddingLeft: 10,
    fontFamily: 'Noto Sans',
  },
  buttonWrapper: {
    alignSelf: 'flex-end',
    width: '100%',
  },
});

export default EditProfile;
