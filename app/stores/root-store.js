//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import AppStores from './app-stores';
import {AuthStore} from './auth-store';
import {observable} from 'mobx';

/**
 * sd _ Kaybarax
 */
export default class RootStore {
  @observable
  appStores = new AppStores();
  @observable
  authStore = new AuthStore(this);
}
