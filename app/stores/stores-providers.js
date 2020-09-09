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
import {createCurrentStoreModelStructure, getPersistedStoreKey} from './store-utils';

const StoreProviders = {

  appStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, APP_STORE_NAME),
    storeSchema: AppActivitySchema,
    storeProvider: (namespace) => new AppActivitySchema(namespace, APP_STORE_NAME),
    currentStoreModelStructure: createCurrentStoreModelStructure(
        APP_STORE_NAME,
        new AppActivitySchema(null, APP_STORE_NAME),
    ),
  },

  loginStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, LOGIN_STORE_NAME),
    storeProvider: (namespace) => new LoginActivitySchema(namespace, LOGIN_STORE_NAME),
    currentStoreModelStructure: createCurrentStoreModelStructure(
        LOGIN_STORE_NAME,
        new LoginActivitySchema(null, LOGIN_STORE_NAME),
    ),
  },

  page1ExampleStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE1EXAMPLE_STORE_NAME),
    storeProvider: (namespace) => new Page1ExampleActivitySchema(namespace, PAGE1EXAMPLE_STORE_NAME),
    currentStoreModelStructure: createCurrentStoreModelStructure(
        PAGE1EXAMPLE_STORE_NAME,
        new Page1ExampleActivitySchema(null, PAGE1EXAMPLE_STORE_NAME),
    ),
  },

  page2ExampleStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE2EXAMPLE_STORE_NAME),
    storeProvider: (namespace) => new Page2ExampleActivitySchema(namespace, PAGE2EXAMPLE_STORE_NAME),
    currentStoreModelStructure: createCurrentStoreModelStructure(
        PAGE2EXAMPLE_STORE_NAME,
        new Page2ExampleActivitySchema(null, PAGE2EXAMPLE_STORE_NAME),
    ),
  },

  page3ExampleStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE3EXAMPLE_STORE_NAME),
    storeProvider: (namespace) => new Page3ExampleActivitySchema(namespace, PAGE3EXAMPLE_STORE_NAME),
    currentStoreModelStructure: createCurrentStoreModelStructure(
        PAGE3EXAMPLE_STORE_NAME,
        new Page3ExampleActivitySchema(null, PAGE3EXAMPLE_STORE_NAME),
    ),
  },

  page4ExampleStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, PAGE4EXAMPLE_STORE_NAME),
    storeProvider: (namespace) => new Page4ExampleActivitySchema(namespace, PAGE4EXAMPLE_STORE_NAME),
    currentStoreModelStructure: createCurrentStoreModelStructure(
        PAGE4EXAMPLE_STORE_NAME,
        new Page4ExampleActivitySchema(null, PAGE4EXAMPLE_STORE_NAME),
    ),
  },

  recipeBoxStore: {
    storeKey: (namespace) => getPersistedStoreKey(namespace, RECIPE_BOX_STORE_NAME),
    storeProvider: (namespace) => new RecipeBoxActivitySchema(namespace, RECIPE_BOX_STORE_NAME),
    currentStoreModelStructure: createCurrentStoreModelStructure(
        RECIPE_BOX_STORE_NAME,
        new RecipeBoxActivitySchema(null, RECIPE_BOX_STORE_NAME),
    ),
  },

};

export default StoreProviders;
