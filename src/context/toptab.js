import React, {useEffect, createContext, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import {addAddress} from '../redux/actions/user';

export const topTabContext = createContext({});
const {Provider} = topTabContext;

const TopTapProvider = ({children}) => {
  const uid = 'guptaji';
  const id = 'guptaji';
  const shopType = 'salon';

  // const {
  //   user: {activeShop, uid :"3ac68afc-c605-48d3-a4f8-fbd91aa97f63"},
  //   shop: {id : "guptaji", shopType: "salon"},
  // } = useSelector(state => ({
  //   user: state.user,
  //   shop: state.shop,
  // }));

  const dispatch = useDispatch();
  const [state, setState] = useState({});

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(uid)
      .get()
      .then(querySnapshot => {
        dispatch(addAddress({address: querySnapshot.data().address}));
      })
      .catch(err => {
        console.warn(err);
      });
  }, [uid]);

  useEffect(() => {
    let result = {};
    const shopRef = firestore()
      .collection(shopType)
      .doc(id);

    shopRef
      .collection('category')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          result[documentSnapshot.id] = documentSnapshot.data();
        });
        setState(result);
      });
  }, [id, shopType]);

  return <Provider value={state}>{children}</Provider>;
};

export default TopTapProvider;
