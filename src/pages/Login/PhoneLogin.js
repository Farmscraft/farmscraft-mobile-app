import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import Banner from '../Common/banner';
import NavButton from '../Common/NavButton';

function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const [code, setCode] = useState('');

  function signInWithPhoneNumber(phoneNumber) {
    auth()
      .signInWithPhoneNumber(`+91${phoneNumber}`)
      .then(confirmation => {
        setLoading(false);
        setConfirm(confirmation);
      })
      .catch(err => {
        setLoading(false);
        console.warn(err);
      });
  }

  useEffect(() => {
    if (phone.length === 10) {
      setLoading(true);
      signInWithPhoneNumber(phone);
    }
    return () => {
      setLoading(false);
    };
  }, [phone]);

  const onPressHandler = () => {
    signInWithPhoneNumber(phone);
  };

  async function confirmCode() {
    try {
      setLoading(true);
      await confirm.confirm(code);
    } catch (error) {
      setLoading(false);
      console.log('Invalid code.', error);
    }
  }

  const handleNumber = text => {
    setPhone(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.bannerWrapper}>
        <Banner />
      </View>

      <View style={styles.phoneWrapper}>
        {confirm ? (
          <React.Fragment>
            <View style={{flex: 1}}>
              <Text style={styles.textWrapper}>Enter 6 digit OTP</Text>
              <TextInput
                maxLength={6}
                letterSpacing={10}
                style={styles.otpInput}
                onChangeText={text => setCode(text)}
                value={code}
                keyboardType="numeric"
              />
              <Text style={styles.otpText}>
                OTP has been sent to &nbsp; {phone}
              </Text>
              <View style={styles.m10}>
                <NavButton
                  title="Continue"
                  onPressHandler={confirmCode}
                  disabled={loading}
                />
              </View>
            </View>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <View>
              <Text style={styles.textWrapper}>Let's get you started</Text>
            </View>
            <View style={styles.otpWrapper}>
              <Text style={styles.countryCode}>+91</Text>
              <TextInput
                maxLength={10}
                onChangeText={handleNumber}
                value={phone}
                keyboardType="numeric"
                style={styles.input}
              />
            </View>
            <Text style={styles.m10}>We will send you OTP on this number</Text>
            <View style={styles.m10}>
              <NavButton
                title="GET OTP"
                onPressHandler={onPressHandler}
                disabled={loading}
              />
            </View>
          </React.Fragment>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column',
  },

  bannerWrapper: {
    flex: 3,
  },

  otpWrapper: {flexDirection: 'row', alignItems: 'center'},
  textWrapper: {fontSize: 24, fontWeight: 'bold', marginVertical: 20},

  phoneWrapper: {flex: 3, justifyContent: 'center', padding: 20},

  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
  m10: {
    marginTop: 10,
  },
  getOtp: {
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    backgroundColor: 'red',
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    width: '100%',
    paddingLeft: 60,
    borderColor: 'gray',
    height: 50,
  },
  countryCode: {
    alignSelf: 'center',
    marginHorizontal: 10,
    position: 'absolute',
    borderRightWidth: 1,
    paddingRight: 10,
  },
  otpText: {
    marginTop: 10,
    fontSize: 16,
    color: 'gray',
  },
  otpInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    fontSize: 24,
    height: 50,
    width: '100%',
    paddingLeft: 10,
  },
});

export default PhoneSignIn;
