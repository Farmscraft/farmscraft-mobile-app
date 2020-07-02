import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import VirtualizedListExample from '../../components/VirtualizedList/List';
import Icon from 'react-native-vector-icons/MaterialIcons';

const data = [
  {
    id: 120,
    name: 'ABC',
    image: '',
    mrpPrice: 120,
    salePrice: 100,
    discount: '10%',
    weight: '100',
    unit: 'gram',
    price: 100,
  },
  {
    id: 121,
    name: 'ABC',
    image: '',
    mrpPrice: 120,
    salePrice: 100,
    discount: '10%',
    weight: '100',
    unit: 'gram',
    price: 100,
  },
  {
    id: 122,
    name: 'ABC',
    image: '',
    mrpPrice: 120,
    salePrice: 100,
    discount: '10%',
    weight: '100',
    unit: 'gram',
    price: 100,
  },
  {
    id: 123,
    name: 'ABC',
    image: '',
    mrpPrice: 120,
    salePrice: 100,
    discount: '10%',
    weight: '100',
    unit: 'gram',
    price: 100,
  },
];

const styles = {
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
};

const ImageContainer = ({
  variantImg = 'https://dummyimage.com/80x80/000/fff&text=No+Image',
  category = 'Women',
}) => {
  return (
    <View style={styles.productItemImageContainer}>
      <ImageBackground source={{uri: `${variantImg}`}} style={styles.image}>
        <View style={styles.productCategoryWrapper}>
          <Text style={styles.categoryText}>{`${category}`}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const MoreVariant = ({variant = 2}) => {
  return (
    <View style={styles.moreVariantWrapper}>
      <Text style={styles.variantText}>{`${variant - 1} more variant`}</Text>
    </View>
  );
};

const TitleContainer = ({title = 'Title', subTitle = 'SubTitle'}) => {
  return (
    <View style={styles.productTitleContainer}>
      <View style={styles.titleWrapper}>
        <View style={styles.titleTextWrapper}>
          <Text style={styles.titleText}>{`${title}`}</Text>
        </View>
        <View style={styles.favWrapper}>
          <Icon name={'favorite'} size={24} color={'#989898'} />
        </View>
      </View>
      <View style={styles.subTextWrapper}>
        <Text style={styles.subText}>{`${subTitle}`}</Text>
      </View>
    </View>
  );
};

const Rating = ({rating = '3.5', ratedBy = 10}) => {
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

const MOQContainer = ({type, options, value = '50', quantifier = 'pcs'}) => {
  return (
    <View style={styles.moqContainer}>
      <Text style={styles.moqText}>{`${value} ${quantifier}`}</Text>
    </View>
  );
};

const PriceContainer = ({price = '3500', mrp = '4000'}) => {
  return (
    <View style={styles.priceContainerWrapper}>
      <Text style={styles.priceText}>{`Price: Rs${price}`}</Text>
      <Text style={styles.mrpText}>{`MRP: Rs${mrp}`}</Text>
    </View>
  );
};

const AddContainer = ({quantity, onPressHandler}) => {
  return (
    <View style={styles.addItemContainer}>
      <View style={styles.addBox}>
        <Text style={styles.addText}>{'ADD'}</Text>
      </View>
    </View>
  );
};

const ProductItem = () => {
  return (
    <View style={styles.productItem}>
      <View style={styles.productItemImageWrapper}>
        <ImageContainer />
        <MoreVariant />
      </View>

      <View style={styles.productItemDetailWrapper}>
        <TitleContainer />
        <Rating />
        <MOQContainer />
        <PriceContainer />
        <AddContainer />
      </View>
    </View>
  );
};

const ProductList = ({navigation, route}) => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        ListEmptyComponent={() => (
          <ActivityIndicator size="large" color="red" />
        )}
        data={data}
        renderItem={({item, index}) => (
          <ProductItem item={item} index={index} />
        )}
        keyExtractor={item => item.variadID}
      />
      <VirtualizedListExample items={data} />
    </View>
  );
};

export default ProductList;
