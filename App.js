/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import {Cryptokitties, LocalEthereum, RadarRelay} from './src/Apps'
import MainApp from './src/Main'

const AppNavigator = createStackNavigator({
  Home: {
    screen: MainApp,
    },
  App1: {
    screen: RadarRelay
    },
  App2: {
    screen: Cryptokitties
    },
  App3: {
    screen: LocalEthereum
    },
  },
  {
    headerMode: 'none'
  });


export default createAppContainer(AppNavigator);
