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
  RootNavigation,
} from './navigators';
import {
  Store,
} from './stores';
import {
  Provider,
  observer,
} from 'mobx-react'

const App: () => React$Node = () => {
  const [store, setStore] = useState()
  // let store = null
  useEffect(() => {
    setStore(new Store())
    // store = new Store(() => console.log('jhlim Store finish'))
    console.log('jhlim App useEffect', store)
  }, []);
  console.log('jhlim App render')
  return (
    <View style={[styles.container]}>
      {
        store && store.appStateStore && store.appStateStore.isMountedApp &&
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <RootNavigation />
        </Provider> || null
      }
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default observer(App);
