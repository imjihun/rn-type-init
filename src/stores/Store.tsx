// import { AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { create } from 'mobx-persist'
import { runInAction, keys } from 'mobx'

import { Network } from './networks'

import AppStateStore from './AppStateStore'

export {
  AppStateStore,
}

export class Store {
  _network: Network;

  appStateStore: AppStateStore;

  constructor() {
    console.log('[DEV][LOG][Store][constructor]')
    this._network = new Network(() => '')

    this.appStateStore = new AppStateStore(this, this._network)

    this.hydrate()
  }

  async hydrate() {
    console.log('[DEV][LOG][Store][hydrate]')
    const hydrate = create({ storage: AsyncStorage })
    await hydrate('appStateStore', this.appStateStore)
    await this.appStateStore.initAfterHydrate()

    this.appStateStore.isMountedApp = true

    console.log('[DEV][LOG][Store][hydrate] end')
  }
}
