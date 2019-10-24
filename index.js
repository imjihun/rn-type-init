/**
 * @format
 */
/**
 * android release apk 에러
 * Invariant Violation: Unsupported top level event type "onGestureHandlerStateChange" dispatched
 * react-native 0.61.2 & react-navigation / react-native-gesture-hadler 에러
 * 해결 import 'react-native-gesture-handler'
 */
import 'react-native-gesture-handler'

import { AppRegistry } from 'react-native';
import App from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
