//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {DeviceEventEmitter} from 'react-native';
import {toastNotificationCallback} from '../shared-components-and-modules/notification-center/notifications-controller';
import {AppIntentsModule} from './custom-native-modules';

export function openWebPageIntent(url, toastNotificationAlert) {

  DeviceEventEmitter.addListener('password_hash_result',
      (eventResult) => openWebPageIntentListener(eventResult, toastNotificationAlert));

  AppIntentsModule.openWebPageIntent(url,
      (message) => openWebPageIntentCallback(message, toastNotificationAlert));
}

export function openWebPageIntentListener(passwordToValidate, hash, salt) {
  // TODO: will be done
}

export function openWebPageIntentCallback(message, toastNotificationAlert) {
  if (message === 'SUCCESS') {
    toastNotificationCallback(
        'succ',
        'Validate password success',
        toastNotificationAlert,
    );
  } else if (message === 'FAILURE') {
    toastNotificationCallback(
        'warn',
        'Password failed validation',
        toastNotificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_validation_result', null);
  } else {
    toastNotificationCallback(
        'err',
        'Cannot perform password validation',
        toastNotificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_validation_result', null);
  }
}
