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
    this._network = new Network({ getJwt: () => this.authStore['jsonWebToken'] })

    this.appStateStore = new AppStateStore(this, this._network)

    this.hydrate()
  }

  hydrate = async () => {
    console.log('[DEV][LOG][Store][hydrate] start')
    const hydrate = create({ storage: AsyncStorage })
    await hydrate('appStateStore', this.appStateStore)
    this.appStateStore.initAfterHydrate && await this.appStateStore.initAfterHydrate()

    this.appStateStore.isMountedApp = true

    console.log('[DEV][LOG][Store][hydrate] end')
  }
}
