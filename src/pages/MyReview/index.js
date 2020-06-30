import React, { Component } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectors } from '../../store/ratingReviews';
import { actionCreators } from '../../store/ratingReviews/actions';
import LanguageLabels from '../../Constants/LanguageLabels';
import {showAlertModal} from '../../store/alert/actions';
import { EmptyState } from '../../Common/EmptyState';
import { ColorCode } from '../../Constants/ColorConfig';
import ReviewDetailCard from './ReviewDetailCard';
import BackBtn from '../../Common/BackButton';
import { IconsPath } from '../../Assets';

let label = LanguageLabels[global.language];

class MyReview extends Component {
  constructor(props) {
    super(props);
    label = LanguageLabels[global.language];
  }

  static navigationOptions = ({ navigation }) => {
    label = LanguageLabels[global.language];
    return {
      headerTitle: label['REVIEWS']['MY_REVIEW'],
      headerLeft: <BackBtn />
    }
  };

  componentDidMount() {
    this.props.getMyReviewsRatings();
  }

  render() {
    const { data, loader, deleteReview } = this.props;
    return (
      loader ? null :
      (this.props.data && this.props.data.userReviews && this.props.data.userReviews.length > 0 ?
        <ScrollView >
          {data && data.userReviews && data.userReviews.map((item, id) => (
            <ReviewDetailCard data={item} key={id} deleteReviewfn={deleteReview} showAlertModal={this.props.showAlertModal}
            />
          ))}
     <View style={{height: 150}}/>
        </ScrollView>
        :
        <EmptyState
          IconsPath={IconsPath.reviewStar}
          titleText={label['CARD_DETAILS']['REVIEW']}
          normalText={label['CARD_DETAILS']['REVIEW_MSG']}
          imageStyle={{width: '50%',height: 220, marginTop: 70}}
        />
      )
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    
  },
});

const mapStateToProps = (store) => ({
  data: store.ratingReviewReducer.myReview,
  loader: store.ratingReviewReducer.ui.loading,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMyReviewsRatings: actionCreators.getMyReviewsRatings,
      deleteReview: actionCreators.deleteReview,
      showAlertModal: showAlertModal,
    },
    dispatch,
  )
export default connect(mapStateToProps, mapDispatchToProps)(MyReview);
