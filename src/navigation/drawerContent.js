import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

import profileBg from '../Images/profile_bg.png';
import logoutIcon from '../Images/logout_icon.png';
import userIcon from '../Images/user.png';
import rightArrow from '../Images/angle_right.png';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import Accordion from 'react-native-collapsible/Accordion';
import _ from 'lodash';
import {drawerItems} from '../constants/constant';

const UserContainer = React.memo(({user}) => {
  return (
    <ImageBackground
      style={styles.userInfoContainer}
      source={profileBg}
      tintColor={'#b0b6c4'}
      resizeMode={'cover'}>
      <View style={styles.profileThumbWrapper}>
        <FastImage
          source={userIcon}
          style={styles.profileThumb}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.userDetailWrapper}>
        <View style={styles.userNameWrapper}>
          <Text style={styles.userName} numberOfLines={1} ellipsisMode="tail">
            {user['concernperson'] || ''}
          </Text>
        </View>
        <View style={styles.userNameWrapper}>
          <Text style={styles.userCity} numberOfLines={1} ellipsisMode="tail">
            {user['city'] || 'New Dehli'}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
});

const FooterComponent = React.memo(({onPressHandler}) => {
  return (
    <View style={styles.drawerFooter}>
      <TouchableOpacity
        onPress={() => onPressHandler()}
        style={styles.list_item_footer}
        key={'logout'}>
        <FastImage
          style={[styles.list_header_icon]}
          source={logoutIcon}
          resizeMode={FastImage.resizeMode.cover}
          tintColor={'#b0b6c4'}
        />
        <Text style={styles.list_header_title}>{'Logout'}</Text>
      </TouchableOpacity>
      <View style={styles.list_item_footer} key={'version'}>
        <Text style={styles.list_header_title}>{'VERSION 1.0.0'}</Text>
      </View>
    </View>
  );
});

function CustomDrawerContent(props) {
  const [activeSections, setActiveSection] = useState([]);
  const {state} = props;

  const translateX = Animated.interpolate(props['progress'], {
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  const setSections = sections => {
    setActiveSection(sections.includes(undefined) ? [] : sections);
  };

  const onItemTitleClick = (section, content) => {
    let route = section['route'];
    if (content) {
      route = content['route'];
      props.navigation.navigate(route);
    } else {
      props.navigation.navigate(route);
    }
  };

  const handleLogout = () => {
    props.logout();
  };

  const renderHeader = (section, index, isActive) => {
    if (section.contents && section.contents.length) {
      return (
        <View style={styles.list_item_header} key={section.label}>
          <FastImage
            style={[styles.list_header_icon]}
            source={section.icon}
            resizeMode={FastImage.resizeMode.cover}
            tintColor={'#b0b6c4'}
          />
          <Text style={styles.list_header_title}>{section.label}</Text>

          <FastImage
            style={[styles.list_header_icon]}
            source={rightArrow}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      );
    }
    return (
      <TouchableOpacity
        style={styles.list_item_header}
        key={section.label}
        onPress={() => onItemTitleClick(section)}>
        <FastImage
          style={[styles.list_header_icon]}
          source={section.icon}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.list_header_title}>{section.label}</Text>
        <FastImage
          style={[styles.list_header_icon]}
          source={rightArrow}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    );
  };

  const renderContent = section => {
    const contents = section.contents;

    if (contents && contents.length) {
      return contents.map(content => {
        return (
          <View key={content.label} style={styles.list_item_sub_header}>
            <TouchableOpacity
              style={styles.subItemTitleView}
              onPress={() => onItemTitleClick(section, content)}>
              <Text style={styles.list_sub_header_title}>{content.label}</Text>
            </TouchableOpacity>
            <View style={styles.subItemCountView}>
              <Text
                style={[styles.list_sub_header_title, {textAlign: 'right'}]}>
                {content.total_count}
              </Text>
            </View>
          </View>
        );
      });
    }
    return null;
  };

  const isItemFocused = () => {
    let activeIndex = 0;
    _.forEach(state.routes, (route, index) => {
      const isFocused = state.index === index;
      if (isFocused) {
        activeIndex = index;
      }
    });
  };

  const renderExpandableList = () => {
    return (
      <View style={styles.contentContainer}>
        {drawerItems.length ? (
          <Accordion
            sections={drawerItems}
            activeSections={activeSections}
            renderHeader={renderHeader}
            renderContent={renderContent}
            underlayColor={'white'}
            onChange={setSections}
            touchableComponent={props => <TouchableOpacity {...props} />}
          />
        ) : null}
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView
        style={styles.mainContainer}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <UserContainer user={props['userDetail'] || {}} />
        <DrawerContentScrollView {...props}>
          <Animated.View style={{transform: [{translateX}]}}>
            {renderExpandableList()}
          </Animated.View>
        </DrawerContentScrollView>
        <FooterComponent onPressHandler={handleLogout} />
      </SafeAreaView>
    </View>
  );
}

export default CustomDrawerContent;
