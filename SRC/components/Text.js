import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Text() {
  return (
    <View style={styles.container}>
      <View style={styles.inputBoxContainer}>
        <Ionicons name="search" size={25} color="black" />
        <TextInput
          style={styles.inputBox}
          placeholderTextColor="black"
          placeholder="Search"
        />
        <Ionicons name="barcode-outline" size={25} color="black" />
      </View>
      <TouchableOpacity>
        <Ionicons name="filter-outline" color={'black'} size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 10,
    flexDirection:'row',
    justifyContent:'space-around',
    margin:10,
  },
  inputBoxContainer: {
    // backgroundColor: 'red',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  inputBox: {
    marginHorizontal: 10,
    flex: 1,
    color: 'black',
    },
});

      