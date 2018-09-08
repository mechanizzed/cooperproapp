import React, { Component } from 'react';
import { Text } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation';

import Login from '../Screens/Login';
import Dashboard from '../Screens/User/Dashboard';

const LoginStack = createStackNavigator({
  LoginStack: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

const DashboardStack = createStackNavigator({
  Dashboard
});

const ScreenTabs = createBottomTabNavigator({
  Dashboard: {
    screen: DashboardStack
  }
});

const Routes = (userExists = false) =>
  createSwitchNavigator(
    {
      LoginStack,
      ScreenTabs
    },
    {
      initialRouteName: userExists ? 'ScreenTabs' : 'LoginStack'
    }
  );

export default Routes;
