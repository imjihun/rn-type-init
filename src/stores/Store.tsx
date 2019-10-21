// import { AsyncStorage } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { create } from 'mobx-persist'
import { runInAction, keys, observable } from 'mobx'

import { Network } from './networks'

import AppStateStore from './AppStateStore'

export {
  AppStateStore,
}

let debug = 0
console.log('jhlim open Store.tsx', debug)
export class Store {
  _network: Network;

  @observable appStateStore: AppStateStore;

  constructor() {
    debug++
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

    console.log('[DEV][LOG][Store][hydrate] end')
    this.appStateStore.isMountedApp = true
  }

  async clear() {
    console.log('[DEV][LOG][Store][clear]')
    await this.appStateStore.clear()
    console.log('[DEV][LOG][Store][clear] end')
  }
}
