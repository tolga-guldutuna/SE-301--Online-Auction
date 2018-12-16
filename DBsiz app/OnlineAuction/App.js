/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, } from 'react-native';
import { AppRegistiry, Image } from 'react-native';


import Routes from './View/Routes';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes />
      </View>
    )
  }
}



const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
     
    },
  }
)