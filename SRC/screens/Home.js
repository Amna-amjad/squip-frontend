import React from 'react';
import {Text, View} from 'react-native';
import Drawernavigator from '../navigation/DrawerNavigation';
// import styles from '../styling/NativeStyling';

function HomeScreen() {
  return (
    <View style={{flex: 1}}>
      <Drawernavigator/>
    </View>
  );
}

export default HomeScreen;
