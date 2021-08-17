import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import SignupLoginScreen from './screens/SignupLoginScreen'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    ) 
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  SignupLoginScreen: {
    screen: SignupLoginScreen
  },

  HomeScreen: {
    screen: HomeScreen
  },

  ExchangeScreen: {
    screen: ExchangeScreen
  },
});

const AppContainer = createAppContainer(BottomTabNavigator);