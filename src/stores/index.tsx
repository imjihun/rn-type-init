
import { useContext, createContext } from 'react';
import { Store } from './Store';

const storeContext = createContext(new Store())
export function useStore(): Store {
  return useContext(storeContext)
}
// export { Store } from './Store';
