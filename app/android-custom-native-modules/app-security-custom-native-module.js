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
import {isEmptyString, isNullUndefined} from '../util/util';
import {notificationCallback} from '../shared-components-and-modules/notification-center/notifications-controller';


/**
 *
 * @param passwordText
 * @param userCredentials
 * @param notificationAlert
 * @param callbackResListener
 * @returns {Promise<*>}
 */
export async function createPasswordHash(passwordText, userCredentials, notificationAlert, callbackResListener) {

  console.log('createPasswordHash');

  await AppSecurityModule.createPasswordHash(passwordText,
       (response) => createPasswordHashCallback(response, userCredentials, notificationAlert, callbackResListener));

  return userCredentials;

}

export function createPasswordHashCallback(resp, userCredentials, notificationAlert, callbackResListener ) {

  console.log('createPasswordHashCallback');
  console.log('RES', resp);

  if (isNullUndefined(resp)) {
    callbackResListener.done = true;
    notificationCallback(
        'err',
        'Cannot perform password hash',
        notificationAlert,
    );
    return;
  }

  if (resp.message === 'SUCCESS') {

    notificationCallback(
        'succ',
        'Password hashed',
        notificationAlert,
    );

    userCredentials.password_hash = resp.passwordHash;
    userCredentials.salt = resp.passwordSalt;

    callbackResListener.done = true;

  } else if (resp.message === 'FAILURE') {

    callbackResListener.done = true;

    notificationCallback(
        'warn',
        'Password hash failed',
        notificationAlert,
    );

  }

}

export function validatePasswordWithHashAndSalt(passwordToValidate, hash, salt, notificationAlert) {

  DeviceEventEmitter.addListener('password_hash_result',
      (eventResult) => validatePasswordWithHashAndSaltListener(eventResult, notificationAlert));

  AppSecurityModule.validatePasswordWithHashAndSalt(
      passwordToValidate, hash, salt,
      (message) => validatePasswordWithHashAndSaltCallback(message, notificationAlert));

}

export function validatePasswordWithHashAndSaltListener(eventResult, notificationAlert) {

  if (isEmptyString(eventResult['passwordValidationPassed'])) {
    notificationCallback(
        'err',
        'Validate Password Indeterminate Result',
        notificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_validation_result');
  } else {
    if (eventResult['passwordValidationPassed'] === 'true') {
      notificationCallback(
          'succ',
          'Correct password',
          notificationAlert,
      );
      // todo: what to do next??? -->>> probably login user
      //and unregister listener
      DeviceEventEmitter.removeListener('password_validation_result');
    } else if (eventResult['passwordValidationPassed'] === 'false') {
      notificationCallback(
          'warn',
          'Incorrect password',
          notificationAlert,
      );
      // todo: what to do next???
      //and unregister listener
      DeviceEventEmitter.removeListener('password_validation_result');
    } else {
      notificationCallback(
          'err',
          'Validate Password Indeterminate Result',
          notificationAlert,
      );
      //and unregister listener
      DeviceEventEmitter.removeListener('password_validation_result');
    }
  }

}

export function validatePasswordWithHashAndSaltCallback(message, notificationAlert) {
  if (message === 'SUCCESS') {
    notificationCallback(
        'succ',
        'Validate password success',
        notificationAlert,
    );
  } else if (message === 'FAILURE') {
    notificationCallback(
        'warn',
        'Password failed validation',
        notificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_validation_result', null);
  } else {
    notificationCallback(
        'err',
        'Cannot perform password validation',
        notificationAlert,
    );
    //and unregister listener
    DeviceEventEmitter.removeListener('password_validation_result', null);
  }
}
