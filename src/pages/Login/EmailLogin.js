import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Button, Input} from 'react-native-elements';
import {View} from 'react-native';
import auth from '@react-native-firebase/auth';
import {validateEmail} from '../../helpers/validators';

const EmailLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setError(prevState => ({
      ...prevState,
      email: !validateEmail(email),
    }));
  }, [email]);

  useEffect(() => {
    setError(prevState => ({
      ...prevState,
      password: password.length < 6,
    }));
  }, [password]);

  const handleSubmit = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.warn('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.warn('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.warn('That email address is invalid!');
        }

        console.warn(error);
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
      <Input
        onChangeText={text => setEmail(text)}
        leftIcon={<Icon name="email" size={24} />}
        label="Your Email Address"
        placeholder="email@address.com"
        errorStyle={{color: 'red'}}
        errorMessage={email && error.email ? 'Please enter valid email' : ''}
      />

      <Input
        leftIcon={<Icon name="lock" size={24} />}
        onChangeText={text => setPassword(text)}
        label="Password"
        placeholder="Password"
        secureTextEntry={true}
        errorMessage={password && error.password ? 'Min password 6 digit' : ''}
      />
      <Button
        buttonStyle={{
          width: '50%',
          alignSelf: 'center',
          borderRadius: 20,
        }}
        onPress={handleSubmit}
        title="Submit"
      />
    </View>
  );
};

export default EmailLogin;
