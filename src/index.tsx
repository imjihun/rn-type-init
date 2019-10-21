/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  StatusBar,
} from 'react-native';
import {
  observer,
  Provider,
} from 'mobx-react';

import {
  RootNavigation,
} from './navigators';
import {
  Store,
} from './stores';

const App: React.FC<{}> = () => {
  const [store, setStore] = useState<Store>()
  useEffect(() => {
    const _store = new Store()
    setStore(_store)
    console.log('jhlim App cdm', _store)
    return (
      () => {
        _store && _store.clear()
        console.log('jhlim App cwum', _store)
      }
    )
  }, []);
  console.log('jhlim App render')
  if (store && store.appStateStore && store.appStateStore.isMountedApp) {
    return (
      <Provider {...store}>
        <StatusBar barStyle="dark-content" />
        <RootNavigation />
      </Provider>
    )
  }
  return <View />
};


export default observer(App);
