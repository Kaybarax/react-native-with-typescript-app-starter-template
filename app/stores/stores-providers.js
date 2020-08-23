//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {
  APP_STORE_NAME,
  AppActivitySchema,
  LOGIN_STORE_NAME,
  LoginActivitySchema,
  PAGE1EXAMPLE_STORE_NAME,
  Page1ExampleActivitySchema,
  PAGE2EXAMPLE_STORE_NAME,
  Page2ExampleActivitySchema,
  PAGE3EXAMPLE_STORE_NAME,
  Page3ExampleActivitySchema,
  PAGE4EXAMPLE_STORE_NAME,
  Page4ExampleActivitySchema,
} from './store-schemas';
import {getPersistedStoreKey} from './store-utils';
import {getObjectFromAsyncStorage} from '../util/util';

export const AppStoreProvider = {
  storeKey: (namespace) => getPersistedStoreKey(namespace, APP_STORE_NAME),
  storeProvider: (namespace) => new AppActivitySchema(namespace, APP_STORE_NAME),
  currentStoreObjectStructure: getObjectFromAsyncStorage(APP_STORE_NAME).then(item => item ||
      new AppActivitySchema(null, APP_STORE_NAME)).catch(err => {
    return new AppActivitySchema(null, APP_STORE_NAME);
  }),
};

export const LoginStoreProvider = {
  storeKey: (namespace) => getPersistedStoreKey(namespace, LOGIN_STORE_NAME),
  storeProvider: (namespace) => new LoginActivitySchema(namespace, LOGIN_STORE_NAME),
  currentStoreObjectStructure: getObjectFromAsyncStorage(LOGIN_STORE_NAME).then(item => item ||
      new LoginActivitySchema(null, LOGIN_STORE_NAME)).catch(err => {
    return new LoginActivitySchema(null, LOGIN_STORE_NAME);
  }),
};

export const Page1ExampleStoreProvider = {
  storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE1EXAMPLE_STORE_NAME),
  storeProvider: (namespace) => new Page1ExampleActivitySchema(namespace, PAGE1EXAMPLE_STORE_NAME),
  currentStoreObjectStructure: getObjectFromAsyncStorage(PAGE1EXAMPLE_STORE_NAME).then(item => item ||
      new Page1ExampleActivitySchema(null, PAGE1EXAMPLE_STORE_NAME)).catch(err => {
    return new Page1ExampleActivitySchema(null, PAGE1EXAMPLE_STORE_NAME);
  }),
};

export const Page2ExampleStoreProvider = {
  storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE2EXAMPLE_STORE_NAME),
  storeProvider: (namespace) => new Page2ExampleActivitySchema(namespace, PAGE2EXAMPLE_STORE_NAME),
  currentStoreObjectStructure: getObjectFromAsyncStorage(PAGE2EXAMPLE_STORE_NAME).then(item => item ||
      new Page2ExampleActivitySchema(null, PAGE2EXAMPLE_STORE_NAME)).catch(err => {
    return new Page2ExampleActivitySchema(null, PAGE2EXAMPLE_STORE_NAME);
  }),
};

export const Page3ExampleStoreProvider = {
  storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE3EXAMPLE_STORE_NAME),
  storeProvider: (namespace) => new Page3ExampleActivitySchema(namespace, PAGE3EXAMPLE_STORE_NAME),
  currentStoreObjectStructure: getObjectFromAsyncStorage(PAGE3EXAMPLE_STORE_NAME).then(item => item ||
      new Page3ExampleActivitySchema(null, PAGE3EXAMPLE_STORE_NAME)).catch(err => {
    return new Page3ExampleActivitySchema(null, PAGE3EXAMPLE_STORE_NAME);
  }),
};

export const Page4ExampleStoreProvider = {
  storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE4EXAMPLE_STORE_NAME),
  storeProvider: (namespace) => new Page4ExampleActivitySchema(namespace, PAGE4EXAMPLE_STORE_NAME),
  currentStoreObjectStructure: getObjectFromAsyncStorage(PAGE4EXAMPLE_STORE_NAME).then(item => item ||
      new Page4ExampleActivitySchema(null, PAGE4EXAMPLE_STORE_NAME)).catch(err => {
    return new Page4ExampleActivitySchema(null, PAGE4EXAMPLE_STORE_NAME);
  }),
};
