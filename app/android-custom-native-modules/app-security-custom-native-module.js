//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {DeviceEventEmitter} from 'react-native';
import {AppSecurityModule} from './custom-native-modules';
import {isEmptyString} from '../util/util';
import {toastNotificationCallback} from '../shared-components-and-modules/notification-center/notifications-controller';

export function * createPasswordHash(passwordText, userCredentials, toastNotificationAlert)  {

  console.log('createPasswordHash');

  // DeviceEventEmitter.addListener('password_hash_result',
  //     (eventResult) => createPasswordHashListener(eventResult, userCredentials, toastNotificationAlert));

  AppSecurityModule.createPasswordHash(passwordText,
      (message) => createPasswordHashCallback(message, toastNotificationAlert));

  yield userCredentials;

}

export function createPasswordHashListener(eventResult, userCredentials, toastNotificationAlert) {

  if (!isEmptyString(e['passwordHash']) || !isEmptyString(e['passwordSalt'])) {
    toastNotificationCallback(
        'err',
        'Hash Password Indeterminate Result',
        toastNotificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_hash_result');
  } else {
    userCredentials.password_hash = eventResult.passwordHash;
    userCredentials.salt = eventResult.passwordSalt;
  }

}

export function createPasswordHashCallback(resp, toastNotificationAlert) {
  console.log('createPasswordHashCallback resp', resp);
  return;
  if (resp.message === 'SUCCESS') {
    toastNotificationCallback(
        'succ',
        'Password hashed',
        toastNotificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_hash_result');
  } else if (resp.message === 'FAILURE') {
    toastNotificationCallback(
        'warn',
        'Password hash failed',
        toastNotificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_hash_result');
  } else {
    toastNotificationCallback(
        'err',
        'Cannot perform password hash',
        toastNotificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_hash_result');
  }
}

export function validatePasswordWithHashAndSalt(passwordToValidate, hash, salt, toastNotificationAlert) {

  DeviceEventEmitter.addListener('password_hash_result',
      (eventResult) => validatePasswordWithHashAndSaltListener(eventResult, toastNotificationAlert));

  AppSecurityModule.validatePasswordWithHashAndSalt(
      passwordToValidate, hash, salt,
      (message) => validatePasswordWithHashAndSaltCallback(message, toastNotificationAlert));

}

export function validatePasswordWithHashAndSaltListener(eventResult, toastNotificationAlert) {

  if (isEmptyString(eventResult['passwordValidationPassed'])) {
    toastNotificationCallback(
        'err',
        'Validate Password Indeterminate Result',
        toastNotificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_validation_result');
  } else {
    if (eventResult['passwordValidationPassed'] === 'true') {
      toastNotificationCallback(
          'succ',
          'Correct password',
          toastNotificationAlert,
      );
      // todo: what to do next??? -->>> probably login user
      //and unregister listener
      DeviceEventEmitter.removeListener('password_validation_result');
    } else if (eventResult['passwordValidationPassed'] === 'false') {
      toastNotificationCallback(
          'warn',
          'Incorrect password',
          toastNotificationAlert,
      );
      // todo: what to do next???
      //and unregister listener
      DeviceEventEmitter.removeListener('password_validation_result');
    } else {
      toastNotificationCallback(
          'err',
          'Validate Password Indeterminate Result',
          toastNotificationAlert,
      );
      //and unregister listener
      DeviceEventEmitter.removeListener('password_validation_result');
    }
  }

}

export function validatePasswordWithHashAndSaltCallback(message, toastNotificationAlert) {
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
