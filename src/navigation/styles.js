import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  list_item_header: {
    flex: 1,
    height: 47,
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  list_item_sub_header: {
    flex: 1,
    height: 47,
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  list_header_title: {
    flex: 1,
    lineHeight: 18,
    fontSize: 16,
    marginLeft: 10,
    color: '#252525',
    fontWeight: '400',
  },

  list_header_icon: {
    height: 16,
    width: 16,
  },

  userInfoContainer: {
    flexDirection: 'row',
    padding: 25,
    height: 100,
    width: '100%',
    backgroundColor: '#b0b6c4',
  },

  profileThumbWrapper: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileThumb: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'grey',
  },

  userDetailWrapper: {
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  userNameWrapper: {
    height: 25,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  userName: {
    fontSize: 18,
    color: '#2f2f4d',
    fontWeight: '600',
  },

  userCity: {
    fontSize: 18,
    color: '#555',
  },

  list_sub_header_title: {
    flex: 1,
    lineHeight: 18,
    fontSize: 16,
    color: '#252525',
    fontWeight: '400',
    textAlign: 'left',
  },

  subItemTitleView: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 25,
  },

  subItemCountView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  drawerFooter: {
    height: 100,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,.2)',
    width: '100%',
  },

  list_item_footer: {
    flex: 1,
    height: 47,
    flexDirection: 'row',
    marginHorizontal: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
