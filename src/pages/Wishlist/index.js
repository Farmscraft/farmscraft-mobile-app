import React, {Component} from 'react';
import MyWishlist from './MyWishlist';

class Wishlist extends Component {
  constructor(props) {
    super(props);
  }

  // static navigationOptions = ({navigation}) => {
  //   return {
  //     headerTitle:
  //       Platform.OS === 'android' ? (
  //         <View style={{width: '100%', alignItems: 'center'}}>
  //           <Text fs={18} fw="fw-b">
  //             {label['WISHLIST']['MY_WISHLIST']}
  //           </Text>
  //         </View>
  //       ) : (
  //         label['WISHLIST']['MY_WISHLIST']
  //       ),

  //     headerLeft:
  //       navigation.state.params &&
  //       navigation.state.params.navigationFrom === 'app' &&
  //       Platform.OS === 'ios' ? (
  //         <BackBtn />
  //       ) : navigation.state.params && navigation.state.params.hasBackButton ? (
  //         <BackBtn />
  //       ) : global.hasMenuButton ? (
  //         <MenuButton />
  //       ) : global.hasBackButton ? (
  //         <BackBtn />
  //       ) : (
  //         <BackBtn />
  //       ),

  //     headerRight:
  //       Platform.OS === 'android' ? <View style={{width: 40}} /> : null,
  //   };
  // };

  componentWillMount() {}
  componentDidMount() {
    const {setParams} = this.props.navigation;

    setParams({
      navigationFrom:
        this.props.navigation.state.params &&
        this.props.navigation.state.params.navigationFrom
          ? this.props.navigation.state.params.navigationFrom
          : 'app',
      pageType: this.props.screenProps.pageType,
    });
  }

  render() {
    const {data, screenProps} = this.props;
    return <MyWishlist data={data} screenProps={screenProps} />;
  }
}

// const mapStateToProps = store => ({
//   data: selectors.getWishListResults(store.wishlistReducer.getWishlistResult),
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       getWishlist: actionCreators.getWishlist,
//     },
//     dispatch,
//   );

export default Wishlist;
