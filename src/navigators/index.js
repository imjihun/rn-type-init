import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Home } from '../containers';

const AppNavigator = createStackNavigator({
  Home,
});

export const RootNavigation = createAppContainer(AppNavigator);