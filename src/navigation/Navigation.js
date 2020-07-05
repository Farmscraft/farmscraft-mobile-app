import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import LoginNavigation from '../navigation/LoginStackNavigation';
import AuthNavigation from '../navigation/AuthNavigation';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {addUser} from '../redux/actions/user';
import {ADMIN_IDS} from '../constants/constant';

import Launch from '../pages/Login/launch';

const Navigation = ({navigation}) => {
  const {shop = null, uid} = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onAuthStateChanged(user) {
    if (user) {
      const userData = {};
      user.providerData.forEach(function(profile) {
        userData.providerId = profile.providerId;
        userData.uid = user.uid;
        userData.displayName = profile.displayName;
        userData.phoneNumber = profile.phoneNumber;
        userData.email = profile.email;
        userData.photoURL = profile.photoURL;
      });

      firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(querySnapshot => {
          dispatch(
            addUser({
              ...querySnapshot.data(),
              ...userData,
              isAdmin: ADMIN_IDS.includes(user._user.uid),
            }),
          );
        })
        .catch(err => {
          console.warn(err);
        });
    } else {
      dispatch(
        addUser({
          uid: null,
          isAdmin: null,
        }),
      );
    }
  }

  if (uid === undefined) {
    return <Launch />;
  }

  return (
    <NavigationContainer>
      {!uid ? <LoginNavigation /> : <AuthNavigation shop={shop} />}
    </NavigationContainer>
  );
};

export default Navigation;
