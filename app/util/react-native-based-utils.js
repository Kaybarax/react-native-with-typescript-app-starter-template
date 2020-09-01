//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import {ToastAndroid} from "react-native";
import {isEmptyArray, isNullUndefined} from './util';

/**
 * sd _ Kaybarax
 * The following mimics React's natural state update behavior.
 * This function might be required to be executed in instances where
 * MobX has run too fast at ~50ms - 100ms, beyond React's state update speed
 * Also useful in ensuring imported components are loaded,
 * in the case in which they cannot be accessed
 */
export function enforceReactNaturalStateUpdateBehavior(self) {
  if (isNullUndefined(self) || typeof self !== 'object') {
    console.log('State update failed');
    return;
  }
  if (typeof self.state !== 'object') {
    self.state = {updated: false};
  }
  self.setState({updated: true});
}

/**
 * sd _ Kaybarax
 * @param classNames
 * @returns {*[]}
 */
export default function className(...classNames) {
  if (!isEmptyArray(classNames)) {
    return [...classNames];
  }
}

/**
 * sd _ Kaybarax
 * Show an android toast message
 * @param message - text to display
 * @param toastDuration - short (default), long
 */
export function showToast(message, toastDuration = 'short') {
  let duration = toastDuration === "long" ? ToastAndroid.LONG : ToastAndroid.SHORT;
  ToastAndroid.show(message, duration);
}
