//key
//sd - self described

import AppStores from './app-stores';
import {AuthStore} from './auth-store';
import RouterStore from './router-store';

/**
 * sd _ Kaybarax
 */
export default class RootStore {
  appStores = new AppStores();
  authStore = new AuthStore(this);
  routerStore = new RouterStore();
}
