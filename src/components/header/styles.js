import {StyleSheet} from 'react-native';

import {colors} from '../../constants/constant';

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: colors.TOOLBAR_COLOR,
    shadowOffset: {width: 0, height: 0.5 * elevation},
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation,
  };
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.WHITE,
  },

  headerWrapper: {
    alignSelf: 'stretch',
    height: 60,
    backgroundColor: colors.TOOLBAR_COLOR,
    ...elevationShadowStyle(1),
  },

  header: {
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 59,
  },

  headerLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerCenter: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerCenterIconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  title: {
    color: colors.BLACK,
    fontSize: 18,
    alignSelf: 'stretch',
    lineHeight: 24,
    height: 24,
    width: '100%',
  },

  hitSlop: {
    top: 20,
    bottom: 20,
    left: 50,
    right: 50,
  },
  drawerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    height: 18,
    width: 18,
    alignSelf: 'center',
    marginStart: 5,
  },
  closeIcon: {
    height: 12,
    width: 12,
    marginHorizontal: 10,
    alignSelf: 'center',
  },

  searchBar: {
    height: 42,
    width: '100%',
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 4,
    shadowRadius: 24,
    shadowColor: 'rgba(0,0,0,0.1)',
    shadowOffset: {height: 0, width: 12},
    borderColor: '#e4e3e3',
  },
  wrapper: {
    height: 35,
    width: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },

  textInputContainer: {
    height: 20,
    width: '74%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },

  textInput: {
    color: '#222222',
    fontSize: 14,
    textAlign: 'left',
    alignSelf: 'center',
    paddingStart: 10,
  },
});

export default styles;
