/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import {
  observer,
} from 'mobx-react';

import {
  RootNavigation,
} from './navigators';
import {
  useStore,
} from './stores';

const App: React.FC<{}> = () => {
  const { appStateStore } = useStore()
  useEffect(() => {
    console.log('jhlim App cdm')
    return (
      () => console.log('jhlim App cwum')
    )
  }, []);
  console.log('jhlim App render')
  if (appStateStore && appStateStore.isMountedApp) {
    return (
      <View style={[styles.container]}>
        <StatusBar barStyle="dark-content" />
        <RootNavigation />
      </View>
    )
  }
  return <View />
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})


export default observer(App);
