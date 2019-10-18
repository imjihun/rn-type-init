import { action, observable, runInAction, computed } from 'mobx'
import { persist } from 'mobx-persist'
import { Store } from '.'
import { Network } from './networks'

export default class AppStateStore {
  store: Store
  network: Network

  @persist @observable appIdentifier: string

  @observable isMountedApp = false
  @observable isLoading = false

  @observable debug = 0
  constructor(store: Store, network: Network) {
    this.store = store
    this.network = network

    this.appIdentifier = ''
    this.isMountedApp = false
    this.isLoading = false
  }

  async initAfterHydrate() {

  }

}
