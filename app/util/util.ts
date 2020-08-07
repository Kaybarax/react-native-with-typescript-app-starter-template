//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import AsyncStorage from '@react-native-community/async-storage';

/**
 * sd _ Kaybarax
 * @param obj
 * @returns {string}
 */
export function stringifyObject(obj) {
  return JSON.stringify(obj);
}

/**
 * sd _ Kaybarax
 * @param obj
 * @returns {null}
 */
export function deepCloneObject(obj) {
  try {
    return {...obj};
  } catch (err) {
    console.log("operation error")
    return null;
  }
}

/**
 * sd _ Kaybarax
 * @param value
 * @returns {boolean}
 */
export function isEmptyString(value) {
  try {
    if (typeof value !== 'string') {
      return true;
    }
    return value.trim() === '';
  } catch (err) {
    return true;
  }
}

/**
 * sd _ Kaybarax
 * @param item
 */
export function isNullUndefined(item) {
  try {
    return item === null || item === undefined;
  } catch (err) {
    return true;
  }
}

/**
 * sd _ Kaybarax
 * @param item
 * @returns {boolean}
 */
export function isStringDatatype(item) {
  try {
    if (typeof item === 'string') {
      return true;
    }
  } catch (err) {
    return false;
  }
}

/**
 * sd _ Kaybarax
 * @param item
 * @returns {boolean}
 */
export function isArrayDatatype(item) {
  try {
    if (Array.isArray(item)) {
      return true;
    }
  } catch (err) {
    return false;
  }
}

/**
 * sd _ Kaybarax
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  try {
    return item !== null && item !== undefined && typeof item === 'object';
  } catch (err) {
    return false;
  }
}

/**
 * sd _ Kaybarax
 * @param obj
 * @param key
 */
export function objectKeyExists(obj, key) {
  try {
    return obj.hasOwnProperty(key);
  } catch (err) {
    return false;
  }
}

/**
 * sd _ Kaybarax
 * @param item
 */
export function isBoolean(item) {
  try {
    return typeof item === 'boolean';
  } catch (err) {
    return false;
  }
}

/**
 * sd _ Kaybarax
 * @param array
 * @returns {boolean}
 */
export function isEmptyArray(array) {
  try {
    if (isNullUndefined(array)) {
      return true;
    } else {
      return !(array instanceof Array && array.length > 0);
    }
  } catch (err) {
    return true;
  }
}

/**
 * sd _ Kaybarax
 * @param obj
 * @returns {*[]|any}
 */
export function objectInstanceProvider(obj) {
  if (isArrayDatatype(obj))
    return [...obj];
  return deepCloneObject(obj);
}

/**
 * sd _ Kaybarax
 * @param item
 * @returns {*|boolean|boolean}
 */
export function isFalse(item) {
  return isBoolean(item) && !item;
}

/**
 * sd _ Kaybarax
 * @param item
 * @returns {*|boolean|boolean}
 */
export function isTrue(item) {
  return isBoolean(item) && item;
}

/**
 * sd _ Kaybarax
 * @param objA
 * @param objB
 * @returns {boolean}
 */
export function objectAHasSameKeysAsObjectB(objA, objB) {

  let allKeysMatch = true;
  let objA_keys = Object.keys(objA);
  let objB_keys = Object.keys(objB);

  if (objA_keys.length !== objB_keys.length) {
    return false;
  }

  for (let key in objA) {
    let keyInObjAExistsInObjB = true;

    if (!objectKeyExists(objB, key)) {
      keyInObjAExistsInObjB = false;
    }

    if (!keyInObjAExistsInObjB) {
      allKeysMatch = false;
      break;
    }
  }

  return allKeysMatch;
}

/**
 * sd _ Kaybarax
 * @param key
 * @param item
 */
export async function storeItemToAsyncStorage(key, item) {
  await AsyncStorage.setItem('' + key, stringifyObject(item));
}

/**
 * sd _ Kaybarax
 * @param key
 */
export async function removeItemToAsyncStorage(key) {
  await AsyncStorage.removeItem('' + key);
}

/**
 * sd _ Kaybarax
 * @param key
 * @returns {string|null}
 */
export async function getItemFromAsyncStorage(key) {
  const value = await AsyncStorage.getItem('' + key);
  return value;
}

/**
 * sd _ Kaybarax
 * @param key
 * @returns {string|null|any}
 */
export async function getObjectFromAsyncStorage(key) {
  let item = await getItemFromAsyncStorage(key);
  if (!isEmptyString(item)) {
    try {
      // @ts-ignore
      let jsonItem = JSON.parse(item);
      if (isObject(jsonItem)) {
        return jsonItem;
      }
      return null;
    } catch (e) {
      return null;
    }
  }
  return item;
}

/**
 * sd _ Kaybarax
 * @param obj
 * @returns {boolean}
 */
export function isEmptyObject(obj) {
  try {
    for (let key in obj) {
      if (obj.hasOwnProperty(key))
        return false;
    }
  } catch (e) {
    return true;
  }
}

/**
 * sd _ Kaybarax
 * @param item
 * @returns {*}
 * NOTE: This is just my declaration of a void item. You can have yours that is totally different from mine
 */
export function isVoid(item) {
  try {
    if (isNaN(parseInt(item))) {
      return (isNullUndefined(item) ||
          isEmptyArray(item) ||
          isEmptyString(item) ||
          isFalse(item));
    }
    return false;
  } catch (e) {
    return true;
  }
}

export function makeId(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return '_' + result + '_';
}
