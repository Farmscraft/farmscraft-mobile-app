import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, Linking} from 'react-native';
import {ListItem} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {updateShop} from '../../redux/actions/shop';
import firestore from '@react-native-firebase/firestore';
import {API_STATUS} from '../../constants/constant';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {callNumber} from '../../helpers/helpers.js';

const AdminList = [
  {
    ownerFirstName: 'Admin',
    ownerLastName: '',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Kundleswarward',
    id: 'admin',
    navigation: 'AdminNavigation',
  },
];

const list = [
  {
    name: 'GuptaJi',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Kundleswarward',
    id: 'guptaji',
    navigation: 'BottomNavigation',
  },
  {
    name: 'Rathiji',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Kundleswarward',
    id: 'rathiji',
    navigation: 'BottomNavigation',
  },
];

const SelectShop = ({navigation, route}) => {
  const {
    params: {type},
  } = route;
  const dispatch = useDispatch();
  const {isAdmin} = useSelector(state => state.user);
  const [salon, setSalon] = useState({});
  const [apiStatus, setApiStatus] = useState(API_STATUS.IDEAL);

  const handleNavigation = ({type, id}) => async () => {
    await dispatch(
      updateShop({
        id,
        shopType: type,
      }),
    );
    navigation.navigate('home', {
      type,
      id,
    });
  };

  useEffect(() => {
    const shops = {};
    setApiStatus(API_STATUS.FETCHING);
    firestore()
      .collection(type)
      .get()
      .then(querySnapshot => {
        setApiStatus(API_STATUS.IDEAL);
        querySnapshot.forEach(documentSnapshot => {
          shops[documentSnapshot.id] = documentSnapshot.data().basicInfo;
        });
        if (!isAdmin) {
          delete shops.testing;
        }
        setSalon(shops);
      })
      .catch(err => {
        console.warn(err);
        setApiStatus(API_STATUS.ERROR);
      });
  }, [type, isAdmin]);

  const handlePhone = phone => {
    callNumber(phone);
  };

  if (apiStatus === API_STATUS.FETCHING) {
    return <ActivityIndicator size="large" color="red" />;
  }

  return (
    <View>
      {Object.entries(salon).map(([id, details]) => (
        <ListItem
          onPress={handleNavigation({type, id})}
          containerStyle={{padding: 20}}
          key={id}
          leftAvatar={{source: {uri: details.image}}}
          title={`${details.ownerFirstName} ${details.ownerLastName}`}
          subtitle={details.address}
          bottomDivider
          rightIcon={
            <Icon
              onPress={handlePhone.bind(null, details.phone)}
              name="phone"
              size={24}
              color="#2F95D6"
            />
          }
        />
      ))}
    </View>
  );
};

export default SelectShop;
