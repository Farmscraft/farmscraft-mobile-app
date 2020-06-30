import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useSelector} from 'react-redux';
import {
  SafeAreaView,
  SectionList,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import EmptyCart from '../../components/Common/EmptyCart';
import {Text, Divider, PricingCard} from 'react-native-elements';
import {API_STATUS} from '../../constants/constant';
import {
  STATUS,
  MERCHANT,
  MERCHANT_ORDER_STATUS,
} from '../../constants/constant';

const CartCard = ({
  id,
  items = {},
  status,
  mode,
  shop,
  time = null,
  timestamp,
  isMerchant,
  orderBy = '',
}) => {
  const [orderStatus, setOrderStatus] = useState(status);
  let total = 0;

  const info = Object.values(items).map(
    ({name, brand, weight, unit, quantity, price}, index) => {
      total += quantity * price;
      if (!weight) {
        return `${index + 1}) ${name} x ${quantity} -> ${price}`;
      }
      return `${index + 1}) ${name}${
        brand ? `(${brand})` : ''
      }  (${weight} ${unit} x ${quantity} -> ${price})`;
    },
  );

  const handleUpdate = () => {
    const value = Object.values(shop)[0];
    firestore()
      .collection(Object.keys(shop)[0])
      .doc(value)
      .collection('orders')
      .doc(id)
      .set({status: orderStatus + 1}, {merge: true})
      .then(res => {
        setOrderStatus(orderStatus + 1);
      })
      .catch(err => {
        console.warn(err);
      });
  };

  return (
    <PricingCard
      containerStyle={orderStatus === 0 ? {backgroundColor: '#C0C0C0'} : {}}
      color="#4f9deb"
      title={id}
      price={`₹ ${total}`}
      info={
        !isMerchant
          ? info
          : [
              ...info,
              time
                ? `Apt Time: ${time
                    .toDate()
                    .toString()
                    .slice(0, -15)}`
                : '',
              timestamp
                ? `Order Date: ${new Date(timestamp).toDateString()}`
                : '',
              `Order By: ${orderBy}`,
            ]
      }
      infoStyle={{fontSize: 16, fontWeight: 'bold', textAlign: 'left'}}
      onButtonPress={handleUpdate}
      button={
        mode === MERCHANT && orderStatus !== 2 ? (
          {title: MERCHANT_ORDER_STATUS[orderStatus]}
        ) : (
          <View style={styles.buttonWrapper}>
            <Text style={{textAlign: 'center', color: '#fff'}}>
              {mode === MERCHANT
                ? MERCHANT_ORDER_STATUS[status]
                : STATUS[status]}
            </Text>
          </View>
        )
      }
    />
  );
};

const Orders = ({navigation, route}) => {
  const isMerchant = route.name === 'MerchantOrder';
  const {
    user: {uid, mode, shop},
    orders: {activeOrders = []},
  } = useSelector(state => ({
    user: state.user,
    orders: state.orders,
    shop: state.shop,
  }));
  const [orders, setOrders] = useState({});
  const [apiStatus, setApiStatus] = useState(API_STATUS.IDEAL);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setOrders(prevOrders => ({...activeOrders, ...prevOrders}));
  }, [activeOrders]);

  useEffect(() => {
    if (mode) {
      const activeCollection =
        mode === MERCHANT ? Object.keys(shop)[0] : 'users';
      const activeId = mode === MERCHANT ? Object.values(shop)[0] : uid;
      setApiStatus(API_STATUS.FETCHING);
      firestore()
        .collection(activeCollection)
        .doc(activeId)
        .collection('orders')
        .get()
        .then(querySnapshot => {
          const allOrders = {};
          setApiStatus(API_STATUS.IDEAL);
          querySnapshot.forEach(documentSnapshot => {
            allOrders[documentSnapshot.id] = {
              ...documentSnapshot.data(),
              orderId: documentSnapshot.id,
            };
          });
          setOrders(prevState => ({...prevState, ...allOrders}));
        })
        .catch(err => {
          setApiStatus(API_STATUS.ERROR);
          console.warn(err);
        });
    }
  }, [uid, mode, shop, refresh]);

  if (apiStatus === API_STATUS.FETCHING) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <>
      <SafeAreaView style={styles.wrapper}>
        <SectionList
          refreshing={apiStatus === API_STATUS.FETCHING}
          progressViewOffset={100}
          onRefresh={() => setRefresh(!refresh)}
          numColumns={1}
          ListEmptyComponent={() => (
            <EmptyCart apiStatus={apiStatus} navigation={navigation} />
          )}
          ItemSeparatorComponent={() => (
            <Divider style={{backgroundColor: '#f0f0f0', height: 5}} />
          )}
          sections={[
            {
              title: '',
              data: Object.entries(orders).map(([key, values]) => values),
            },
          ]}
          renderItem={({item}) => (
            <CartCard
              mode={mode}
              id={item.orderId}
              items={item.items}
              shop={shop}
              status={item.status}
              time={item.time}
              timestamp={item.timestamp}
              isMerchant={isMerchant}
              orderBy={item.orderByName}
            />
          )}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
          keyExtractor={item => item.orderId}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  mlAuto: {marginLeft: 'auto'},
  buttonWrapper: {
    backgroundColor: '#4288d7',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default Orders;
