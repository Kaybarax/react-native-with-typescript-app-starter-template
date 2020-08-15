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

/**
 * sd _ Kaybarax
 */
export default class RootStore {
  appStores = new AppStores();
  authStore = new AuthStore(this);
}
