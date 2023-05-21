import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {create} from 'react-test-renderer';
import styles from '../Styling/ReactNativeStyling';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Fontawesome from 'react-native-vector-icons/Fontawesome';

const Header = () => {
  return (
    <View style={stylesnichy.main}>
      <View style={[styles.justifyContentAround]}>
      <Text style={[styles.fs50, styles.textBlack]}>Squi<Text style={[styles.textRed]}>p</Text></Text>
        
      </View>
      
    </View>
  );
};

export default Header;

const stylesnichy = StyleSheet.create({
  main: {
    height: 60,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  
});
