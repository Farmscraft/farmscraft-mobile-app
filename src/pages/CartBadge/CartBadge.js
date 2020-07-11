import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {isNull} from '../../helpers/helpers';

const styles = StyleSheet.create({
  bagde: {
    position: 'absolute',
    right: -6,
    top: -3,
    backgroundColor: '#008080',
    borderRadius: 6,
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  tabIcon: {
    width: 24,
    height: 24,
    margin: 5,
  },

  badgeText: {color: 'white', fontSize: 10, fontWeight: 'bold'},
});

function IconWithBadge({name, badgeCount, color, size}) {
  return (
    <View style={styles.tabIcon}>
      <Icon name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View style={styles.bagde}>
          <Text style={styles.badgeText}>{badgeCount}</Text>
        </View>
      )}
    </View>
  );
}

function CartIconWithBadge(props) {
  const {carts} = useSelector(state => state.CartReducer);

  const getBadgeCount = () => {
    let badgeCount = 0;
    if (!isNull(carts)) {
      badgeCount = Object.keys(carts).length;
    }
    return badgeCount;
  };

  return <IconWithBadge {...props} badgeCount={getBadgeCount()} />;
}

export default CartIconWithBadge;
