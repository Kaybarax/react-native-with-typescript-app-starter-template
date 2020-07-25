//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import {observable} from 'mobx';
import {
  persistedStoreFromAsyncStorage,
  persistStoreUpdatesToAsyncStorageOnPossibleUpdateOfEvents,
} from './store-utils';
import {
  AppStoreProvider,
  Page1ExampleStoreProvider,
  Page2ExampleStoreProvider,
  Page3ExampleStoreProvider,
  Page4ExampleStoreProvider,
} from './stores-providers';
import {MobX_StoreKey_Identifier_In_AsyncStorage} from './stores-data-store';

/**
 * sd _ Kaybarax
 */
export default class AppStores {

  constructor() {
    //init handle of persistence to local storage
    // this.persistMyStoresToAsyncStorageOnEvent(this.stores);
  }

  persistMyStoresToAsyncStorageOnEvent(myStores) {
    persistStoreUpdatesToAsyncStorageOnPossibleUpdateOfEvents(myStores);
  }

  //to assist with differentiation during storage to persistence media, if application uses several stores classes
  static namespace = 'AppStores_' + MobX_StoreKey_Identifier_In_AsyncStorage;

  @observable
  app = persistedStoreFromAsyncStorage(
      AppStoreProvider.storeKey(AppStores.namespace),
      AppStoreProvider,
      AppStores.namespace,
  )
      .then(store => store || AppStoreProvider.storeProvider(AppStores.namespace))
      .catch(err => {
        return AppStoreProvider.storeProvider(AppStores.namespace);
      });

  @observable
  page1Example = persistedStoreFromAsyncStorage(
      Page1ExampleStoreProvider.storeKey(AppStores.namespace),
      Page1ExampleStoreProvider,
      AppStores.namespace,
  ).then(store => store || Page1ExampleStoreProvider.storeProvider(AppStores.namespace))
      .catch(err => {
        return Page1ExampleStoreProvider.storeProvider(AppStores.namespace);
      });

  @observable
  page2Example = persistedStoreFromAsyncStorage(
      Page2ExampleStoreProvider.storeKey(AppStores.namespace),
      Page2ExampleStoreProvider,
      AppStores.namespace,
  ).then(store => store || Page2ExampleStoreProvider.storeProvider(AppStores.namespace))
      .catch(err => {
        return Page2ExampleStoreProvider.storeProvider(AppStores.namespace);
      });

  @observable
  page3Example = persistedStoreFromAsyncStorage(
      Page3ExampleStoreProvider.storeKey(AppStores.namespace),
      Page3ExampleStoreProvider,
      AppStores.namespace,
  ).then(store => store || Page3ExampleStoreProvider.storeProvider(AppStores.namespace))
      .catch(err => {
        return Page3ExampleStoreProvider.storeProvider(AppStores.namespace);
      });

  @observable
  page4Example = persistedStoreFromAsyncStorage(
      Page4ExampleStoreProvider.storeKey(AppStores.namespace),
      Page4ExampleStoreProvider,
      AppStores.namespace,
  ).then(store => store || Page4ExampleStoreProvider.storeProvider(AppStores.namespace))
      .catch(err => {
        return Page4ExampleStoreProvider.storeProvider(AppStores.namespace);
      });

  // collect for provision for offline storage either to localstorage, indexedDB or any other app-offline storage
  // Every store that you add, MAKE SURE to add it also here
  stores = [
    {
      store: this.app,
      storeSchema: () => AppStoreProvider.storeProvider(AppStores.namespace),
      storeProvider: AppStoreProvider,
    },
    {
      store: this.page1Example,
      storeSchema: () => Page1ExampleStoreProvider.storeProvider(AppStores.namespace),
      storeProvider: Page1ExampleStoreProvider,
    },
    {
      store: this.page2Example,
      storeSchema: () => Page2ExampleStoreProvider.storeProvider(AppStores.namespace),
      storeProvider: Page2ExampleStoreProvider,
    },
    {
      store: this.page3Example,
      storeSchema: () => Page3ExampleStoreProvider.storeProvider(AppStores.namespace),
      storeProvider: Page3ExampleStoreProvider,
    },
    {
      store: this.page4Example,
      storeSchema: () => Page4ExampleStoreProvider.storeProvider(AppStores.namespace),
      storeProvider: Page4ExampleStoreProvider,
    },
  ];

}
