import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {isNull} from '../../helpers/helpers';

const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 180,
    width: '100%',
    backgroundColor: 'white',
    borderBottomColor: '#c8c8c8c8',
    borderBottomWidth: 1,
  },
  productItemImageWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
    width: 130,
    borderRightWidth: 1,
    borderRightColor: '#c8c8c8c8',
    paddingVertical: 5,
  },

  productItemDetailWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 180,
    flex: 1,
    paddingHorizontal: 5,
  },
  productItemImageContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 145,
    width: 130,
  },
  image: {height: 145, width: 120, alignSelf: 'center'},
  productCategoryWrapper: {
    height: 20,
    width: 60,
    borderColor: '#ff7961',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#ff7961',
    margin: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
  },
  moreVariantWrapper: {
    height: 30,
    width: 128,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
  },
  variantText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },

  productTitleContainer: {
    height: 60,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    paddingEnd: 10,
  },
  titleWrapper: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  titleTextWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '80%',
  },
  favWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '20%',
  },

  subTextWrapper: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  // #E8E8E8

  titleText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subText: {
    color: 'black',
    fontSize: 12,
    textAlign: 'center',
  },

  ratingContainer: {
    height: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  ratingBox: {
    height: 18,
    width: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: '#b2dfdb',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#b2dfdb',
  },
  ratingText: {
    fontSize: 12,
    color: '#00796b',
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  ratedBy: {
    fontSize: 12,
    color: '#989898',
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  moqContainer: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  moqText: {
    fontSize: 12,
    color: '#989898',
    paddingHorizontal: 5,
  },

  priceContainerWrapper: {
    height: 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  priceText: {
    fontSize: 12,
    color: 'black',
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  mrpText: {
    fontSize: 12,
    color: '#989898',
    paddingHorizontal: 5,
    textAlign: 'center',
  },
  addItemContainer: {
    height: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  addBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 30,
    borderColor: '#00a0a0',
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#00a0a0',
    alignSelf: 'center',
  },
  addText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const ImageContainer = ({
  defImage = 'https://dummyimage.com/80x80/000/fff&text=No+Image',
  category,
}) => {
  return (
    <View style={styles.productItemImageContainer}>
      <ImageBackground source={{uri: `${defImage}`}} style={styles.image}>
        {!isNull(category) ? (
          <View style={styles.productCategoryWrapper}>
            <Text style={styles.categoryText}>{`${category}`}</Text>
          </View>
        ) : null}
      </ImageBackground>
    </View>
  );
};

const MoreVariant = ({availabeVariant}) => {
  return (
    <View style={styles.moreVariantWrapper}>
      {availabeVariant > 1 ? (
        <Text style={styles.variantText}>{`${availabeVariant -
          1} more variant`}</Text>
      ) : null}
    </View>
  );
};

const TitleContainer = ({title, subTitle, markedFavorite}) => {
  return (
    <View style={styles.productTitleContainer}>
      <View style={styles.titleWrapper}>
        <View style={styles.titleTextWrapper}>
          <Text style={styles.titleText}>{`${title}`}</Text>
        </View>
        <TouchableOpacity style={styles.favWrapper}>
          <Icon
            name={'favorite'}
            size={24}
            color={markedFavorite ? '#EA3C53' : '#989898'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.subTextWrapper}>
        <Text style={styles.subText}>{`${subTitle}`}</Text>
      </View>
    </View>
  );
};

const Rating = ({rating, ratedBy}) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.ratingBox}>
        <Text style={styles.ratingText}>{`${rating}`}</Text>
        <Icon name="star" color={'#00796b'} />
      </View>
      <Text style={styles.ratedBy}>{`${ratedBy} Ratings`}</Text>
    </View>
  );
};

const MOQContainer = ({type, options, moq, quantifier}) => {
  return (
    <View style={styles.moqContainer}>
      <Text style={styles.moqText}>{`${moq} ${quantifier}`}</Text>
    </View>
  );
};

const PriceContainer = ({fcPrice, mrpPrice}) => {
  return (
    <View style={styles.priceContainerWrapper}>
      <Text style={styles.priceText}>{`Price: Rs${fcPrice}`}</Text>
      <Text style={styles.mrpText}>{`MRP: Rs${mrpPrice}`}</Text>
    </View>
  );
};

const RemoveContainer = ({removeItem, item}) => {
  return (
    <TouchableOpacity
      style={styles.addItemContainer}
      onPress={() => removeItem(item, 0)}>
      <View style={styles.addBox}>
        <Text style={styles.addText}>{'Remove'}</Text>
      </View>
    </TouchableOpacity>
  );
};

const WishListCard = props => {
  const {item, removeItem, onPress} = props;

  return (
    <View style={styles.productItem}>
      <TouchableOpacity
        style={styles.productItem}
        onPress={() => onPress(item)}>
        <View style={styles.productItemImageWrapper}>
          <ImageContainer defImage={item.defImage} category={item.category} />
          <MoreVariant availabeVariant={item.category} />
        </View>

        <View style={styles.productItemDetailWrapper}>
          <TitleContainer
            title={item.title}
            subTitle={item.subTitle}
            item={item}
            markedFavorite={true}
          />
          <Rating rating={item.rating} ratedBy={item.ratedBy} />
          <MOQContainer
            type={item.moqType || ''}
            options={item.moqOptions || []}
            moq={item.moq}
            quantifier={item.unit}
          />
          <PriceContainer fcPrice={item.fcPrice} mrpPrice={item.mrpPrice} />
          <RemoveContainer item={item} removeItem={removeItem} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default WishListCard;
