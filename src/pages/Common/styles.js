import {StyleSheet, Dimensions} from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
  },
  wrapper: {},

  dot: {
    backgroundColor: '#CFD3EC',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 7,
    marginRight: 7,
  },

  activeDot: {
    backgroundColor: '#6574DB',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 7,
    marginRight: 7,
  },

  slideIconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  slideIconSize: {
    width: DEVICE_WIDTH,
    height: 230,
  },

  navContainer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a0a0',
    borderRadius: 4,
    width: DEVICE_WIDTH * 0.9,
  },
  buttonText: {
    fontSize: 14,
    backgroundColor: 'transparent',
    paddingStart: 15,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default styles;
