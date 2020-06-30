import React from 'react';
import {ImageBackground, View} from 'react-native';
import OfferImage from '../../Images/offers.png';

const Offers = () => {
  return <ImageBackground source={OfferImage} style={{flex: 1}} />;
};

export default Offers;
