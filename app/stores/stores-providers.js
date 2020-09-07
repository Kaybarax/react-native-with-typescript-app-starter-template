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
  RECIPE_BOX_STORE_NAME,
  RecipeBoxActivitySchema,
} from './store-schemas';
import {getPersistedStoreKey} from './store-utils';
import {getObjectFromAsyncStorage} from '../util/util';

const StoreProviders = {
  appStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, APP_STORE_NAME),
    storeProvider: (namespace) => new AppActivitySchema(namespace, APP_STORE_NAME),
    currentStoreModelStructure: getObjectFromAsyncStorage(APP_STORE_NAME).then(item => item ||
        new AppActivitySchema(null, APP_STORE_NAME)).catch(error => {
      console.log('appStore currentStoreModelStructure error', error);
      return new AppActivitySchema(null, APP_STORE_NAME);
    }),
  },
  loginStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, LOGIN_STORE_NAME),
    storeProvider: (namespace) => new LoginActivitySchema(namespace, LOGIN_STORE_NAME),
    currentStoreModelStructure: getObjectFromAsyncStorage(LOGIN_STORE_NAME).then(item => item ||
        new LoginActivitySchema(null, LOGIN_STORE_NAME)).catch(error => {
      console.log('loginStore currentStoreModelStructure error', error);
      return new LoginActivitySchema(null, LOGIN_STORE_NAME);
    }),
  },
  page1ExampleStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE1EXAMPLE_STORE_NAME),
    storeProvider: (namespace) => new Page1ExampleActivitySchema(namespace, PAGE1EXAMPLE_STORE_NAME),
    currentStoreModelStructure: getObjectFromAsyncStorage(PAGE1EXAMPLE_STORE_NAME).then(item => item ||
        new Page1ExampleActivitySchema(null, PAGE1EXAMPLE_STORE_NAME)).catch(error => {
      console.log('page1ExampleStore currentStoreModelStructure error', error);
      return new Page1ExampleActivitySchema(null, PAGE1EXAMPLE_STORE_NAME);
    }),
  },
  page2ExampleStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE2EXAMPLE_STORE_NAME),
    storeProvider: (namespace) => new Page2ExampleActivitySchema(namespace, PAGE2EXAMPLE_STORE_NAME),
    currentStoreModelStructure: getObjectFromAsyncStorage(PAGE2EXAMPLE_STORE_NAME).then(item => item ||
        new Page2ExampleActivitySchema(null, PAGE2EXAMPLE_STORE_NAME)).catch(error => {
      console.log('page2ExampleStore currentStoreModelStructure error', error);
      return new Page2ExampleActivitySchema(null, PAGE2EXAMPLE_STORE_NAME);
    }),
  },
  page3ExampleStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE3EXAMPLE_STORE_NAME),
    storeProvider: (namespace) => new Page3ExampleActivitySchema(namespace, PAGE3EXAMPLE_STORE_NAME),
    currentStoreModelStructure: getObjectFromAsyncStorage(PAGE3EXAMPLE_STORE_NAME).then(item => item ||
        new Page3ExampleActivitySchema(null, PAGE3EXAMPLE_STORE_NAME)).catch(error => {
      console.log('page3ExampleStore currentStoreModelStructure error', error);
      return new Page3ExampleActivitySchema(null, PAGE3EXAMPLE_STORE_NAME);
    }),
  },
  page4ExampleStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE4EXAMPLE_STORE_NAME),
    storeProvider: (namespace) => new Page4ExampleActivitySchema(namespace, PAGE4EXAMPLE_STORE_NAME),
    currentStoreModelStructure: getObjectFromAsyncStorage(PAGE4EXAMPLE_STORE_NAME).then(item => item ||
        new Page4ExampleActivitySchema(null, PAGE4EXAMPLE_STORE_NAME)).catch(error => {
      console.log('page4ExampleStore currentStoreModelStructure error', error);
      return new Page4ExampleActivitySchema(null, PAGE4EXAMPLE_STORE_NAME);
    }),
  },
  recipeBoxStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, RECIPE_BOX_STORE_NAME),
    storeProvider: (namespace) => new RecipeBoxActivitySchema(namespace, RECIPE_BOX_STORE_NAME),
    currentStoreModelStructure: getObjectFromAsyncStorage(RECIPE_BOX_STORE_NAME).then(item => item ||
        new RecipeBoxActivitySchema(null, RECIPE_BOX_STORE_NAME)).catch(error => {
      console.log('recipeBoxStore currentStoreModelStructure error', error);
      return new RecipeBoxActivitySchema(null, RECIPE_BOX_STORE_NAME);
    }),
  },
};

export default StoreProviders;
