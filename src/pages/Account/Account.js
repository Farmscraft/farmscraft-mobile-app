import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Text, Avatar} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {validateEmail} from '../../helpers/validators';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {MAP_ADDRESS} from '../../constants/constant';
import {EDIT_PROFILE} from '../../constants/constant';
import avatar from '../../Images/avatar.png';
import {useFocusEffect} from '@react-navigation/native';
import {accountItems} from '../../constants/constant';

const ProfileComponent = ({onPress, user}) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.avatarWrapper}>
        <Avatar size="large" rounded source={avatar} />
      </View>
      <View style={styles.profileDetailWrapper}>
        <View style={styles.editIconWrapper}>
          <TouchableOpacity onPress={onPress} style={{flexDirection: 'row'}}>
            <Icon
              style={{alignSelf: 'flex-start'}}
              name="edit"
              size={18}
              color="#fff"
            />
          </TouchableOpacity>
        </View>
        <View style={{height: 80, marginHorizontal: 20}}>
          <View style={styles.nameWraper}>
            <Text style={styles.name}>
              {user['name'] || 'Rabindra Chhanchan'}
            </Text>
          </View>
          <View style={styles.nameWraper}>
            <Text style={styles.number}>{user['mob'] || '9556663114'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Item = ({item, onPress}) => {
  const {key, title, subTitle, icon} = item;
  return (
    <TouchableOpacity
      style={styles.item}
      key={key}
      onPress={() => onPress(item)}>
      <View style={styles.iconWrapper}>
        <Icon name={icon} size={18} color={'grey'} />
      </View>
      <View style={styles.centerItem}>
        <View style={{height: 20}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={{height: 30}}>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </View>
      <View style={styles.iconWrapper}>
        <Icon name={'chevron-right'} size={24} color={'grey'} />
      </View>
    </TouchableOpacity>
  );
};

const Account = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate(EDIT_PROFILE);
  };

  const onItemPressHandler = () => {
    navigation.navigate(EDIT_PROFILE);
  };

  return (
    <ScrollView>
      <View style={styles.fullFlex}>
        <ProfileComponent
          user={{name: 'Rabindra Chhanchan', mob: '9556663114'}}
          onPress={onPressHandler}
        />
        <View style={{marginVertical: 20}}>
          {accountItems.map(item => (
            <Item item={item} onPress={onItemPressHandler} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

// const [state, setState] = useState(initialState);
//   const [allAddress, setAllAddress] = useState({});
//   const [errorState, setErrorState] = useState({
//     email: false,
//   });
//   const {uid, phoneNumber, address} = useSelector(state => state.user);

//   useFocusEffect(() => {
//     if (address) {
//       setAllAddress(address);
//     }
//   }, [address]);

//   useEffect(() => {
//     setErrorState(prevState => ({
//       ...prevState,
//       email: !validateEmail(state.email),
//     }));
//   }, [state.email]);

// const {houseNo, street, landmark, area, city, pincode} = allAddress;

// <View style={{flex: 2}}>
// <View style={{margin: 10}}>
//   {!Boolean(Object.keys(allAddress).length) ? (
//     <Button
//       title="Add Address"
//       onPress={() =>
//         navigation.navigate(MAP_ADDRESS, {
//           id: undefined,
//           address: undefined,
//         })
//       }
//       containerStyle={{marginVertical: 10}}
//     />
//   ) : (
//     <TouchableOpacity
//       style={styles.wrapper}
//       onPress={() =>
//         navigation.navigate(MAP_ADDRESS, {
//           id: Object.keys(address)[0],
//           address: {
//             houseNo,
//             street,
//             landmark,
//             area,
//             city,
//             pincode,
//           },
//         })
//       }>
//       <View style={styles.addressWrapper}>
//         <Icon name="edit-location" size={24} />
//         <Text style={styles.addressText} numberOfLines={1}>
//           {houseNo}&nbsp;
//           {street}&nbsp; {area}&nbsp;
//           {landmark}&nbsp;
//           {city}&nbsp;
//           {pincode}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   )}
// </View>
// </View>

const styles = StyleSheet.create({
  fullFlex: {
    flex: 1,
    margin: 10,
  },

  profileContainer: {
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderColor: 'black',
    borderRadius: 4,
  },

  avatarWrapper: {
    height: 80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  profileDetailWrapper: {
    height: 120,
    margin: 10,
    flex: 3,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },

  editIconWrapper: {
    flexDirection: 'row-reverse',
    height: 20,
    marginStart: 10,
    alignSelf: 'flex-end',
  },

  nameWraper: {
    height: 20,
    marginBottom: 10,
  },

  name: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },

  number: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 60,
    borderBottomColor: '#e4e3e3',
    borderBottomWidth: 1,
  },

  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 60,
  },

  centerItem: {
    height: 50,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: 5,
  },

  title: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'roboto',
  },

  subTitle: {
    color: 'black',
    fontSize: 10,
    fontFamily: 'roboto',
  },

  flexRow: {
    flexDirection: 'row',
  },
  wrapperStyle: {padding: 10},
  inputStyle: {fontSize: 12, height: 12},
  labelStyle: {
    fontSize: 12,
  },
  errorStyle: {color: 'red'},
  buttonWrapper: {position: 'absolute', bottom: 0, width: '100%'},
  addressWrapper: {
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    flexDirection: 'row',
    padding: 10,
  },
  addressText: {fontSize: 18, marginLeft: 10, paddingRight: 10},
  wrapper: {
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
  },

  upparWrapper: {backgroundColor: '#2F95D6', flex: 1.5, padding: 20},
  edit: {color: '#fff', fontSize: 14, fontWeight: 'bold'},
  // avatarWrapper: {justifyContent: 'center', flexDirection: 'row'},
});

export default Account;
