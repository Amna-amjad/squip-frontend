
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Profile = ({ text }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="truck" size={25} color="#777" />
      <Text style={styles.text}>Amna Khan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
});

export default Profile;
