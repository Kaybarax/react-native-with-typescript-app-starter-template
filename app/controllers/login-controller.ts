//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {toastNotificationCallback} from '../shared-components-and-modules/notification-center/notifications-controller';
import {toJS} from 'mobx';
import {APP_SQLITE_DATABASE} from '../app-management/data-manager/declarations';
import {appSQLiteDb} from '../app-management/data-manager/embeddedDb-manager';
import {User, UserCredentials} from '../app-management/data-manager/models-manager';
import {createPasswordHash} from '../abdroid-custom-native-modules/app-security-custom-native-module';
import {isEmptyString, isNullUndefined} from "../util/util";

/**
 * sd _ Kaybarax
 * @param signUpModel
 * @param appStore
 * @param toastNotificationAlert
 */
export function handleSignUp(signUpModel, appStore, toastNotificationAlert) {

    let userSaved;
    let userCredentialsSaved = false;

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;

    // Put the data into the db
    let user: User = toJS(signUpModel.user);

    // get user password salt and hash
    let userCredentials: UserCredentials = {
        username: user.id,
        salt: undefined
    };

    try {
        let yieldedUserCredentials = createPasswordHash(signUpModel.password, userCredentials, toastNotificationAlert);
        let {password_hash, salt}: UserCredentials = yieldedUserCredentials.next().value;
        if (isEmptyString(password_hash) || isNullUndefined(salt)) {
            toastNotificationCallback(
                'err',
                'Sign up failed',
                toastNotificationAlert,
            );
            return;
        }

        //put user in db
        userSaved = appSQLiteDb.addUserStmt(db, user);
        // userSaved = true;
        //put user credentials in db
        appSQLiteDb.addUserCredentialsStmt(db, userCredentials);
        userCredentialsSaved = true;

        toastNotificationCallback(
            'succ',
            'User signed up',
            toastNotificationAlert,
        );

    } catch (err) {

        if (!userSaved) {
            //todo: rollback
        }

        toastNotificationCallback(
            'err',
            'User sign up failed',
            toastNotificationAlert,
        );
        return;
    }

}

/**
 * sd _ Kaybarax
 * @param loginForm
 * @param toastNotificationAlert
 * @param appStore
 * @param authStore
 * @param navigation
 */
export function handleLogin(loginForm, toastNotificationAlert, appStore, authStore, navigation) {

    toastNotificationCallback(
        'info',
        'Signup Functionality upcoming',
        toastNotificationAlert,
    );

    // let db = window.db;//get db;
    // // Set up an object store and transaction
    // let tx = db.transaction([APP_SQLITE_DATABASE.USERS], 'readonly');
    // let store = tx.objectStore(APP_SQLITE_DATABASE.USERS);
    //
    // // Set up a request to get all users
    // let req = store.getAll();
    //
    // // If we get an error
    // req.onerror = function (event) {
    //   console.log('error getting users ', event.target.errorCode);
    //   toastNotificationCallback('err', 'Cannot query users', toastNotificationAlert);
    // }
    //
    // let users = [];
    // // onsuccess handler
    // req.onsuccess = function (event) {
    //
    //   users = event.target.result;
    //
    //   let user = users.find(item => item.usernameOrEmail === loginForm.usernameOrEmail &&
    //       item.password === loginForm.password);
    //   if (isNullUndefined(user)) {
    //     toastNotificationCallback('err', 'User not found', toastNotificationAlert);
    //     return;
    //   }
    //   appStore.user = deepCloneObject(user);
    //   toastNotificationCallback('succ', 'Login success', toastNotificationAlert);
    //   //to allow notification display
    //   setTimeout(_ => authStore.handleLogin(), 2000)
    // }

}

/**
 * sd _ Kaybarax
 * @param toastNotificationAlert
 */
export function handleResetPassword(toastNotificationAlert) {
    // todo: ... your logic ... you get the drill by now

    toastNotificationCallback(
        'succ',
        'I will leave this one for you))',
        toastNotificationAlert,
    );
    // toastNotificationCallback('info', 'You can play around with this!)', toastNotificationAlert)
}
