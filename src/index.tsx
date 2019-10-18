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
  store,
} from './stores';
import {
  observer,
  Provider,
  MobXProviderContext,
} from 'mobx-react'

const App: React.FC<{}> = () => {
  useEffect(() => {
    console.log('jhlim App useEffect')
  }, []);
  console.log('jhlim App render')
  return (
    <View style={[styles.container]}>
      {store.appStateStore && store.appStateStore.isMountedApp &&
        <Provider {...store}>
          <StatusBar barStyle="dark-content" />
          <RootNavigation />
        </Provider>
      }
    </View >
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default observer(App);
export function useStores(): Store {
  return React.useContext(MobXProviderContext)
}
