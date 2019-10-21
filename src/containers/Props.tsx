
import {
  NavigationStackProp,
} from 'react-navigation-stack';
import {
  Store,
} from '../stores';

export interface StackProps {
  navigation: NavigationStackProp;
  store: Store;
}
