import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import backArrow from '../../Images/back_arrow.png';
import searchIcon from '../../Images/search.png';
import menuIcon from '../../Images/menu.png';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const CustomHeader = React.memo(props => {
  const renderHeaderLeftIcon = () => {
    return (
      <TouchableOpacity
        style={styles.headerLeft}
        onPress={() => props.navigation.goBack()}
        hitSlop={styles.hitSlop}>
        <FastImage
          source={backArrow}
          style={styles.icon}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    );
  };

  const renderHeaderLeftDrawer = () => {
    return (
      <View style={styles.headerLeft}>
        <TouchableOpacity
          style={styles.drawerWrapper}
          onPress={() => props.navigation.openDrawer()}
          hitSlop={styles.hitSlop}>
          <FastImage
            source={menuIcon}
            resizeMode={FastImage.resizeMode.contain}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const getTitle = ({title}) => {
    return (
      <View style={styles.headerCenter}>
        <Text
          style={styles.title}
          adjustsFontSizeToFit={true}
          minimumFontScale={0.1}
          numberOfLines={1}
          ellipsizeMode={'tail'}>
          {title}
        </Text>
      </View>
    );
  };

  const renderHeaderCenter = title => {
    return getTitle({title});
  };

  const renderSearchIcon = () => {
    return (
      <TouchableOpacity
        style={styles.headerCenterIconView}
        onPress={() => console.log('press')}>
        <FastImage
          source={searchIcon}
          style={styles.icon}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.header}>
        {props.backIcon ? renderHeaderLeftIcon() : renderHeaderLeftDrawer()}
        {props.title ? renderHeaderCenter(props.title) : null}
        {props.searchIcon ? renderSearchIcon() : null}
      </View>
    </View>
  );
});

export default CustomHeader;
