//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import {
  getItemFromAsyncStorage, getObjectFromAsyncStorage,
  isNullUndefined,
  objectAHasSameKeysAsObjectB,
  objectKeyExists, removeItemToAsyncStorage,
  storeItemToAsyncStorage,
  stringifyObject,
} from '../util/util';
import {MobX_StoreKey_Identifier_In_AsyncStorage} from './stores-data-store';
import AsyncStorage from '@react-native-community/async-storage';

/**
 * sd _ Kaybarax
 * @returns {object}
 * @param storeKey
 * @param storeProvider
 * @param storeNamespace
 */
export const persistedStoreFromAsyncStorage = async (storeKey, storeProvider, storeNamespace) => {
  let savedStore = await getObjectFromAsyncStorage(storeKey);
  if (isNullUndefined(savedStore)) {
    return null;
  }

  //if store schema is updated, then update persisted store model
  let storeFromSchema = storeProvider.storeProvider(storeNamespace);
  let matchingKeys = objectAHasSameKeysAsObjectB(savedStore, storeFromSchema);
  if (!matchingKeys) {
    //get persisted data to updated store object
    for (let key in savedStore) {
      //if key is still there in new object model
      if (objectKeyExists(storeFromSchema, key)) {
        storeFromSchema[key] = savedStore[key];
      }
    }

    //update persisted store
    await storeItemToAsyncStorage(storeKey, storeFromSchema);
    // and return the updated one
    return storeFromSchema;
  }

  //check for internal structural change
  let {currentStoreObjectStructure} = storeProvider;
  if (isNullUndefined(currentStoreObjectStructure)) {
    return null;
  }
  let internalStructureChanged = false;
  for (let key in storeFromSchema) {
    let fromNewStoreSchema = stringifyObject(storeFromSchema[key]);
    let fromCurrentStoreObjectStructure = stringifyObject(currentStoreObjectStructure[key]);
    if (key !== 'storeName' && key !== 'storeKey' && fromNewStoreSchema !== fromCurrentStoreObjectStructure) {
      //update
      currentStoreObjectStructure[key] = storeFromSchema[key];
      //override and update
      savedStore[key] = storeFromSchema[key];
      internalStructureChanged = true;
    }
  }
  if (internalStructureChanged) {
    await storeItemToAsyncStorage(storeFromSchema.storeName, currentStoreObjectStructure);
    await storeItemToAsyncStorage(storeKey, savedStore);
  }
  return savedStore;
};

/**
 * sd _ Kaybarax
 * @param stores
 */
export async function persistStoresToAsyncStorage(stores) {
  try {
    for (let store of stores) {
      let storeKey = store.store.storeKey;
      await storeItemToAsyncStorage(storeKey, store.store);
      //store the reference for internal structure change if not there already
      let reference = await getItemFromAsyncStorage(store.store.storeName);
      isNullUndefined(reference) &&
      await storeItemToAsyncStorage(store.store.storeName, store.storeSchema());
    }
  } catch (err) {
    console.log('persistStoresToAsyncStorage failure!!');
    alert('Critical failure in persistence of your stores!!');
    //and stop persistence
    await clearAllPersistedStoresToAsyncStorage();
  }
}

/**
 * sd _ Kaybarax
 * @param stores
 */
export const persistStoreUpdatesAsyncStorageOnEvent = async (stores) => {
  try {
    await persistStoresToAsyncStorage(stores);
  } catch (err) {
    console.log('persistStoreUpdatesAsyncStorageOnEvent failure!!');
  }
};

/**
 * sd _ Kaybarax
 * @param storeKey
 */
export async function clearPersistedStoreFromAsyncStorage(storeKey) {
  await removeItemToAsyncStorage(storeKey);
}

/**
 * sd _ Kaybarax
 */
export async function clearAllPersistedStoresToAsyncStorage() {
  try {
    let keys = Object.keys(AsyncStorage);
    for (let key of keys) {
      let storeKey = '' + key;
      if (storeKey.includes(MobX_StoreKey_Identifier_In_AsyncStorage)) {
        await clearPersistedStoreFromAsyncStorage(storeKey);
      }
    }
  } catch (e) {
    console.log(
        'Unable to export function clearAllPersistedStoresToAsyncStorage() {\n!!',
    );
  }
}

/**
 * sd _ Kaybarax
 * @param namespaceProvider
 * @param assignedName
 * @returns {*}
 */
export function getPersistedStoreKey(namespaceProvider, assignedName) {
  return namespaceProvider + assignedName;
}

/**
 * sd _ Kaybarax
 * @param stores
 */
export function persistStoreUpdatesToAsyncStorageOnPossibleUpdateOfEvents(stores) {
  window.addEventListener('mouseup', async () => {
    // console.log("PERSIST on mouseup registered")
    await persistStoreUpdatesAsyncStorageOnEvent(stores);
  });
  window.addEventListener('mousemove', async () => {
    // console.log("PERSIST on mousedown registered")
    await persistStoreUpdatesAsyncStorageOnEvent(stores);
  });
  window.addEventListener('keyup', async () => {
    // console.log("PERSIST on keyup registered")
    await persistStoreUpdatesAsyncStorageOnEvent(stores);
  });
}

/**
 * sd _ by Kaybarax
 */
export function unregisterPersistenceEventListeners() {
  window.removeEventListener('mouseup', persistStoreUpdatesAsyncStorageOnEvent);
  window.removeEventListener('mousemove', persistStoreUpdatesAsyncStorageOnEvent);
  window.removeEventListener('keyup', persistStoreUpdatesAsyncStorageOnEvent);
}
