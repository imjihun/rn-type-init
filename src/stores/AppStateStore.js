import { action, observable, runInAction, computed } from 'mobx'
import { persist } from 'mobx-persist'
import { Store } from '.'
import { Network } from './networks'

export default class AppStateStore {
  @persist @observable appIdentifier

  @observable isMountedApp = false
  @observable isLoading = false

  @observable debug = 0

  constructor(store: Store, network: Network) {
    this.store = store
    this.network = network

    this.appIdentifier = null
    this.isMountedApp = false
    this.isLoading = false
  }

  initAfterHydrate() {

  }

}
