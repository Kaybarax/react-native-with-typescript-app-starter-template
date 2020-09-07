//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {observable} from 'mobx';
import {persistStoreUpdatesToAsyncStorageOnPossibleUpdateOfEvents} from './store-utils';
import StoreProviders from './stores-providers';
import {MobX_StoreKey_Identifier_In_AsyncStorage} from './actions-and-stores-data';

/**
 * sd _ Kaybarax
 */
export default class AppStores {

  constructor() {
  }

  persistMyStoresToAsyncStorageOnEvent(myStores) {
    persistStoreUpdatesToAsyncStorageOnPossibleUpdateOfEvents(myStores);
  }

  //to assist with differentiation during storage to persistence media,
  // if application uses several stores classes
  static namespace = 'AppStores_' + MobX_StoreKey_Identifier_In_AsyncStorage;

  stores = {
    appStore: observable(
        StoreProviders.appStore.storeProvider(AppStores.namespace),
    ),
    loginStore: observable(
        StoreProviders.loginStore.storeProvider(AppStores.namespace),
    ),
    page1ExampleStore: observable(
        StoreProviders.page1ExampleStore.storeProvider(AppStores.namespace),
    ),
    page2ExampleStore: observable(
        StoreProviders.page2ExampleStore.storeProvider(AppStores.namespace),
    ),
    page3ExampleStore: observable(
        StoreProviders.page3ExampleStore.storeProvider(AppStores.namespace),
    ),
    page4ExampleStore: observable(
        StoreProviders.page4ExampleStore.storeProvider(AppStores.namespace),
    ),
    recipeBoxStore: observable(
        StoreProviders.recipeBoxStore.storeProvider(AppStores.namespace),
    ),
  };

}
