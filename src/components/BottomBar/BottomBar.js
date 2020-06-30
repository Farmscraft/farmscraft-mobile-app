import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button, Overlay} from 'react-native-elements';
import BlackCart from '../../Images/blackcart.svg';
import {useSelector, useDispatch} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import {clearCart} from '../../redux/actions/cart';
import {CART, HOME, API_STATUS, ADDRESS} from '../../constants/constant';
import {addOrders} from '../../redux/actions/orders';
import {formatAMPM, formatLocalDate} from '../../helpers/dataandtime';
import DateTimePicker from '@react-native-community/datetimepicker';

const BottomBar = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [orderStatus, setOrderStatus] = useState(API_STATUS.IDEAL);
  const [visible, setVisible] = useState('');
  const [orderId, setOrderId] = useState('');
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const {
    cart,
    user: {uid, address, info: {fname = '', lname = ''} = {}},
    shop: {id, shopType},
  } = useSelector(state => state);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  if (!Object.keys(cart).length) {
    return null;
  }

  const toggleOverlay = () => {
    setVisible(!visible);
    if (!address) {
      navigation.navigate(ADDRESS);
    } else {
      dispatch(clearCart());
      setOrderId('');
      navigation.navigate(HOME);
    }
  };

  const placeOrder = () => {
    if (!address) {
      setVisible(true);
      return;
    }
    setOrderStatus(API_STATUS.FETCHING);
    const orderId = String(Date.now());
    const shopRef = firestore()
      .collection(shopType)
      .doc(id)
      .collection('orders')
      .doc(orderId);
    const userRef = firestore()
      .collection('users')
      .doc(uid)
      .collection('orders')
      .doc(orderId);

    Promise.all([
      shopRef.set({
        items: cart,
        timestamp: Date.now(),
        status: 0,
        orderBy: uid,
        time: date,
        orderByName: `${fname} ${lname}`,
      }),
      userRef.set({
        items: cart,
        timestamp: Date.now(),
        status: 0,
        shopId: id,
        time: date,
      }),
    ])
      .then(() => {
        setOrderStatus(API_STATUS.IDEAL);
        setVisible(true);
        setOrderId(orderId);
        dispatch(
          addOrders({orderId: orderId, status: 0, items: Object.values(cart)}),
        );
      })
      .catch(err => {
        setOrderStatus(API_STATUS.ERROR);
      });
  };

  const getTotal = () => {
    return Object.values(cart).reduce((acc, current) => {
      return acc + Number(current.price) * Number(current.quantity);
    }, 0);
  };

  return (
    <>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          minimumDate={Date.now()}
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
      <Overlay isVisible={Boolean(visible)} onBackdropPress={toggleOverlay}>
        <View style={{padding: 20, borderRadius: 20}}>
          {!address ? (
            <Text h4>Insert the address to place the order</Text>
          ) : (
            <>
              <Text h4>Order is placed successfully</Text>
              <Text h6>Order Id: {orderId}</Text>
            </>
          )}
        </View>
      </Overlay>
      {route.name === CART && (
        <View style={{padding: 10}}>
          <TouchableOpacity onPress={showDatepicker} style={styles.dateWrapper}>
            <Text style={styles.dateText}>
              {date ? formatLocalDate(new Date(date)) : 'Select Date'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={showTimepicker} style={styles.dateWrapper}>
            <Text style={styles.dateText}>
              {date ? formatAMPM(new Date(date)) : 'Select Time'}
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.bottomBar}>
        <View style={styles.cartWrapper}>
          <BlackCart height={24} width={24} />
        </View>
        <View>
          <Text style={styles.white}>₹{getTotal()}</Text>
          <Text style={styles.white}>{Object.keys(cart).length} item</Text>
        </View>
        <View style={styles.viewCart}>
          <Button
            containerStyle={styles.touchable}
            buttonStyle={styles.buttonStyle}
            loadingStyle={styles.loadingStyle}
            loading={orderStatus === API_STATUS.FETCHING}
            disabled={orderStatus === API_STATUS.FETCHING}
            onPress={() =>
              route.name === CART ? placeOrder() : navigation.navigate(CART)
            }
            title={route.name === CART ? 'Place Order' : 'View Cart'}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  touchable: {
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  loadingStyle: {
    width: 80,
  },
  buttonStyle: {
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  white: {
    color: '#fff',
  },
  bottomBar: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ed5a6a',
  },
  viewCart: {marginLeft: 'auto'},
  cartWrapper: {marginLeft: 20, marginRight: 20},
  text: {color: '#ed5a6a', fontWeight: 'bold'},
  dateText: {
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
  dateWrapper: {
    backgroundColor: '#4984B8',
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
});

export default BottomBar;
