//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import { DeviceEventEmitter } from 'react-native';
import { AppSecurityModule } from './custom-native-modules';
import { isEmptyString, isNullUndefined } from '../util/util';
import { toastNotificationCallback } from '../shared-components-and-modules/notification-center/notifications-controller';

export function* createPasswordHash(passwordText, userCredentials, toastNotificationAlert) {

  console.log('createPasswordHash');

  AppSecurityModule.createPasswordHash(passwordText,
    (message) => createPasswordHashCallback(message, toastNotificationAlert));

  yield userCredentials;

}

export function createPasswordHashCallback(resp, userCredentials, toastNotificationAlert) {

  console.log('createPasswordHashCallback resp', resp);
  return;

  if (isNullUndefined(resp)) {
    toastNotificationCallback(
      'err',
      'Cannot perform password hash',
      toastNotificationAlert,
    );
    return;
  }

  if (resp.message === 'SUCCESS') {
    toastNotificationCallback(
      'succ',
      'Password hashed',
      toastNotificationAlert,
    );

    userCredentials.password_hash = resp.passwordHash;
    userCredentials.salt = resp.passwordSalt;

  } else if (resp.message === 'FAILURE') {
    toastNotificationCallback(
      'warn',
      'Password hash failed',
      toastNotificationAlert,
    );
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
