//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {isEmptyString, objectInstanceProvider} from '../util/util';
import {notificationAlertProps} from '../shared-components-and-modules/notification-center/notifications-controller';

export const APP_STORE_NAME = 'APP_STORE_NAME';
export const LOGIN_STORE_NAME = 'LOGIN_STORE_NAME';
export const PAGE1EXAMPLE_STORE_NAME = 'PAGE1EXAMPLE_STORE_NAME';
export const PAGE2EXAMPLE_STORE_NAME = 'PAGE2EXAMPLE_STORE_NAME';
export const PAGE3EXAMPLE_STORE_NAME = 'PAGE3EXAMPLE_STORE_NAME';
export const PAGE4EXAMPLE_STORE_NAME = 'PAGE4EXAMPLE_STORE_NAME';
export const RECIPE_BOX_STORE_NAME = 'RECIPE_BOX_STORE_NAME';

/**
 * sd _ Kaybarax
 * @param namespace
 * @param name
 * @constructor
 */
export function ActivityStoreSchema(namespace, name) {
  this.storeSchema = {
    storeName: name,
    namespace: namespace,
    storeKey: !isEmptyString(namespace) ? namespace + name : '___' + name,
    loading: false,
    updated: false,
    loadingMessage: 'Loading...',
  };
}

/**
 * sd _ Kaybarax
 * @param namespace
 * @param name
 * @returns {{loadingMessage: string, storeKey: *, name: *, loading: boolean, updated: boolean}}
 * @constructor
 */
export function AppActivitySchema(namespace, name) {
  ActivityStoreSchema.call(this, namespace, name);
  let schema = this.storeSchema;
  schema.user = null;
  schema.navStore = {
    navigationTrail: [],
    currentNavigationTrailIndex: 0,
    navigatedTo: null,
    navigatedFrom: null,
  };
  // console.log('AppActivitySchema::', this.storeSchema)
  return this.storeSchema;
}

/**
 * sd _ Kaybarax
 * @param namespace
 * @param name
 * @returns {{loadingMessage: string, storeKey: *, name: *, loading: boolean, updated: boolean}}
 * @constructor
 */
export function LoginActivitySchema(namespace, name) {
  ActivityStoreSchema.call(this, namespace, name);
  let schema = this.storeSchema;
  schema.loginForm = {
    usernameOrEmail: null,
  };
  schema.signUpForm = {
    user: null,
  };
  schema.resetPasswordForm = {
    usernameOrEmail: null,
  };
  schema.viewAction = null;
  schema.notificationAlert = objectInstanceProvider(notificationAlertProps);
  // console.log('LoginActivitySchema:: ', this.storeSchema)
  return this.storeSchema;
}

/**
 * sd _ Kaybarax
 * @param namespace
 * @param name
 * @returns {{loadingMessage: string, storeKey: *, name: *, loading: boolean, updated: boolean}}
 * @constructor
 */
export function Page1ExampleActivitySchema(namespace, name) {
  ActivityStoreSchema.call(this, namespace, name);
  let schema = this.storeSchema;
  schema.todo = null;
  schema.notificationAlert = objectInstanceProvider(notificationAlertProps);
  // console.log('Page1ExampleActivitySchema::', this.storeSchema)
  return this.storeSchema;
}

/**
 * sd _ Kaybarax
 * @param namespace
 * @param name
 * @returns {{loadingMessage: string, storeKey: *, name: *, loading: boolean, updated: boolean}}
 * @constructor
 */
export function Page2ExampleActivitySchema(namespace, name) {
  ActivityStoreSchema.call(this, namespace, name);
  let schema = this.storeSchema;
  schema.todo = null;
  schema.notificationAlert = objectInstanceProvider(notificationAlertProps);
  // console.log('Page2ExampleActivitySchema::', this.storeSchema)
  return this.storeSchema;
}

/**
 * sd _ Kaybarax
 * @param namespace
 * @param name
 * @returns {{loadingMessage: string, storeKey: *, name: *, loading: boolean, updated: boolean}}
 * @constructor
 */
export function Page3ExampleActivitySchema(namespace, name) {
  ActivityStoreSchema.call(this, namespace, name);
  let schema = this.storeSchema;
  schema.todo = null;
  schema.notificationAlert = objectInstanceProvider(notificationAlertProps);
  // console.log('Page3ExampleActivitySchema::', this.storeSchema)
  return this.storeSchema;
}

/**
 * sd _ Kaybarax
 * @param namespace
 * @param name
 * @returns {{loadingMessage: string, storeKey: *, name: *, loading: boolean, updated: boolean}}
 * @constructor
 */
export function Page4ExampleActivitySchema(namespace, name) {
  ActivityStoreSchema.call(this, namespace, name);
  let schema = this.storeSchema;
  schema.todo = null;
  schema.notificationAlert = objectInstanceProvider(notificationAlertProps);
  // console.log("Page4ExampleActivitySchema::", this.storeSchema)
  return this.storeSchema;
}

/**
 * sd _ Kaybarax
 * @param namespace
 * @param name
 * @returns {{loadingMessage: string, storeKey: *, name: *, loading: boolean, updated: boolean}}
 * @constructor
 */
export function RecipeBoxActivitySchema(namespace, name) {
  ActivityStoreSchema.call(this, namespace, name);
  let schema = this.storeSchema;
  schema.recipeItems = [];
  schema.selectedRecipe = null;
  schema.user = null;
  schema.notificationAlert = objectInstanceProvider(notificationAlertProps);
  // console.log("RecipeBoxActivitySchema::", this.storeSchema)
  return this.storeSchema;
}
