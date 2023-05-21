import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../components/Header';
import styles from '../../Styling/ReactNativeStyling';


function PoliceConfrim() {
  return (
    <View>
      <Header />
      <View style={[styles.rounded]}>
        <Text style={[styles.textRed,styles.fs3,styles.textBold]} >Your Call Is Processing</Text>
        </View>
    </View>
  );
}

export default PoliceConfrim;
